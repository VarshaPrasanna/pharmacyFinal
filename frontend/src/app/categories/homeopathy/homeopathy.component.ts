import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-list/product.service'; 
@Component({
  selector: 'app-homeopathy',
  templateUrl: './homeopathy.component.html',
  styleUrls: ['./homeopathy.component.css']
})
export class HomeopathyComponent implements OnInit {

  public sortByOption: string = 'title|asc';
  public cartflag: boolean = false;
  public sortBy: string = '';
  constructor(private productService: ProductService) { this.readProducts();
    this.sortByOption = 'title' }
  Product!: any;
  product! : any;
  
  ngOnInit(): void {
    
  }
  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.Product = data;
      this.product =  this.Product.products.filter((p: any)=> p.categories === "Homeopathy");
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
