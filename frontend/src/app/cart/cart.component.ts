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
  totalAmount: number = 0;

  constructor(private cartService: CartService, 
    private productService: ProductService) { 
   /*  this.getCart();
    this.getSum();
    this.getTotalAmount(); */
    this.getCartProducts();
  }

  ngOnInit(): void {
  }

  getCartProducts(){
    let cart = this.cartService.loadCart();
    console.log(cart);
    console.log(Object.keys(cart).length)
    for(let i=0;i<Object.keys(cart).length; i++){
      ;
      this.productService.getProduct(Object.keys(cart)[i]).subscribe((data) => {
        this.cartProducts.push({
          productId: Object.keys(cart)[i],
          img: data['product'].img,
          title: data['product'].title,
          price: data['product'].price,
          quantity: Object.values(cart)[i]
        })
      })

    }
    console.log("cartdata",this.cartProducts);
  }

  changeQty(id: any, qty:number){
    this.cartService.addToCart(id,qty);
    this.cartProducts = [];
    this.getCartProducts();
  }

  deleteCart(){
    if(window.confirm("Are you sure you want to clear the cart?")){
      this.cartProducts = [];
      this.cartService.emptyCart();
    }
  }
}
