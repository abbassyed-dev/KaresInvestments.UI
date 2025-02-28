import { Component } from '@angular/core';
import { UserInterest } from '../../models/user-interest.model';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    model: UserInterest;
    registrationConfirmation = false;
    phoneNo = '1234567890';
    email = 'Khurram@KaresInvestments.com'
    constructor(private dataService: ContactService, private toastr: ToastrService, private router: Router) {

    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Form Submitted:', form.value);
            this.dataService.saveUserInterest(this.model)
                .subscribe({
                    next: (response) => {
                        this.registrationConfirmation = true;
                    }
                });
        } else {
            this.toastr.error("Something went wrong. Please try again later.");
        }
    }

    regDialogClose() {
        this.registrationConfirmation = false;
        this.router.navigateByUrl('/');
    }

}


