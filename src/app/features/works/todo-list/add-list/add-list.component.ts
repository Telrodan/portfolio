import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from 'primeng/api';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as TodoListActions from '../../../../core/store/todo-list.actions';

export interface ListPriority {
  priority: string;
}

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  public newListName: string;
  public priorities: ListPriority[];
  public selectedPriority: ListPriority;

  constructor(
    private messageService: MessageService,
    public dialogRef: MatDialogRef<AddListComponent>,
    private store: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {
    this.priorities = [
      { priority: 'Low' },
      { priority: 'Medium' },
      { priority: 'High' }
    ];
  }

  public ngOnInit(): void {}

  public onSubmit(): void {}

  public onAddNewList(): void {
    if (this.newListName.trim()) {
      const newList: TodoList = {
        id: uuidv4(),
        name:
          this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1),
        priority: this.selectedPriority.priority,
        tasks: []
      };
      // this.todoListService.addNewList(newList);
      this.store.dispatch(new TodoListActions.AddList(newList));
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
}
