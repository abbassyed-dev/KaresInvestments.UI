import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take, finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { AuthStateService } from '../services/auth-state.service';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    constructor(
        private spinnerService: SpinnerService,
        private toastr: ToastrService,
        private cookieService: CookieService,
        private router: Router,
        private authStateService: AuthStateService,
        private loginService: LoginService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();

        if (this.shouldInterceptRequest(request)) {
            return next.handle(request).pipe(finalize(() => this.spinnerService.hide()));
        }

        request = this.addAuthToken(request);

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    return this.handle401Error(request, next);
                }
                return this.handleError(error);
            }),
            finalize(() => this.spinnerService.hide())
        );
    }

    private addAuthToken(request: HttpRequest<any>): HttpRequest<any> {
        const token = this.cookieService.get('Authorization');
        return request.clone({
            setHeaders: { Authorization: token }
        });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.loginService.refreshToken().pipe(
                switchMap((newToken: string) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(newToken);
                    this.cookieService.set('Authorization', newToken);
                    return next.handle(this.addAuthToken(request));
                }),
                catchError((err) => {
                    this.isRefreshing = false;
                    this.authStateService.logout();
                    this.router.navigate(['/login']);
                    this.toastr.error('Session expired. Please log in again.', 'Session Expired');
                    return throwError(() => err);
                })
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter(token => token !== null),
                take(1),
                switchMap(token => next.handle(this.addAuthToken(request)))
            );
        }
    }

    private shouldInterceptRequest(request: HttpRequest<any>): boolean {
        const isLoginRequest = request.url.includes('/login');
        const isUserInterestRequest = request.url.includes('/api/UserInterest') && request.method === 'POST';
        return isLoginRequest || isUserInterestRequest;
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unexpected error occurred.';
        if (error.status === 0) {
            errorMessage = 'API Server is Down/Not running. Please try again later.';
            this.toastr.error(errorMessage, 'Unable to Connect');
        } else if (error.status === 401) {
            errorMessage = 'Unauthorized access. Please log in again.';
            this.authStateService.logout();
            this.router.navigate(['/login']);
        } else if (error.error && error.error.message) {
            errorMessage = error.error.message;
        } else {
            this.toastr.error(error.error || 'An error occurred', 'Error');
        }

        return throwError(() => ({
            message: errorMessage,
            status: error.status,
            statusText: error.statusText,
            code: error.error?.code || 'UNKNOWN_ERROR'
        }));
    }
}
