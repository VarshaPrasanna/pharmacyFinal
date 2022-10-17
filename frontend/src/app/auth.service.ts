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
        localStorage.setItem('token', res.accessToken)
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
      })
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('accessToken') == null) {
      this.router.navigate(['auth/login']);
    }
  }

  // getUserProfile(id: any): Observable<any> {



  //   return this.httpClient.get(`${this.API_URL}/users/`, { headers: this.headers }).pipe(catchError(this.errorMgmt));

  // }
  // // getmyinfo(id: any): Observable<any> {
  // //   console.log(User)
  // //   return this.httpClient.get(`${this.API_URL}/users/myinfo/634ab165694d97064f69f010`, { headers: this.headers }).pipe(catchError(this.errorMgmt));

  // // }
  // // Get employee
  // getmyinfo(id: any): Observable<any> {
  //   let url = `${this.API_URL}/users/myinfo/${id}`;
  //   return this.http.get(url, { headers: this.headers }).pipe(
  //     map((res: Response) => {
  //       return res || {};
  //     }),
  //     catchError(this.errorMgmt)
  //   );
  // }


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