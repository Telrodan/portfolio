import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { AddListComponent } from './add-list/add-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';

const PRIMENG_MODULES = [RadioButtonModule, SplitButtonModule];

@NgModule({
  declarations: [
    TodoListComponent,
    AddListComponent,
    AddTaskComponent,
    EditListComponent,
    EditTaskComponent,
  ],
  imports: [CommonModule, FormsModule, ...PRIMENG_MODULES],
})
export class TodoListModule {}
