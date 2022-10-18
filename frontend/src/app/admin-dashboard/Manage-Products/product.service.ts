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




@Injectable({
  providedIn: 'root'
})

export class ProductService {
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) { }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    return headers;
  }
  // Get all Products

  getProducts() {

    return this.httpClient.get(`${this.API_URL}/products`, {
      headers: this.getAuthHeader()
    })
  }
  getProductById(id: any):Observable<any>{
      return this.httpClient.get(`${this.API_URL}/products/${id}`).pipe(catchError(this.errorMgmt));
    }
  updateProduct(id: any, product: Product) :Observable<any>{
  let url = `${this.API_URL}/products/${id}`;
  return this.httpClient.put(url,product).pipe(catchError(this.errorMgmt));
}

    addProduct(data: Product): Observable<any> {
    
    return this.httpClient.post(`${this.API_URL}/products`,data).pipe(catchError(this.errorMgmt));
  }

  baseApiUrl = "https://file.io"

  upload(file: any) : Observable<any>{
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.httpClient.post(this.baseApiUrl, formData)
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

