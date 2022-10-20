
import { Injectable } from '@angular/core';
import { Observable, throwError} from "rxjs";
import {
  HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from "src/app/auth.service";
//import { ServerResponse } from "./models/ServerResponse";
import { Order } from './models/order';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  API_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) { }

  getOrders() {
    return this.httpClient.get(`${this.API_URL}/orders`)
  }
  getOrderById(id: any):Observable<any>{
    return this.httpClient.get(`${this.API_URL}/orders/${id}`).pipe(catchError(this.errorMgmt));
  }
updateOrderStatus(id: any, product: any) :Observable<any>{
let url = `${this.API_URL}/orders/${id}`;
return this.httpClient.put(url,product).pipe(catchError(this.errorMgmt));
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
