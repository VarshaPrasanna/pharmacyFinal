import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { isDate } from 'moment';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceGuard implements CanActivate {
  roleAs: any;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const expectedRole = localStorage.getItem('isAdmin');
    const token = localStorage.getItem('accessToken');
    if (!expectedRole) {
      return false;
    }
    return true;
  }

}
