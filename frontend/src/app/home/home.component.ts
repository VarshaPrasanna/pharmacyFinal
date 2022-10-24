import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../order.service';
import { ProductService } from '../product-list/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cartflag: boolean = false;
  Product!: any;
  newProducts: any[] = [];
  popularProducts: any[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private orderService: OrderService) {
    this.readProducts()
  }

  ngOnInit(): void {
  }
  //Slider settings
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.Product = data;
      this.newProducts = this.Product.products.reverse().slice(0, 8)

    });

    var popProductIds: any[] = [];
    this.orderService.getOrderPopular().subscribe((data) => {
      console.log("pop orders", data);
      popProductIds = data['data'];
    }, (err) => {
      console.log(err);
    }, () => {
      this.getPopularProducts(popProductIds);
    })


  }

  async getPopularProducts(popProductIds: any[]) {
    for await (let id of popProductIds) {
      this.productService.getProductById(id._id).subscribe((data) => {
        this.popularProducts.push(data['product']);
      })
    }
    console.log("popProducts", this.popularProducts)
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
}