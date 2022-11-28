import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoggedInUser, User } from 'src/app/core/models/user.model';
import { UserTrackingService } from 'src/app/core/services/user-tracking.service';
import * as UserTrackingActions from '../../../core/store/user-tracking.actions';
import * as fromUserTracking from '../../../core/store/user-tracking.reducer';

@Component({
  selector: 'app-user-tracking',
  templateUrl: './user-tracking.component.html',
  styleUrls: ['./user-tracking.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class UserTrackingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public users: User[];
  public isLoggedIn = false;
  public loginForm: FormGroup;
  public loggedInUser: LoggedInUser;
  public ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private userTrackingService: UserTrackingService,
    private store$: Store<fromUserTracking.AppState>
  ) {}

  public ngOnInit(): void {
    this.userTrackingService
      .getUsers$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((usersDTO) => {
        usersDTO.filter((user, userIndex) => {
          user.index = userIndex;
          console.log(user);
        });

        this.store$.dispatch(new UserTrackingActions.AddUsers(usersDTO));
      });

    this.store$
      .select('userTracking')
      .pipe(takeUntil(this.destroy$))
      .subscribe((store) => {
        this.loggedInUser = store.loggedInUser;
        this.users = store.users;
        this.isLoggedIn = this.loggedInUser ? true : false;
      });
    this.initLoginForm();
  }

  public initLoginForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(null),
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const user: LoggedInUser = {
        ...this.loginForm.value,
      };
      this.store$.dispatch(new UserTrackingActions.LoginUser(user));
      this.loginForm.reset();
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
}
