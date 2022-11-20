import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { TodoList } from '../models/todo-list.model';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment';
// import TODO_LIST_DATA from '../../../assets/dummy-data/TODO_LIST_DATA';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todoLists: TodoList[];
  private selectedList: TodoList;

  constructor(private http: HttpClient) {}

  public getTodoLists$(): any {
    // return forkJoin({
    //   lists: this.http.get<TodoList[]>(TODO_LIST_DATA.LISTS),
    //   tasks: this.http.get<Task[]>(TODO_LIST_DATA.TASKS)
    // }).pipe(
    //   map(({ lists, tasks }) => {
    //     console.log(lists);
    //     console.log(tasks);
    //   })
    // );
  }

  public getTodoLists(): Observable<Array<TodoList>> {
    this.todoLists = [];
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
        return this.todoLists;
      })
    );
  }

  public setList(list: TodoList): void {
    this.selectedList = list;
  }

  public getList(): TodoList {
    const list = this.selectedList;
    this.selectedList = {
      id: '',
      name: 'string',
      tasks: [],
      priority: 'string'
    };
    return list;
  }

  public addNewList(list: TodoList): void {
    this.http.post<TodoList>(environment.todoListDatabase, list).subscribe();
  }

  public getTodoListById(id: string): TodoList | undefined {
    const list = this.todoLists.find((list) => {
      return list.id === id;
    });
    return list;
  }

  public addNewTask(task: Task): void {
    this.http
      .post<TodoList>(environment.todoListTaskDatabase, task)
      .subscribe();
  }
}
