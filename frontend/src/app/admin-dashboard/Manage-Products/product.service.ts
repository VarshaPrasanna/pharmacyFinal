import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from "src/app/auth.service";
//import { ServerResponse } from "./models/ServerResponse";
import { Product } from "./models/product";
import { ActivatedRoute, Router } from "@angular/router";

import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // private products: Product[] = [];
  // private products$ = new Subject<Product[]>();
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, public router: Router, private auth: AuthService) { }

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

  getProductById(id: any): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/products/${id}`).pipe(catchError(this.errorMgmt));
  }

  updateProduct(id: any, product: Product): Observable<any> {
    let url = `${this.API_URL}/products/${id}`;
    return this.httpClient.put(url, product, {
      headers: this.getAuthHeader()
    }).pipe(catchError(this.errorMgmt));
  }
  deleteProduct(id: any): Observable<any> {
    let url = `${this.API_URL}/products/${id}`;
    return this.httpClient.delete(url, {
      headers: this.getAuthHeader()
    }).pipe(catchError(this.errorMgmt));
  }



  addProduct(data: Product): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/products`, data).pipe(catchError(this.errorMgmt));
  }



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

