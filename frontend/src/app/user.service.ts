import { Injectable } from '@angular/core';
//import { UserMockData } from './mock-data/users-mock-data';
import { User } from './models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentUser = {};
  users: User[] = [];


  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) {

  }


  getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    return headers;
  }


  getUser(id: number) {
    return this.httpClient.get(`${this.API_URL}/users/myinfo/634ab165694d97064f69f010`, {
      headers: this.getAuthHeader()
    });
  }

}
