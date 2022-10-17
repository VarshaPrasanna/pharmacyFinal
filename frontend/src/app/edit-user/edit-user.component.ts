import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    let id = this.actRoute.snapshot.paramMap.get('id');

    this.editForm = this.fb.group({

      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      gender: [''],

    });


  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }





  updateEmployee() {
    this.editForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      gender: [''],
    });
  }

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


