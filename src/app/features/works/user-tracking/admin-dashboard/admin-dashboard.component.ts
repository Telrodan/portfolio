import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserTrackingActions from '../../../../core/store/user-tracking.actions';
import { LoggedInUser, User } from 'src/app/core/models/user.model';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'portfolio-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  providers: [ConfirmationService],
})
export class AdminDashboardComponent implements OnInit {
  @Input() public loggedInUser: LoggedInUser;
  @Input() public users: User[];
  public userListView = 'grid-list';

  constructor(
    private confirmationService: ConfirmationService,
    private store$: Store<{ userTracking }>,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {}

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
}
