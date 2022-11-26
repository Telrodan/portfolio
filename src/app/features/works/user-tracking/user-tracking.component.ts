import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LoggedInUser, User } from 'src/app/core/models/user.model';
import { UserTrackingService } from 'src/app/core/services/user-tracking.service';
import * as UserTrackingActions from '../../../core/store/user-tracking.actions';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-user-tracking',
  templateUrl: './user-tracking.component.html',
  styleUrls: ['./user-tracking.component.scss'],
  providers: [DialogService],
})
export class UserTrackingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public user: User;
  public users: User[];
  public isLoggedIn = false;
  public loginForm: FormGroup;
  public ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private userTrackingService: UserTrackingService,
    private store$: Store<{ userTracking }>
  ) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(true),
    });

    this.userTrackingService
      .getUsers$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((usersDTO) => {
        this.store$.dispatch(new UserTrackingActions.AddUsers(usersDTO));
      });

    this.store$
      .select('userTracking')
      .pipe(takeUntil(this.destroy$))
      .subscribe((store) => {
        this.user = store.loggedInUser;
        this.users = store.users[0];
      });
  }
  public ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const user: LoggedInUser = {
        username: this.loginForm.controls['username'].value.trim(),
        password: this.loginForm.controls['password'].value.trim(),
        rememberMe: this.loginForm.controls['rememberMe'].value,
      };
      this.isLoggedIn = true;
      this.store$.dispatch(new UserTrackingActions.LoginUser(user));
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Succesfull login.',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Please fill the required fields.',
      });
    }
  }

  public onUserInfo(user: User): void {
    this.ref = this.dialogService.open(UserInfoComponent, {
      header: 'User Profile',
      width: '90%',
      data: user,
      baseZIndex: 10000,
      maximizable: true,
    });
  }
}
