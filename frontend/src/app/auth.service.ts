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
  roleAs!: any;


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
        localStorage.setItem('isAdmin', res.isAdmin)

        console.log(res.isAdmin)
        if (res.isAdmin) {
          this.router.navigateByUrl('/admin');
          localStorage.setItem('role', 'admin')

        }
        else {
          this.router.navigateByUrl('/');
          localStorage.setItem('role', 'user')
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

  isLoggedIn() {
    let authToken = localStorage.getItem('accessToken');
    return (authToken !== null) ? true : false;
  }
  isRole() {
    let role = localStorage.getItem('role');
    if (role === 'admin') {
      return true;
    }
    else {

      this.router.navigateByUrl('/');
      return false;
    }
  }
  clearSession(): void {
    localStorage.clear();
  }


  logout() {
    if (localStorage.removeItem('accessToken') == null) {
      this.router.navigate(['auth/login']);
    }
  }



  getRole() {
    this.roleAs = localStorage.getItem('isAdmin');
    return this.roleAs;
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