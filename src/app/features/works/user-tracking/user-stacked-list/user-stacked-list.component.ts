import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/core/models/user.model';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'portfolio-user-stacked-list',
  templateUrl: './user-stacked-list.component.html',
  styleUrls: ['./user-stacked-list.component.scss'],
})
export class UserStackedListComponent {
  @Input() public users: User[];
  public ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

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
