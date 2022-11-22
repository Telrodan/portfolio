import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoListActions from '../../../../core/store/todo-list.actions';

import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TodoList } from 'src/app/core/models/todo-list.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {
  public todoList: TodoList;
  public listName: string;
  public priorities = [
    { priority: 'Low', key: 'L' },
    { priority: 'Medium', key: 'M' },
    { priority: 'High', key: 'H' },
  ];
  public selectedPriority = {};

  constructor(
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
    private messageService: MessageService,
    private store: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {
    this.todoList = this.dialogConfig.data;
    this.listName = this.todoList.name;
  }

  ngOnInit(): void {
    this.selectedPriority = this.todoList.priority;
    this.selectedPriority =
      this.priorities[
        this.priorities.findIndex((priority) => priority.priority === this.todoList.priority)
      ];
  }

  public onSubmit() {
    if (this.listName.trim()) {
      const updatedList: TodoList = {
        ...this.todoList,
        name: this.listName.charAt(0).toUpperCase() + this.listName.slice(1),
        // priority: this.selectedPriority.priority,
      };
      this.store.dispatch(
        new TodoListActions.UpdateList({
          id: updatedList.id,
          todoList: updatedList,
        })
      );
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'To-do list updated.',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a list name.',
      });
    }
  }

  public onDelete() {
    console.log('hello');
  }
}
