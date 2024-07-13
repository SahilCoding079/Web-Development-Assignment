import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkoutForm = new FormGroup({
    user : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email : new FormControl('',[Validators.required,Validators.email]),
    number : new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
    address : new FormControl('')
  })

  get user()
  {
    return this.checkoutForm.get('user');
  }

  get email()
  {
    return this.checkoutForm.get('email');
  }

  get contact()
  {
    return this.checkoutForm.get('number');
  }

  name = "Enter Name";
  emailText = "Enter Email";
  number = 'Enter Contact No.';
  address = "Enter Address";
  review = "FeedBack";  

  checkout()
  {
    console.log(this.checkoutForm.value);
  }


}
