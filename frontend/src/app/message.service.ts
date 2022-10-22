import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Message } from './models/message';
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
export class MessageService {

  isUserLogged = new Subject<boolean>();
  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  message = Message;
  http: any;

  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) {  }

  ngOnInit(): void {}


  getAccessToken() {
    return localStorage.getItem('token');
  }
  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: '' + this.auth.getAccessToken()
      }
    );
    return headers;
  }

  getAllMessages(): Observable<any> {
    let url = `${this.API_URL}/message`;
    //console.log(localStorage.getItem('token'));
    return this.httpClient.get(url, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
  }

  // Create
  addMessage(message: any): Observable<any> {
    console.log("create msg service", message)
    let url = `${this.API_URL}/message/`;
    return this.httpClient.post(url, message, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
  }

  //Update message
  updateMessage(message: any, id:any): Observable<any>{
    console.log("update msg service", message)
    let url = `${this.API_URL}/message/reply/${id}`;
    return this.httpClient.patch(url, message, { headers: this.getAuthHeader() }).pipe(catchError(this.errorMgmt));
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

  // addMessage(msg: Message) {
  //   return this.httpClient.post<any>(`${this.API_URL}/message`, msg)
  //     .subscribe((res: any) => {
  //       // localStorage.setItem('token', res.accessToken)
  //       localStorage.setItem('messageId', res._id)

  //       // console.log(res.message)


  //       return res.message;
  //     })
  // }

}
