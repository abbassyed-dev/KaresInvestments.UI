import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { AuthStateService } from '../shared/services/auth-state.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const cookieService = inject(CookieService);
    const authStateService = inject(AuthStateService);

    const user = authStateService.getUser();

    // Check for the JWT Token
    let token = cookieService.get('Authorization');

    if (token && user) {
        token = token.replace('Bearer ', '');
        const decodedToken: any = jwtDecode(token);
        if (!decodedToken || isTokenExpired(decodedToken.exp)) {
            router.createUrlTree(['/kares/login']);
            return false;
        } else {
            if (user.isAdmin && state.url !== '/dashboard/admin') {
                router.navigate(['/dashboard/admin']);
                return false; // Prevent further navigation
            } else if (!user.isAdmin && state.url !== '/dashboard/user') {
                router.navigate(['/dashboard/user']);
                return false; // Prevent further navigation
            }
        }
        return true;
    } else {
        authStateService.logout();
        router.createUrlTree(['/kares/login']);
        return false;
    }


};


// Helper to check if token is expired
function isTokenExpired(expiration: number): boolean {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return expiration < currentTime;
}

