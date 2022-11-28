import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MenuItem, MessageService } from 'primeng/api';
import { v4 as uuidv4 } from 'uuid';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/core/models/user.model';
import * as UserTrackingActions from '../../../../core/store/user-tracking.actions';

@Component({
  selector: 'portfolio-edit-user',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  public user: User;
  public userForm: FormGroup;
  public isEditMode = false;
  public steps: MenuItem[];
  public activeIndex = 0;

  constructor(
    private messageService: MessageService,
    private store$: Store<{ userTracking }>,
    public dialogConfig: DynamicDialogConfig,
    public dialogRef: DynamicDialogRef
  ) {
    this.user = this.dialogConfig.data;
    this.isEditMode = this.user ? true : false;
  }

  public ngOnInit(): void {
    this.steps = [{ label: 'Personal' }, { label: 'Adress' }, { label: 'Company' }];
    this.initUserForm();
  }

  public onNext(): void {
    this.activeIndex++;
  }

  public onBack(): void {
    this.activeIndex--;
  }

  public onSubmit(): void {
    if (this.isEditMode) {
      const user: User = {
        ...this.user,
        ...this.userForm.value,
      };
      this.store$.dispatch(new UserTrackingActions.UpdateUser(user));
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User updated.',
      });
    } else {
      const user: User = {
        id: uuidv4(),
        ...this.userForm.value,
      };
      this.store$.dispatch(new UserTrackingActions.AddUser(user));
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User added.',
      });
    }
  }

  public initUserForm(): void {
    if (this.isEditMode) {
      this.userForm = new FormGroup({
        name: new FormControl(this.user.name, Validators.required),
        username: new FormControl(this.user.username, Validators.required),
        email: new FormControl(this.user.email, Validators.required),
        phone: new FormControl(this.user.phone, Validators.required),
        website: new FormControl(this.user.website, Validators.required),
        address: new FormGroup({
          street: new FormControl(this.user.address.street, Validators.required),
          suite: new FormControl(this.user.address.suite, Validators.required),
          city: new FormControl(this.user.address.city, Validators.required),
          zipcode: new FormControl(this.user.address.zipcode, Validators.required),
        }),
        company: new FormGroup({
          name: new FormControl(this.user.company.name, Validators.required),
          catchPhrase: new FormControl(this.user.company.catchPhrase, Validators.required),
          bs: new FormControl(this.user.company.bs, Validators.required),
        }),
      });
    } else {
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
          bs: new FormControl(null, Validators.required),
        }),
      });
    }
  }
}
