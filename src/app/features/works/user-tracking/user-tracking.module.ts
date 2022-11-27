import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTrackingComponent } from './user-tracking.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { StyleClassModule } from 'primeng/styleclass';
import { UserGridListComponent } from './user-grid-list/user-grid-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UserStackedListComponent } from './user-stacked-list/user-stacked-list.component';

const PRIMENG_MODULES = [
  CheckboxModule,
  InputTextModule,
  ButtonModule,
  DynamicDialogModule,
  StyleClassModule,
  RadioButtonModule,
  ConfirmDialogModule,
];

@NgModule({
  declarations: [
    UserTrackingComponent,
    UserInfoComponent,
    UserGridListComponent,
    AdminDashboardComponent,
    UserStackedListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule, ...PRIMENG_MODULES],
})
export class UserTrackingModule {}
