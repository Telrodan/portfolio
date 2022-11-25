import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTrackingComponent } from './user-tracking.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const PRIMENG_MODULES = [CheckboxModule, InputTextModule, ButtonModule];

@NgModule({
  declarations: [UserTrackingComponent],
  imports: [CommonModule, ...PRIMENG_MODULES],
})
export class UserTrackingModule {}
