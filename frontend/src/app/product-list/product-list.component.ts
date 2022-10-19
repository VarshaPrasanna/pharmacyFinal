import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  constructor(private productService: ProductService) {

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





}
