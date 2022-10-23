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

  canActivate() {
    if (this.authService.isRole()) {
      return true
    }
    alert("You do not have access for this")
    this.router.navigate(['login'])
    return false

  }

}
