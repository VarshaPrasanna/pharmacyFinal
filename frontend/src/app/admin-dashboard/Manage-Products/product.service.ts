import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

import { AuthService } from "src/app/auth.service";
//import { ServerResponse } from "./models/ServerResponse";
import { Product } from "./models/product";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';



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


}

