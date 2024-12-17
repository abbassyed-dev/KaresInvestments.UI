import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {

    $user = new BehaviorSubject<User | undefined>(undefined);

    constructor(private cookieService: CookieService) { }

    setUser(user: User): void {
        this.$user.next(user);
        localStorage.setItem('userDetails', JSON.stringify(user));
    }

    user(): Observable<User | undefined> {
        return this.$user.asObservable();
    }

    getUser(): User | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: User = JSON.parse(userDetails);
            return user;
        }
        return undefined;
    }

    logout(): void {
        localStorage.clear();
        this.cookieService.delete('Authorization', '/');
        this.$user.next(undefined);
    }

    getLoggedInUserEmailId(): string | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: User = JSON.parse(userDetails);
            return user.email;
        }
        return undefined;
    }

    getLoggedInUserFullName(): string | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: User = JSON.parse(userDetails);
            return user.lastName + " " + user.firstName;
        }
        return undefined;
    }

    getLoggedInUserUserId(): string | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: User = JSON.parse(userDetails);
            return user.userId;
        }
        return undefined;
    }

    getLoggedInUserProperty<T extends keyof User>(property: T): User[T] | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: User = JSON.parse(userDetails);
            return user[property];
        }
        return undefined;
    }

}
