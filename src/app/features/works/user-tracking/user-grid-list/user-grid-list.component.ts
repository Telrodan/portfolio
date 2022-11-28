import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/core/models/user.model';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import * as UserTrackingActions from '../../../../core/store/user-tracking.actions';
import * as fromUserTracking from '../../../../core/store/user-tracking.reducer';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'portfolio-user-grid-list',
  templateUrl: './user-grid-list.component.html',
  styleUrls: ['./user-grid-list.component.scss'],
})
export class UserGridListComponent {
  @Input() public users: User[];
  @Input() public isUserDeleteOn = false;
  public ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private store$: Store<fromUserTracking.AppState>,
    private confirmationService: ConfirmationService
  ) {}

  public onUserInfo(user: User): void {
    this.ref = this.dialogService.open(UserInfoComponent, {
      header: 'User Profile',
      width: '90%',
      data: user,
      baseZIndex: 10000,
      maximizable: true,
    });
  }

  public onUserEdit(user: User): void {
    this.store$.dispatch(new UserTrackingActions.StartEdit(user.index));
    this.ref = this.dialogService.open(UserEditComponent, {
      header: 'Edit user',
      styleClass: 'w-full md:w-6',
    });
  }

  public onDeleteUser(user: User): void {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete ${user.name} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User deleted.',
        });
        this.store$.dispatch(new UserTrackingActions.DeleteUser(user));
      },
    });
  }
}
