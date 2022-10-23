import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product-list/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cartflag: boolean = false;
  Product!: any;
  products_arr : any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { 
    this.readProducts()
  }

  ngOnInit(): void {
  }
  //Slider settings
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.Product = data;
      this.products_arr = this.Product.products.reverse().slice(0, 8)
      console.log(this.products_arr)
    });
  }

  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 10)
  }

  addProductToCart(id: string){
    //this.addedProductToCart = true;
    this.ref();
    this.cartService.addToCart(id, 1);
    //window.alert("Product Added to cart");
  }
}