import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/admin-dashboard/Manage-Products/models/product';
// import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  Product!: any;
  id!: any;

  isLogged!: boolean;
  product: any;



  public sortOption: string = 'title|asc';
  public cartflag: boolean = false;
  public sortBy: string = '';



  constructor(private productService: ProductService, private acRoute: ActivatedRoute, private cartService: CartService,
    private userService: UserService) {
  }



  ngOnInit(): void {
    let id = this.acRoute.snapshot.paramMap.get('id');
    this.Product = new Product();
    // this.getProductById(id);
    this.getProductById(id);
    this.isLogged = this.userService.isLoggedIn();
    this.userService
      .isUserLogged
      .subscribe((data: any) => {
        this.isLogged = data;
      });


  }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((data) => {
      this.Product = data;
      console.log(data);

    });

  }
  addProductToCart(id: string) {
    if (this.isLogged) {
      this.cartService.addToCart(id, 1);
    }
    //window.alert("Product Added to cart");
  }

}
