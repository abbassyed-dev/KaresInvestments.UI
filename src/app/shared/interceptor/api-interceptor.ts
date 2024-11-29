import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private toastr: ToastrService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(request).pipe(
            catchError((error) => {
                if (error.status === 0) {
                    this.toastr.error("API Server is Down/Not running. Please try again later.", "Unable to Connect");
                }
                return throwError(() => new Error(error));
            }),
            finalize(() => {
                setTimeout(() => {
                    this.spinnerService.hide();
                }, 1000);
            }),
        );
    }
}
