import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
//import { ProductMockData } from 'src/app/mock-data/products-mock-data';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  product!: any ;
  
  constructor(
    private router: Router,
    private productService: ProductService) {

    this.readProducts();

  }


  ngOnInit(): void {
  }
  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
      console.log(this.product)
    });
  }
  deleteProduct(product: any, index: any){
   if(window.confirm('Are you sure')){
    this.productService.deleteProduct(product._id).subscribe(
      (data)=>{
      this.product.products.splice(index,1);
      // this.product = data;
   })
   }
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