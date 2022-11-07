import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { TodoList } from '../models/todo-list.model';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todoLists: Array<TodoList> = [];

  constructor(private http: HttpClient) {}

  public getTodoLists(): Observable<Array<TodoList>> {
    return forkJoin({
      tasks: ajax.getJSON<Array<Task>>(environment.todoListTaskDatabase),
      lists: ajax.getJSON<Array<TodoList>>(environment.todoListDatabase)
    }).pipe(
      map(({ tasks, lists }) => {
        const convertedTasks = Object.entries(tasks).map((entry) => entry[1]);
        const convertedLists = Object.entries(lists).map((entry) => entry[1]);
        convertedLists.map((list) => {
          this.todoLists.push(list);
          list.tasks = [];
          convertedTasks.map((task) => {
            if (list.id === task.listId) {
              list.tasks.push(task);
            }
          });
        });
        console.log(typeof this.todoLists);
        return this.todoLists;
      })
    );
  }

  public addNewList(list: TodoList): void {
    this.http.post<TodoList>(environment.todoListDatabase, list).subscribe();
  }

  public addNewTask(task: Task): void {
    this.http
      .post<TodoList>(environment.todoListTaskDatabase, task)
      .subscribe();
  }
}
