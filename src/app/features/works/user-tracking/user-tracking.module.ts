import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTrackingComponent } from './user-tracking.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const PRIMENG_MODULES = [CheckboxModule, InputTextModule, ButtonModule, DynamicDialogModule];

@NgModule({
  declarations: [UserTrackingComponent, UserInfoComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ...PRIMENG_MODULES],
})
export class UserTrackingModule {}
