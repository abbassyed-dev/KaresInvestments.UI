import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponseDto } from '../../models/login-response.model';

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {

    $user = new BehaviorSubject<LoginResponseDto | undefined>(undefined);

    constructor(private cookieService: CookieService) { }

    setUser(user: LoginResponseDto): void {
        this.$user.next(user);
        localStorage.setItem('userDetails', JSON.stringify(user));
    }

    user(): Observable<LoginResponseDto | undefined> {
        return this.$user.asObservable();
    }

    getUser(): LoginResponseDto | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: LoginResponseDto = JSON.parse(userDetails);
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
            const user: LoginResponseDto = JSON.parse(userDetails);
            return user.email;
        }
        return undefined;
    }

    getLoggedInUserFullName(): string | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: LoginResponseDto = JSON.parse(userDetails);
            return user.lastName + " " + user.firstName;
        }
        return undefined;
    }

    getLoggedInUserUserId(): string | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: LoginResponseDto = JSON.parse(userDetails);
            return user.userId;
        }
        return undefined;
    }

    getLoggedInUserProperty<T extends keyof LoginResponseDto>(property: T): LoginResponseDto[T] | undefined {
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            const user: LoginResponseDto = JSON.parse(userDetails);
            return user[property];
        }
        return undefined;
    }

    updateUserName(firstName: string, lastName: string): void {

        // Get the existing user details from localStorage
        const userDetails = localStorage.getItem('userDetails');

        if (userDetails) {
            // Parse the existing user data
            const user: LoginResponseDto = JSON.parse(userDetails);

            // Update the username or any other property
            user.firstName = firstName;
            user.lastName = lastName;
            this.setUser(user);
            console.log("Updated");
            // Store the updated user object back into localStorage
            //localStorage.setItem('userDetails', JSON.stringify(userDetails));
        }
    }



}
