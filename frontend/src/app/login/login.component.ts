import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm!: FormGroup; //this represents whole form
  username!: FormControl;
  password!: FormControl;
  constructor(
    public authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {


    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      'username': this.username,
      'password': this.password
    },
    {updateOn : 'blur'})
  }

  loginUser() {
    this.authService.login(this.loginForm.value)
  }
}

