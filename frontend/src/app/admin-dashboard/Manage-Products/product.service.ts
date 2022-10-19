import { Injectable } from "@angular/core";
import { Observable, throwError} from "rxjs";
import {
  HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from "src/app/auth.service";
//import { ServerResponse } from "./models/ServerResponse";
import { Product } from "./models/product";
import { Router } from "@angular/router";

import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // private products: Product[] = [];
  // private products$ = new Subject<Product[]>();
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) { }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    console.log(headers);
    return headers;
    
    
  }
  // Get all Products

  getProducts() {

    return this.httpClient.get(`${this.API_URL}/products`, {
      headers: this.getAuthHeader()
    })
  }
  getProductById(id: any):Observable<any>{
      return this.httpClient.get(`${this.API_URL}/products/${id}`, {
        headers: this.getAuthHeader()
      }).pipe(catchError(this.errorMgmt));
    }
  updateProduct(id: any, product: Product) :Observable<any>{
  let url = `${this.API_URL}/products/${id}`;
  return this.httpClient.put(url,product, {
    headers: this.getAuthHeader()
  }).pipe(catchError(this.errorMgmt));
}
  deleteProduct(id: any): Observable<any>{
    let url = `${this.API_URL}/products/${id}`;
    return this.httpClient.delete(url, {
      headers: this.getAuthHeader()
    }).pipe(catchError(this.errorMgmt));
  }

    // addProduct(title: string, description: string, image: File, categories: string, price: string): void{
    //  const productData = new FormData();
    //  productData.append("title", title);
    //  productData.append("description", description);
    //  productData.append("image", image, title);
    //  productData.append("categories", categories);
    //  productData.append( "price", price);
    //  this.httpClient.post<{product: Product}>(`${this.API_URL}/products`, productData).subscribe((productData)=>{
    //   const product: Product = {
    //     title : title,
    //     description: description,
    //     img: productData.product.img,
    //     categories: categories,
    //     price : parseInt(price),

    //   };
    //   this.products.push(product);
    //   this.products$.next(this.products);
    //  })
    // }

    addProduct(data: Product): Observable<any> {
    
    return this.httpClient.post(`${this.API_URL}/products`,data).pipe(catchError(this.errorMgmt));
  }

  // baseApiUrl = "https://file.io"

  // upload(file: any) : Observable<any>{
  //   const formData = new FormData();
  //   formData.append("file", file, file.title);
  //   console.log(this.httpClient.post(this.baseApiUrl, formData));
    
  //   return this.httpClient.post(this.baseApiUrl, formData)
  // }
  
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
     
      errorMessage = error.error.message;
    } else {
      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}

