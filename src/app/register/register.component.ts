import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobile: number | undefined;

  constructor() {

  }


  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.log('Form Invalid');
    }
  }


}
