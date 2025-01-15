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

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private toastr: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show(); // Show the spinner when the request starts

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'An unexpected error occurred.';

                if (error.status === 0) {
                    // Network or server connection error
                    errorMessage = 'API Server is Down/Not running. Please try again later.';
                    this.toastr.error(errorMessage, 'Unable to Connect');
                } else if (error.error && error.error.message) {
                    // Extract message from structured error response (e.g., { code: 'InvalidPassword', message: 'Incorrect Password' })
                    errorMessage = error.error.message || 'An error occurred';
                    // this.toastr.error(errorMessage, 'Error');
                } else {
                    // Generic error handling for other types of HTTP errors
                    this.toastr.error(error.statusText || 'An error occurred', 'Error');
                }

                // Return a structured error object
                return throwError(() => ({
                    message: errorMessage,
                    status: error.status,
                    statusText: error.statusText,
                    code: error.error?.code || 'UNKNOWN_ERROR'
                }));
            }),
            finalize(() => {
                // Hide the spinner after request completes
                setTimeout(() => {
                    this.spinnerService.hide();
                }, 1000); // Optional delay to show spinner for 1 second
            })
        );
    }
}

