import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    if (accessToken) {
      const cloned = req.clone({
        headers: req.headers.set("token", accessToken)
      });
      console.log(accessToken)
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
    // req = req.clone({
    //   headers: req.headers.set('Content-Type', 'application/json', 'token', 'accessToken')
    //   // setHeaders: {
    //   //   token: 'accessToken'
    //   // }
    // });

  }
}