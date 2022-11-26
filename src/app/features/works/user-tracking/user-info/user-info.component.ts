import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  public user: User;

  constructor(public dialogConfig: DynamicDialogConfig) {
    this.user = this.dialogConfig.data;
  }
}
