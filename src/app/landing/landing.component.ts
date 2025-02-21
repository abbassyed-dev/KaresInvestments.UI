import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    @ViewChild('mobileMenu') mobileMenu!: ElementRef

    constructor(public layoutService: LayoutService, public router: Router) { }

    navigateAndClose(route: string) {
        // Navigate to the selected route and close the menu if it is open
        this.router.navigate([route]);
        this.mobileMenu.nativeElement.classList.add('hidden');  // Hide menu after selection
    }
}
