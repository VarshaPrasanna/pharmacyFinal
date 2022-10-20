import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  public sortOption: string = 'title|asc';
  public cartflag: boolean = false;
  public sortBy: string = '';


  Product!: any;
  constructor(private productService: ProductService, private cartService: CartService) {

    this.readProducts();

  }


  ngOnInit(): void {
  }
  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.Product = data;
      console.log(this.Product)
    });
  }

  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 10)
  }

  addProductToCart(id: string){
    this.cartService.addToCart(id, 1);
    window.alert("Product Added to cart");
  }
}
