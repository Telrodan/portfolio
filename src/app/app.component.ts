import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoList } from './core/models/todo-list.model';
import { TodoListService } from './core/services/todo-list.service';
import * as TodoListActions from './core/store/todo-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<{ todoList: { todoLists: TodoList[] } }>,
    private todoListService: TodoListService
  ) {}

  public ngOnInit(): void {
    this.todoListService.getTodoLists().subscribe((todoLists) => {
      this.store.dispatch(new TodoListActions.AddLists(todoLists));
    });
  }
}
