import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';

import * as TodoListActions from '../../../../core/store/todo-list.actions';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  public list: TodoList;
  public newListName: string;
  public priority;
  public priorities = [
    { priority: 'Low' },
    { priority: 'Medium' },
    { priority: 'High' }
  ];

  constructor(
    private todoListService: TodoListService,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<EditListComponent>,
    private store: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {}

  ngOnInit(): void {
    this.list = this.todoListService.getList();
    this.newListName = this.list.name;
  }

  public onSubmitChanges() {
    console.log(
      this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1)
    );
    if (this.newListName.trim()) {
      console.log('asdasd');
      const updatedList: TodoList = {
        ...this.list,
        name:
          this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1),
        priority: this.priority.priority
      };
      console.log(updatedList);
      this.store.dispatch(
        new TodoListActions.UpdateList({
          id: updatedList.id,
          todoList: updatedList
        })
      );
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'To-do list added.'
      });
      this.dialogRef.close();
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a list name.'
      });
    }
  }

  public onDelete() {
    console.log('hello');
  }
}
