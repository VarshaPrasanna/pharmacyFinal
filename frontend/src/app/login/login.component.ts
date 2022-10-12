import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSubmitted = false;
  loginForm!: FormGroup; //this represents whole form
  userName!: FormControl;
  password!: FormControl;
  constructor() { }

  ngOnInit(): void {

    this.userName = new FormControl('',[Validators.required]);
    this.password = new FormControl('',[Validators.required]);

    this.loginForm = new FormGroup({
      'userName' : this.userName,
      'password' : this.password
    })
  }

}
