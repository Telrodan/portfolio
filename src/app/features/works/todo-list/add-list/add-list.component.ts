import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoListActions from '../../../../core/store/todo-list.actions';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from 'primeng/api';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  public newListName: string = '';
  public priorities = [
    { priority: 'Low', key: 'L' },
    { priority: 'Medium', key: 'M' },
    { priority: 'High', key: 'H' }
  ];
  public selectedPriority;

  constructor(
    public dialogRef: DynamicDialogRef,
    private messageService: MessageService,
    private store: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {}

  public ngOnInit(): void {
    this.selectedPriority = this.priorities[0];
  }

  public onSubmit(): void {
    if (this.newListName.trim()) {
      const newList: TodoList = {
        id: uuidv4(),
        name:
          this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1),
        priority: this.selectedPriority.priority,
        tasks: []
      };
      this.store.dispatch(new TodoListActions.AddList(newList));
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'To-do list added.'
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a list name.'
      });
    }
  }
}
