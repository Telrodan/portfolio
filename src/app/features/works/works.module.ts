import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works-routing.module';
import { UserTrackingComponent } from './user-tracking/user-tracking.component';
import { WorksMenuComponent } from './works-menu/works-menu.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddListComponent } from './todo-list/add-list/add-list.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    UserTrackingComponent,
    WorksMenuComponent,
    TodoListComponent,
    AddListComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    CardModule,
    ButtonModule,
    ChipModule,
    DynamicDialogModule,
    SplitButtonModule,
    FormsModule,
    RadioButtonModule
  ]
})
export class WorksModule {}
