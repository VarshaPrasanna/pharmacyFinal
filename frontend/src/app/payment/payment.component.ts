import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  submitted = false;
  addressForm! : FormGroup;
  paymentForm! : FormGroup;

  constructor(private fb: FormBuilder,) { 
                this.mainForm();
              }

  ngOnInit(): void {} 
  
  mainForm(){
    this.addressForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      address: ["", Validators.required],
      city: ['', [Validators.required]],
      pincode:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      state: ['', Validators.required]
    });

    this.paymentForm = this.fb.group({
      cardName: ["", [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      expDate: ["", Validators.required],
      cvv : ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3), Validators.maxLength(4)]]
    });
  }


  //Getter to access form control

  get AddressForm(){
    return this.addressForm.controls;
  }

  get PaymentForm(){
    return this.paymentForm.controls;
  }


}
