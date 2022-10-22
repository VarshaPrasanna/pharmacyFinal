import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ProductService } from '../product-list/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //API_URL: string = 'http://localhost:3000/carts';
  cartData: any = {};

  constructor(private productService: ProductService,
    private httpClient: HttpClient,
    private auth: AuthService) {
    this.loadCart();
  }

  loadCart(): any {
    let temp = localStorage.getItem('mycart');
    if (temp === undefined || temp === '' || temp === null) {
      this.cartData = {};
    } else {
      this.cartData = JSON.parse(temp);
    }
    console.log(temp)
    return this.cartData
  }


  addToCart(pid: any, qty: number) {

    if (this.cartData[pid] === undefined) {
      this.cartData[pid] = qty;
    } else {
      this.cartData[pid] += qty;
    }

    if (this.cartData[pid] == 0) {
      delete this.cartData[pid];
    }

    console.log(this.cartData)
    this.storeItems();
  }

  storeItems() {
    localStorage.setItem(
      'mycart', JSON.stringify(this.cartData)
    );
    //this.loadCart();
  }


  emptyCart() {
    this.cartData = {};
    this.storeItems();
    //this.loadCart();
  }

  /* delete(key){
      delete this.cartData[key];
      this.storeItems();
    } */

  /* getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    return headers;
  }

  getCart(): Observable<any>{
    let id = localStorage.getItem('userId');
    return this.httpClient.get(`${this.API_URL}/${id}`, {
      headers: this.getAuthHeader()
    });
  }

  addProductToCart(product: any){
    console.log("add product service");
    let cart: any;

    this.getCart().subscribe((data) =>{
      cart = data['cart'];
    })
    console.log(cart);
    cart.products.push(product);
    //let products = {products: cart}
    

    let id = localStorage.getItem('userId')
    return this.httpClient.put(`${this.API_URL}/${id}`,cart, {
      headers: this.getAuthHeader()
    }); */
}

