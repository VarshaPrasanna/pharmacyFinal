import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product-list/product.service'; 
@Component({
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrls: ['./ayurveda.component.css']
})
export class AyurvedaComponent implements OnInit {
  public sortOption: string = 'title|asc';
  public cartflag: boolean = false;
  public sortBy: string = '';
  constructor(private productService: ProductService) { this.readProducts() }
  Product!: any;
  product! : any;
  
  ngOnInit(): void {
    
  }
  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.Product = data;
      this.product =  this.Product.products.filter((p: any)=> p.categories === "Ayurveda");
    // console.log(this.Product);
    //   console.log(this.product.products)
    });
  }
  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 10)
  }


}
