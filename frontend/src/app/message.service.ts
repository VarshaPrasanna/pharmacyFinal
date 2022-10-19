import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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


  messages: Message[] = [];
  currentUserId!: any;
  id!: number;



  constructor(private httpClient: HttpClient, public router: Router, private auth: AuthService) {

  }


  ngOnInit(): void {



    console.log(this.currentUserId);
  }


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




  getAllMessage(): Observable<any> {
    let url = `${this.API_URL}/message`;
    //console.log(localStorage.getItem('token'));
    return this.httpClient.get(url, { headers: this.getAuthHeader() });
  }
}
