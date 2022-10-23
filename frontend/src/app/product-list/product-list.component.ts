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


  public sortByOption: string = 'title|asc';
  public cartflag: boolean = false;
  public sort: string = '';
  //addedProductToCart = false;
  title!: any;



  Product!: any;
  config: { id: string; itemsPerPage: number; currentPage: number; };
  constructor(private productService: ProductService, private cartService: CartService) {
    this.sortByOption = 'title'
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 8,
      currentPage: 1,

    };

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
  pageChanged(event: any) {
    this.config.currentPage = event;
  }


  /*  addProductToCart(id: string) {
     //this.addedProductToCart = true;
     this.ref();
     this.cartService.addToCart(id, 1);
     //window.alert("Product Added to cart");
   } */
  Search() {
    if (this.title == "") {
      this.readProducts();

    } else {
      this.Product.products = this.Product.products.filter((res: { title: string; }) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }




}
