import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
    //this.users = userService.getAllUsers();
  }

  ngOnInit(): void {
  }

  deleteUser(i: any) {
    //this.userService.deleteUser(i);
  }
}
