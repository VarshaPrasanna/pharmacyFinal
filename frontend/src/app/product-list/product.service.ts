import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Observable, catchError, tap, throwError, map } from "rxjs";
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:3000';



  constructor(private httpClient: HttpClient, private acRoute: ActivatedRoute, public router: Router, private auth: AuthService) { }



  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    console.log(headers);
    return headers;


  }

  getProductById(id: any): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/products/${id}`, {
      headers: this.getAuthHeader()
    }).pipe(catchError(this.errorMgmt));
  }

  getProduct(id: any): Observable<any> {
    //const prodId = localStorage.getItem('prodId')
    console.log("get product");
    return this.httpClient.get(`${this.API_URL}/products/${id}`, {
      headers: this.getAuthHeader()
    });
  }

  getProducts() {

    return this.httpClient.get(`${this.API_URL}/products`, {
      headers: this.getAuthHeader()
    })
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