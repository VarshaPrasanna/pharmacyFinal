import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot,
  UrlTree, CanActivate, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true
    }
    alert("You have to login in to access this")
    this.router.navigate(['login'])
    return false

  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if (this.authService.isLoggedIn !== true) {
  //     window.alert("Access not allowed!");
  //     this.router.navigate(['auth/login'])
  //   }
  //   return true;
  // }


  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     const userRole = this.authService.getRole();
  //     if (route.data['roleAs'] && route.data['roleAs'].indexOf(userRole) === -1) {
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //     return true;
  //   }

  //   this.router.navigate(['/']);
  //   return false;
  // }

  // hasPermission(component): Observable<boolean> {
  //   return this.authService.isLoggedIn().map(res => {

  //     this.permissions = this.getPermissions();
  //     // Check if user object has permissions to access the current component.
  //     return this.checkPermission(component.data.permission);
  //   });
  // }
}