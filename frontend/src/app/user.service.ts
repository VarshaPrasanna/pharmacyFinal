import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [
    {
      name: 'Ram G',
      username: 'ram',
      userEmail: 'ram@gmail.com',
      password: 'sjjkdj'
    },
    {
      name: 'Rahma k',
      username: 'rahma',
      userEmail: 'rahma@gmail.com',
      password: 'sjjkdj'
    },
    {
      name: 'Krish P',
      username: 'krish',
      userEmail: 'krish@gmail.com',
      password: 'sjjkdj'
    },
  ]

  constructor() { }

  getAllUsers(){
    return this.users;
  }

  addUser(user: any){
    this.users.push(user);
  }

  deleteUser(i: any){
    this.users.splice(i, 1);
  }
}
