import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public userForm: FormGroup;

  public ngOnInit(): void {
    this.initUserForm();
  }
  public onSubmit(): void {
    console.log(this.userForm.value);
  }

  public initUserForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      website: new FormControl(null, Validators.required),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        suite: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        zipcode: new FormControl(null, Validators.required),
      }),
      company: new FormGroup({
        name: new FormControl(null, Validators.required),
        catchPhrase: new FormControl(null, Validators.required),
      }),
    });
  }
}
