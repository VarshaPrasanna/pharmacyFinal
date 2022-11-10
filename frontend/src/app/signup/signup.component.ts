import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  gender!: FormControl;
  username!: FormControl;
  email!: FormControl;
  password!: FormControl;
  isAdmin!: FormControl;
  constructor(public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.gender = new FormControl();
    this.username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]);
    this.password = new FormControl('', [(c: AbstractControl) => Validators.required(c), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{5,}/)]);


    this.signUpForm = new FormGroup({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'gender': this.gender,
      'username': this.username,
      'email': this.email,
      'password': this.password,
      // 'isAdmin': this.isAdmin
    })
  }
  changeGender(e: any) {
    this.gender.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  registerUser() {
    this.authService.register(this.signUpForm.value).subscribe((res) => {
      if (res.result) {
        this.signUpForm.reset()
        this.router.navigate(['/login']);
      }
    })
  }
}






