import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  User!: any;
  id!: any;

  isLoggedSub$!: Subscription;
  isLogged!: boolean;
  isAdmin!: boolean;
  statusChecker!: number;

  constructor(private router: Router,
    private userService: UserService) {

  }

  ngOnInit(): void {
    this.User = new User();
    this.userService.getUser(this.id).subscribe((data) => {
      this.User = data;
      console.log(data);
    })


    this.isLogged = this.userService.isLoggedIn();
    this.isLoggedSub$ = this.userService
      .isUserLogged
      .subscribe((data: any) => {
        this.isLogged = data;
      });

  }

  isUserLogged(): boolean {
    return this.isLogged;
  }
  logout(): void {
    this.userService.clearSession();
    this.userService.isUserLogged.next(false);
  }


  // logout(): void {
  //   this.username = undefined;
  //   this.isAdmin = undefined;
  //   this.cartItems = undefined;
  //   this.helperService.clearSession();
  //   this.helperService.isUserLogged.next(false);
  // }




}

