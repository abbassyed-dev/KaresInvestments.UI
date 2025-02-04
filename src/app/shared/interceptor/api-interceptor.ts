// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent,
//     HttpInterceptor,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, finalize } from 'rxjs/operators';
// import { SpinnerService } from '../services/spinner.service';
// import { ToastrService } from 'ngx-toastr';


// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {
//     constructor(private spinnerService: SpinnerService, private toastr: ToastrService) { }

//     intercept(
//         request: HttpRequest<any>,
//         next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//         this.spinnerService.show();
//         return next.handle(request).pipe(
//             catchError((error) => {
//                 if (error.status === 0) {
//                     this.toastr.error("API Server is Down/Not running. Please try again later.", "Unable to Connect");
//                 }
//                 return throwError(() => new Error(error));
//             }),
//             finalize(() => {
//                 setTimeout(() => {
//                     this.spinnerService.hide();
//                 }, 1000);
//             }),
//         );
//     }
// }
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { AuthStateService } from '../services/auth-state.service';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private toastr: ToastrService,
        private cookieService: CookieService, private router: Router, private authStateService: AuthStateService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show(); // Show the spinner when the request starts

        // Check if the request should be whitelisted
        if (this.shouldInterceptRequest(request)) {
            return next.handle(request).pipe(
                catchError((error: HttpErrorResponse) => this.handleError(error)),
                finalize(() => {
                    // Hide the spinner after the whitelisted request completes (success or failure)
                    this.spinnerService.hide();
                })
            );
        }

        request = request.clone({
            setHeaders: {
                'Authorization': this.cookieService.get('Authorization')
            }
        });

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => this.handleError(error)),
            finalize(() => {
                // Hide the spinner after the request completes (success or failure)
                this.spinnerService.hide();
            })
        );
    }

    private shouldInterceptRequest(request: HttpRequest<any>): boolean {
        // Check if the URL is either /login or /api/UserInterest (POST method)
        const isLoginRequest = request.urlWithParams.indexOf('/login') > -1;
        const isUserInterestRequest = request.urlWithParams.indexOf('/api/UserInterest') > -1 && request.method === 'POST';

        // If either of these two conditions is true, we do not add the token
        return isLoginRequest || isUserInterestRequest;
    }

    // private handleError(error: HttpErrorResponse) {
    //     let errorMessage = 'An unexpected error occurred.';

    //     if (error.status === 0) {
    //         // Network or server connection error
    //         errorMessage = 'API Server is Down/Not running. Please try again later.';
    //         this.toastr.error(errorMessage, 'Unable to Connect');
    //     } else if (error.error && error.error.message) {
    //         // Extract message from structured error response
    //         errorMessage = error.error.message || 'An error occurred';
    //         // this.toastr.error(errorMessage, 'Error');
    //     } else {
    //         // Generic error handling for other types of HTTP errors
    //         this.toastr.error(error.error || 'An error occurred', 'Error');
    //     }

    //     // Return a structured error object
    //     return throwError(() => ({
    //         message: errorMessage,
    //         status: error.status,
    //         statusText: error.statusText,
    //         code: error.error?.code || 'UNKNOWN_ERROR'
    //     }));
    // }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unexpected error occurred.';
        if (error.status === 0) {
            // Network or server connection error
            errorMessage = 'API Server is Down/Not running. Please try again later.';
            this.toastr.error(errorMessage, 'Unable to Connect');
        } else if (error.status === 401) {
            // Handle token expiration or unauthorized errors
            if (this.isTokenExpired()) {
                // Token has expired, so logout the user
                this.toastr.error("Redirecting to Login", "Session Expired");
                this.authStateService.logout();
                this.router.navigate(['/login']); // Redirect to login page
            } else {
                // Handle other 401 cases (e.g., invalid token, missing token)
                errorMessage = 'Unauthorized access. Please log in again.';
                this.authStateService.logout();
                this.router.navigate(['/login']); // Redirect to login page
            }
        } else if (error.error && error.error.message) {
            // Extract message from structured error response
            errorMessage = error.error.message || 'An error occurred';
            // this.toastr.error(errorMessage, 'Error');
        } else {
            // Generic error handling for other types of HTTP errors
            this.toastr.error(error.error || 'An error occurred', 'Error');
        }

        // Return a structured error object
        return throwError(() => ({
            message: errorMessage,
            status: error.status,
            statusText: error.statusText,
            code: error.error?.code || 'UNKNOWN_ERROR'
        }));
    }

    // Helper method to check if the JWT token is expired
    // private isTokenExpired(): boolean {
    //     const token = this.cookieService.get('Authorization');
    //     if (!token) return true; // No token, treat as expired.

    //     const payload = this.parseJwt(token);
    //     const exp = payload?.exp;
    //     if (exp) {
    //         const expirationDate = new Date(exp * 1000); // exp is in seconds
    //         return expirationDate < new Date();
    //     }
    //     return true;
    // }

    // Helper method to check if the JWT token is expired (with a 10-minute buffer)
    private isTokenExpired(): boolean {
        const token: string | null = this.cookieService.get('Authorization');
        if (!token) return true; // No token, treat as expired.

        const payload: any = this.parseJwt(token);
        const exp: number | undefined = payload?.exp;

        if (exp) {
            const expirationDate: number = exp * 1000; // Convert exp (seconds) to milliseconds
            const bufferTime: number = 10 * 60 * 1000; // 10 minutes in milliseconds
            return expirationDate - bufferTime < Date.now();
        }

        return true; // If exp is not present, treat as expired.
    }

    // Helper method to decode a JWT token
    private parseJwt(token: string): any {
        const parts = token.split('.');
        if (parts.length !== 3) return null;

        const decoded = atob(parts[1]);
        return JSON.parse(decoded);
    }

}

