import { Injectable } from '@angular/core';
import { UserMockData } from './mock-data/users-mock-data';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() {
    this.users = UserMockData.Users;
   }

  getAllUsers(){
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }

  deleteUser(i: any){
    this.users.splice(i, 1);
  }
}
