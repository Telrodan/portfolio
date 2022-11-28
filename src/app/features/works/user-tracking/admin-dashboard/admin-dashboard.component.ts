import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserTrackingActions from '../../../../core/store/user-tracking.actions';
import { LoggedInUser, User } from 'src/app/core/models/user.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import * as fromUserTracking from '../../../../core/store/user-tracking.reducer';

@Component({
  selector: 'portfolio-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, OnChanges {
  @Input() public loggedInUser: LoggedInUser;
  @Input() public users: User[] = [];
  public isUserDeleteOn = false;
  public userListView = 'grid-list';
  public registeredUsers: number;
  public ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private store$: Store<fromUserTracking.AppState>,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.store$.subscribe((res) => {
      console.log(res);
      this.loggedInUser = res.userTracking.loggedInUser;
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.registeredUsers = this.users.length;
  }

  public onLogout(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Succesfull logout.',
        });
        this.store$.dispatch(new UserTrackingActions.LogoutUser());
      },
    });
  }

  public onAddNewUser(): void {
    this.ref = this.dialogService.open(UserEditComponent, {
      header: 'Add new user',
      styleClass: 'w-full md:w-6',
    });
  }

  public onUserDelete(): void {
    this.isUserDeleteOn = !this.isUserDeleteOn;
  }
}
