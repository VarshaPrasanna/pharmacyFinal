import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
//import { ProductMockData } from 'src/app/mock-data/products-mock-data';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

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

  // below code for backend

  // products: any=[];
  //constructor( private productService : ProductService) {this.getAllProducts}
  //   getAllProducts(){
  //   this.productService.getProducts().subscribe((productdata)=>{
  //     this.products =productdata;
  //   })
  // } 
}