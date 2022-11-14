import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddListComponent } from './add-list/add-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  public newListName: string;
  public newTaskName: string;
  public isLoading = false;
  public lists: TodoList[];
  public displayedLists: TodoList[];
  private componentSubscriptions: Subscription[] = [];

  constructor(
    public dialog: MatDialog,
    public todoListService: TodoListService,
    private store: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {}

  public ngOnInit(): void {
    this.store.select('todoList').subscribe((todoLists) => {
      this.lists = todoLists.todoLists;
      console.log(this.lists);
    });
    this.setDisplayedLists();
  }

  public ngOnDestroy(): void {
    this.componentSubscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public onAddNewList(): void {
    this.dialog.open(AddListComponent, {
      panelClass: 'custom-todo-modal'
    });
  }

  public onAddNewTask(list: TodoList): void {
    this.todoListService.setList(list);
    this.dialog.open(AddTaskComponent, {});
  }

  public onEditList(list: TodoList): void {
    this.todoListService.setList(list);
    this.dialog.open(EditListComponent, {});
  }

  public paginate(event: any): void {
    this.displayedLists = [];
    const start = event.first;
    const end = event.first + event.rows;
    this.setDisplayedLists(start, end);
  }

  private setDisplayedLists(start: number = 0, end: number = 3) {
    this.displayedLists = [];
    for (let i = start; i < end; i++) {
      if (this.lists[i]) {
        this.displayedLists.push(this.lists[i]);
      }
    }
  }
}
