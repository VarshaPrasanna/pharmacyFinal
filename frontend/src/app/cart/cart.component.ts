import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = [];
  sum: number = 0;
  shippingCharges: number = 50;

  constructor(private cartService: CartService,
    private productService: ProductService) {
    this.getCartProducts();
  }

  ngOnInit(): void {
  }

  getCartProducts() {

    let cart = this.cartService.loadCart();
    this.sum = 0;

    for (let i = 0; i < Object.keys(cart).length; i++) {
      this.productService.getProductById(Object.keys(cart)[i]).subscribe((data) => {
        let q = Number(Object.values(cart)[i]);
        this.cartProducts.push({
          productId: Object.keys(cart)[i],
          img: data['product'].image,
          title: data['product'].title,
          price: data['product'].price,
          quantity: q
        })
        this.sum += (data['product'].price * q);
        console.log("sum", this.sum)
      })
    }

    console.log("cartdata", this.cartProducts);
  }

  changeQty(id: any, qty: number) {
    this.cartService.addToCart(id, qty);
    this.cartProducts = [];
    this.getCartProducts();
  }

  deleteCart() {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      this.cartProducts = [];
      this.cartService.emptyCart();
    }
  }

  saveTotalAmount() {
    localStorage.setItem('totalAmount', JSON.stringify(this.sum + this.shippingCharges));
  }
}
