import { Component } from '@angular/core';
import { UserInterest } from '../../models/user-interest.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    model: UserInterest;

    onSubmit() {
        // if (form.valid) {
        //   console.log('Form Submitted:', form.value);
        //   this.dataService.saveUserInterest(this.model)
        //     .subscribe({
        //       next: (response) => {
        //         this.registrationConfirmation = true;
        //       }
        //     });
        // } else {
        //   this.toastr.error("Something went wrong. Please try again later.");
        // }
    }

}


