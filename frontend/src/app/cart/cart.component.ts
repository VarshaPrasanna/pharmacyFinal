import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [
    {
        'productId' : 101,
        'productName' : 'Vitamins',
        'productPrice' : 100,
        'productQty' : 5,
    },
    {
        'productId' : 103,
        'productName' : 'Pain Killers',
        'productPrice' : 160,
        'productQty' : 3,
    },
    {
        'productId' : 108,
        'productName' : 'Cough Syrup',
        'productPrice' : 180,
        'productQty' : 2,
    }
];

  constructor() { }

  ngOnInit(): void {
  }

  increaseQty(i: number){
    this.products[i].productQty += 1;
  }

  decreaseQty(i: number){
    this.products[i].productQty -= 1;
  }
}
