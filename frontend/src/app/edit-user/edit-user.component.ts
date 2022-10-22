import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  submitted = false;
  editForm!: FormGroup;
  userData!: User[];
  firstName!: FormControl;
  lastName!: FormControl;
  // gender!: FormControl;
  username!: FormControl;
  email!: FormControl;
  // password!: FormControl;

  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    // this.gender =  new FormControl();
    this.username = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]);
    //this.password = new FormControl('',[(c: AbstractControl) =>Validators.required(c),Validators.minLength(5),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]);

    let id = this.actRoute.snapshot.paramMap.get('id');

    this.editForm = new FormGroup({

      'firstName': this.firstName,
      'lastName': this.lastName,
      // 'gender': this.gender,
      'username': this.username,
      'email': this.email,
      // 'password': this.password,

    });
  }
  // changeGender(e:any){
  //   this.gender.setValue(e.target.value,{
  //     onlySelf: true,
  //   });
  // }

  // Getter to access form control
  // get myForm() {
  //   return this.editForm.controls;
  // }







  onSubmit() {
    this.submitted = true;

    if (window.confirm('Are you sure?')) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.userService.updateUser(id, this.editForm.value).subscribe({
        complete: () => {
          this.router.navigateByUrl('/profile');
          console.log('Content updated successfully!');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }

  }
}


