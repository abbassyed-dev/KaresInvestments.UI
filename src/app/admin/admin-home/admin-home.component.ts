import { Component } from '@angular/core';
import { AuthStateService } from '../../shared/services/auth-state.service';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

    constructor(private authStateService: AuthStateService) { }

    userName = `${this.authStateService.getLoggedInUserProperty('lastName')} ${this.authStateService.getLoggedInUserProperty('firstName')}`;
}