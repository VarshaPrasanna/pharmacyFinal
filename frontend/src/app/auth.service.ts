import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './models/user'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentUser = {};
  user = User;
  http: any;


  constructor(private httpClient: HttpClient, public router: Router) {


  }

  register(user: User): Observable<any> {
    this.router.navigateByUrl('/login');
    return this.httpClient.post(`${this.API_URL}/auth/register/`, user).pipe(
      catchError(this.errorMgmt)
    )
  }


  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/auth/login/`, user)
      .subscribe((res: any) => {
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('userId', res._id)
        localStorage.setItem('userName', res.firstName + '  ' + res.lastName)

        //localStorage.setItem('isAdmin', res.isAdmin)
        //this.currentUserSubject.next(res.user); // <-- pump the value in here
        console.log(res.isAdmin)
        if (res.isAdmin) {
          this.router.navigateByUrl('/admin');
        }
        else {
          this.router.navigateByUrl('/');
        }
        console.log("login working")
        return res.user;
      },
      error => {
        window.alert("invalid credentials");
      })
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  getUserId() {
    return localStorage.getItem('userId');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return (authToken !== null) ? true : false;
  }
  clearSession(): void {
    localStorage.clear();
  }


  logout() {
    if (localStorage.removeItem('accessToken') == null) {
      this.router.navigate(['auth/login']);
    }
  }




  //error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get client side error
      errorMessage = error.error.message;
    } else {
      //Get server side error
      errorMessage = `Error Code : ${error.status}\n Message:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    })
  }
}