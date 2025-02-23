import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, merge, timer, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthStateService } from './auth-state.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class IdleTimeoutService {
    private idleTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds
    private activitySubscription!: Subscription;

    constructor(private router: Router, private ngZone: NgZone, private authState: AuthStateService,
        private toastr: ToastrService) { }

    startWatching(): void {
        this.ngZone.runOutsideAngular(() => {
            const activityEvents = merge(
                fromEvent(document, 'mousemove'),
                fromEvent(document, 'keydown'),
                fromEvent(document, 'click'),
                fromEvent(document, 'scroll'),
                fromEvent(document, 'touchstart')
            );

            if (this.activitySubscription) {
                this.activitySubscription.unsubscribe();
            }

            this.activitySubscription = activityEvents.pipe(
                switchMap(() => timer(this.idleTimeout))
            ).subscribe(() => {
                this.ngZone.run(() => {
                    this.authState.logout();
                    this.toastr.error("Redirecting to Login", "You were Inactive.");
                    this.router.navigate(['/login']);
                });
            });
        });
    }

    // private logoutUser(): void {
    //     console.log('User is idle. Logging out...');
    //     this.router.navigate(['/kares/login']); // Redirect to login page
    // }

    stopWatching(): void {
        if (this.activitySubscription) {
            this.activitySubscription.unsubscribe();
        }
    }
}
