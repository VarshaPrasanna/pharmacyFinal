import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  API_URL: string = 'http://localhost:3000/orders';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private auth: AuthService, private httpClient: HttpClient) { }

  getAccessToken() {
    return localStorage.getItem('token');
  }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: ''+this.auth.getAccessToken()
      }
    );
    return headers;
  }

  updateOrder(id: any, data: any): Observable<any> {
    let url = `${this.API_URL}/update/${id}`;
    return this.httpClient.put(url, data, { headers: this.getAuthHeader() })
  }

}
