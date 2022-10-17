import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { Subscribable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public title = 'User Detail';
  User!: any;
  id!: any;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.User = new User();
    this.userService.getUser(this.id).subscribe((data) => {
      this.User = data;
      console.log(data);
    })
  }
}



