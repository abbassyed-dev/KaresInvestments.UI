import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterest } from '../models/user-interest.model';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  model: UserInterest;
  registrationConfirmation: boolean = false;

  constructor(private dataService: RegisterService,
    private router: Router, private toastr: ToastrService
  ) {
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNum: '',
      remarks: ''
    }
  }

  onSubmit(form: any) {
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
