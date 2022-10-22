import { ThisReceiver } from '@angular/compiler';
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

  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUserById(id);

    this.editForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{5,}/)]],

    },
    )
  }
  get myForm() {
    return this.editForm.controls;
  }
  Password = false;
  changePassword() {
    this.Password = true;
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((data) => {
      this.editForm.setValue({
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        username: data.data.username,
        email: data.data.email,
        password: "",
      })
      console.log(data);
    });
  }

  getUserById(id: any) {
    this.userService.getUser(id).subscribe((data) => {
      this.editForm.setValue({
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        username: data.data.username,
        email: data.data.email,
        // gender : data.data.gender,
        password: data.data.password
        // password : "",

      })
      console.log(data);
    });
  }

  updateUser() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lasttName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      // gender : [''],
      password: ['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{5,}/)]],
    })
  }





















  // submitted = false;
  // editForm!: FormGroup;
  // userData!: User[];
  // firstName!: FormControl;
  // lastName!: FormControl;
  // username!: FormControl;
  // email!: FormControl;
  // password!: FormControl;
  // user! : any;

  // constructor(public fb: FormBuilder,
  //   private actRoute: ActivatedRoute,
  //   private userService: UserService,
  //   private router: Router) { }

  // ngOnInit(): void {
  //   this.firstName = new FormControl('',[Validators.required]);
  // this.lastName = new FormControl('',[Validators.required]);
  // this.username = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
  // this.email = new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]);
  //this.password = new FormControl('',[(c: AbstractControl) =>Validators.required(c),Validators.minLength(5),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]);

  //   let id = this.actRoute.snapshot.paramMap.get('id');

  //   this.editForm = new FormGroup({

  //     'firstName' : this.firstName,
  //   'lastName' : this.lastName,
  //   // 'gender': this.gender,
  //   'username': this.username,
  //   'email': this.email,
  //   // 'password': this.password,

  //   });
  //   this.getUserById();
  // }
  // changeGender(e:any){
  //   this.gender.setValue(e.target.value,{
  //     onlySelf: true,
  //   });
  // }

  // Getter to access form control
  // get myForm() {
  //   return this.editForm.controls;
  // }
  // getUserById(){
  //   let proid = this.actRoute.snapshot.paramMap.get('id');
  //   this.userService.getUser(proid).subscribe((data) => {
  //     this.user = data;
  //     console.log(this.user);

  //   })
  // }






  onSubmit() {
    this.submitted = true;
    // if(!this.editForm.valid){
    //   return false;
    // }else{
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


