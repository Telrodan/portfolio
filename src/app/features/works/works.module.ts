import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorksComponent } from './works.component';
import { WorksRoutingModule } from './works-routing.module';
import { WorksMenuComponent } from './works-menu/works-menu.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { UserTrackingModule } from './user-tracking/user-tracking.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PRIMENG_MODULES = [ChipModule, ButtonModule, CardModule, ConfirmDialogModule, DividerModule];

@NgModule({
  declarations: [WorksMenuComponent, WorksComponent],
  imports: [
    RouterModule,
    CommonModule,
    WorksRoutingModule,
    TodoListModule,
    UserTrackingModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIMENG_MODULES,
  ],
})
export class WorksModule {}
