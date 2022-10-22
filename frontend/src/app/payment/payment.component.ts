import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../order.service';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  submitted = false;
  addressForm!: FormGroup;
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private orderService: OrderService,
    private cartService: CartService,
    private productService: ProductService) {
    this.mainForm();
  }

  ngOnInit(): void { }

  mainForm() {
    this.addressForm = this.fb.group({
      //fullName: ["", [Validators.required, Validators.minLength(3)]],
      streetAddress: ["", Validators.required],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      state: ['', Validators.required]
    });

    this.paymentForm = this.fb.group({
      cardName: ["", [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      expDate: ["", Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3), Validators.maxLength(4)]]
    });
  }


  //Getter to access form control

  get AddressForm() {
    return this.addressForm.controls;
  }

  get PaymentForm() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addressForm.value);

    let cart: any = this.cartService.loadCart();
    let products_arr: any[] = [];

    for (let i = 0; i < Object.keys(cart).length; i++) {
      // this.productService.getProductById(Object.keys(cart)[i]).subscribe((data) => {
      //   //console.log("data", data['product']);
      //   products_arr.push({
      //     productId: Object.keys(cart)[i],
      //     image: data['product'].image,
      //     title: data['product'].title,
      //     quantity: Object.values(cart)[i]
      //   });  });
      products_arr.push({
        productId: Object.keys(cart)[i],
        quantity: Object.values(cart)[i]
      })
    }

    //console.log("arr", products_arr);
    console.log({
      userId: localStorage.getItem('userId'),
      products: products_arr,
      amount: localStorage.getItem('totalAmount'),
      address: this.addressForm.value,
      status: 'Pending'
    })

    this.orderService.createOrder({
      userId: localStorage.getItem('userId'),
      products: products_arr,
      amount: localStorage.getItem('totalAmount'),
      address: this.addressForm.value,
      status: 'Pending'
    }).subscribe((data) => {
      console.log(data);
    })
  }
}
