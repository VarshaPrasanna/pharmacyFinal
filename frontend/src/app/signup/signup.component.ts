import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup ,FormBuilder, FormControl, Validators , ValidatorFn} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  formSubmitted = false;
  signUpForm!: FormGroup; //this represents whole form
  name!: FormControl;
  email! : FormControl;
  userName!: FormControl;
  password!: FormControl;
  confirmPassword!: FormControl;
  

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.name = new FormControl('',[Validators.required]);
    this.email = new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]);
    this.userName = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
    this.password = new FormControl('',[(c: AbstractControl) =>Validators.required(c),Validators.minLength(5),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]);
    this.confirmPassword = new FormControl('',[(c: AbstractControl) =>Validators.required(c),Validators.minLength(5)]);
   
    
    this.signUpForm = new FormGroup({
      'name' : this.name,
      'email' : this.email,
      'userName' : this.userName,
      'password' : this.password,
      'confirmPassword' : this.confirmPassword
      },
      [this.passwordMatch('password', 'confirmPassword')]
    );
    
  }
    passwordMatch(password: string, confirmPassword: string):ValidatorFn {
      return (formGroup: AbstractControl):{ [key: string]: any } | null => {
        const passwordControl = formGroup.get(password);
        const confirmPasswordControl = formGroup.get(confirmPassword);
        
        if (!passwordControl || !confirmPasswordControl) {
          
          return null;
          
        }
  
        if (passwordControl.value !== confirmPasswordControl.value) {
          confirmPasswordControl.setErrors({ passwordMismatch: true });
          return { passwordMismatch: true }
        } else {
          confirmPasswordControl.setErrors(null);
          return null;
        }
      };
    }
  }
  
  //   class PasswordValidator {
  //     static areEqual(formGroup: FormGroup) {
  //       let value;
  //       let valid = true;
  //       for (let key in formGroup.controls) {
  //         if (formGroup.controls.hasOwnProperty(key)) {
  //           let control: FormControl = <FormControl>formGroup.controls[key];
    
  //           if (value === undefined) {
  //             value = control.value
  //           } else {
  //             if (value !== control.value) {
  //               valid = false;
  //               break;
  //             }
  //           }
  //         }
  //       }
    
  //       if (valid) {
  //         return null;
  //       }
    
  //       return {
  //         areEqual: true
  //       };
  //     }
  //   }
  // }

  // ConfirmedValidator(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
  //       return;
  //     }
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ confirmedValidator: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }


