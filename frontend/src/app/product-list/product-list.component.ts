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
  //addedProductToCart = false;
  title!: any;


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

  addProductToCart(id: string) {
    //this.addedProductToCart = true;
    this.ref();
    this.cartService.addToCart(id, 1);
    //window.alert("Product Added to cart");
  }
  Search() {
    if (this.title == "") {
      this.readProducts();

    } else {
      this.Product.products = this.Product.products.filter((res: { title: string; }) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }


  /* product: any
  sortPricel2h(){
     if (this.product){
       let newarr = this.Product.sort((a:{price:number;},b:{price:number})=> a.price-b.price)
       this.Productdata=newarr;
     }
     else{
       let newarr = this.Product.products.sort((b:any,a:any)=> a.price-b.price)
       this.Productdata=newarr;
     }
     this.product=!this.product 
   }

   sortProductName(property: string | number){

    this['isDesc'] =!this['isDesc'];

    let direction =this['isDesc'] ?1:-1;
    this['showData'].sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if (a[property]<b[property]){
       return -1*direction;
      }
      else if(a[property]>b[property]){
        return 1*direction;
      }
      else {
        return 0;
      }
    });
    
  }
 
*/

}
