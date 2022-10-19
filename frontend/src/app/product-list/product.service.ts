import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Observable, catchError, tap, throwError, map } from "rxjs";
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:3000';



  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) { }
  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    return headers;
  }



  getProduct(id: number) {
    const prodId = localStorage.getItem('prodId')
    return this.httpClient.get(`${this.API_URL}/products/${prodId}`, {
      headers: this.getAuthHeader()

    });
  }
  getProducts() {

    return this.httpClient.get(`${this.API_URL}/products`, {
      headers: this.getAuthHeader()
    })
  }


}