import { Injectable } from '@angular/core';
//import { UserMockData } from './mock-data/users-mock-data';
import { User } from './models/user';
import { Observable, Subject, throwError } from 'rxjs';
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
  isUserLogged = new Subject<boolean>();
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  users: User[] = [];
  currentUserId!: any;
  id!: number;



  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) {

  }


  ngOnInit(): void {


    this.currentUserId = this.getUser(this.id);
    console.log(this.currentUserId);
  }

  clearSession(): void {
    localStorage.clear();
  }
  getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: ''+this.auth.getAccessToken()
      }
    );
    return headers;
  }
  isLoggedIn(): boolean {
    try {
      if (localStorage.getItem('userId')) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  getUser(id: number) {
    const userId = localStorage.getItem('userId')
    return this.httpClient.get(`${this.API_URL}/users/myinfo/${userId}`, {
      headers: this.getAuthHeader()

    });
  }
  // Update user
  updateUser(id: any, data: any): Observable<any> {
    const userId = localStorage.getItem('userId')
    let url = `${this.API_URL}/users/update/${userId}`;
    return this.httpClient.put(url, data, { headers: this.getAuthHeader() })

  }

  getAllUsers(): Observable<any> {
    let url = `${this.API_URL}/users`;
    return this.httpClient.get(url) //, { headers: this.getAuthHeader() });
  }

  deleteUser(id: string){
    return this.httpClient.delete(`${this.API_URL}/users/${id}`, {
      headers: this.getAuthHeader()
    });
  }
}
