import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  isLogged!: boolean;

  constructor(private cartService: CartService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.isLogged = this.userService.isLoggedIn();
    this.userService
      .isUserLogged
      .subscribe((data: any) => {
        this.isLogged = data;
      });
  }

  addProductToCart(id: string) {
    if (this.isLogged) {
      this.cartService.addToCart(id, 1);
    }
    //window.alert("Product Added to cart");
  }
}
