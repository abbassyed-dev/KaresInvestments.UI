import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.toolbar.component.scss']
})
export class AppTopBarComponent {

    items: MenuItem[];

    @Input("userName") userName: string;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) {
    }

    @Output() action = new EventEmitter<string>();

    logOut() {
        this.action.emit("logOut");
    }

    showProfile() {
        this.action.emit("showProfile");
    }

    changePassword() {
        this.action.emit("changePassword");
    }

    ngOnInit() {
        this.items = [{
            items: [{
                label: 'My Profile',
                icon: 'pi pi-user',
                command: () => {
                    this.showProfile();
                }
            },
            {
                label: 'Change Password',
                icon: 'pi pi-key',
                command: () => {
                    this.changePassword();
                }
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => {
                    this.logOut();
                }
            }
            ]
        }];
    }
}
