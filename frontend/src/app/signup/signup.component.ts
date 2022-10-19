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
    public router: Router){}

ngOnInit(): void {
    this.firstName = new FormControl('',[Validators.required]);
  this.lastName = new FormControl('',[Validators.required]);
  this.gender =  new FormControl();
  this.username = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
  this.email = new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]);
  this.password = new FormControl('',[(c: AbstractControl) =>Validators.required(c),Validators.minLength(5),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]);
  // 'confirmPassword' : new FormControl(''),
  this.isAdmin = new FormControl('');

  this.signUpForm = new FormGroup({
    'firstName' : this.firstName,
    'lastName' : this.lastName,
    'gender': this.gender,
    'username': this.username,
    'email': this.email,
    'password': this.password,
    'isAdmin': this.isAdmin
  })
}
  changeGender(e:any){
    this.gender.setValue(e.target.value,{
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

  // signUpForm!: FormGroup;

  // constructor(public formBuilder: FormBuilder,
  //   public authService: AuthService,
  //   public router: Router) {
  //   this.signUpForm = this.formBuilder.group({
  //     firstName: ['', [Validators.required]],
  //     lastName: ['', [Validators.required]],
  //     gender: ['', [Validators.required]],
  //     username: ['', [Validators.required, Validators.minLength(4)]],
  //     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
  //     password: ['', [
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.maxLength(16)
  //     ]],
  //     isAdmin: [''],
  //   })
  // }


  // ngOnInit(): void {
    // this.name = new FormControl('', [Validators.required]);
    // this.email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]);
    // //this.username = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
    // this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
    // this.password = new FormControl('', [(c: AbstractControl) => Validators.required(c), Validators.minLength(3)]);
    // this.confirmPassword = new FormControl('', [(c: AbstractControl) => Validators.required(c), Validators.minLength(3)]);




  // }
  // Getter to access form control
  // get myForm() {
  //   return this.signUpForm.controls;
  // }
  // passwordMatch(password: string, confirmPassword: string): ValidatorFn {
  //   return (formGroup: AbstractControl): { [key: string]: any } | null => {
  //     const passwordControl = formGroup.get(password);
  //     const confirmPasswordControl = formGroup.get(confirmPassword);

  //     if (!passwordControl || !confirmPasswordControl) {

  //       return null;

  //     }

  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: true });
  //       return { passwordMismatch: true }
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //       return null;
  //     }
  //   };
  // }





