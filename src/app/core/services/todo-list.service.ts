import { Injectable } from '@angular/core';
import { Observable, Subject, map, forkJoin } from 'rxjs';
import { Task } from '../models/task.model';
import { TodoList } from '../models/todo-list.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  public todoLists: TodoList[] = [];
  public todoListChanges = new Subject<TodoList[]>();

  constructor(private apiService: ApiService) {}

  public setList(list: TodoList): void {
    let alreadyInDatabase = false;
    this.todoLists.forEach((checkList) => {
      if (checkList.id === list.id) alreadyInDatabase = true;
    });
    if (alreadyInDatabase) {
      const listIndex = this.todoLists.findIndex((checkList) => checkList.id === list.id);
      this.todoLists[listIndex] = list;
      this.todoListChanges.next(this.todoLists);
    } else {
      this.todoLists.push(list);
      this.todoListChanges.next(this.todoLists);
    }
  }

  public getLists$(): Observable<TodoList[]> {
    return forkJoin([
      this.apiService.get$<any>('lists.json'),
      this.apiService.get$<any>('tasks.json'),
    ]).pipe(
      map(([lists, tasks]) => {
        const tasksArray: Task[] = [];
        for (const key in lists) {
          this.todoLists.push(lists[key]);
        }
        this.todoLists.forEach((list: TodoList) => (list.tasks = []));
        for (const key in tasks) {
          tasksArray.push(tasks[key]);
        }
        this.todoLists.forEach((list: TodoList) => {
          tasksArray.forEach((task: Task) => {
            if (list.id === task.listId) {
              list.tasks.push(task);
            }
          });
        });
        this.todoListChanges.next(this.todoLists);
        return this.todoLists;
      })
    );
  }

  public deleteList(list: TodoList): void {
    const listIndex = this.todoLists.findIndex((checkList) => checkList.id === list.id);
    this.todoLists.splice(listIndex, 1);
    this.todoListChanges.next(this.todoLists);
  }

  public setTask(task: Task): void {
    this.todoLists.forEach((list) => {
      if (list.id === task.listId) {
        list.tasks.push(task);
      }
    });
    this.todoListChanges.next(this.todoLists);
  }
}
