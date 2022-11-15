import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Subject,
  Subscription,
  tap,
  takeUntil,
  Observable,
  filter
} from 'rxjs';
import { AddListComponent } from './add-list/add-list.component';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { Store } from '@ngrx/store';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { Task } from 'src/app/core/models/task.model';
import * as TodoListActions from '../../../core/store/todo-list.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [DialogService]
})
export class TodoListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public finishedTasks: number;
  public unfinishedTasks: number;
  public finishedLists: number;
  public unfinishedLists: number;
  public splitTaskButtonItems: MenuItem[];
  public newListName: string;
  public newTaskName: string;
  public todoLists: TodoList[];

  constructor(
    public dialogService: DialogService,
    private store$: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {}

  public ngOnInit(): void {
    this.store$
      .select('todoList')
      .pipe(
        tap((data) => {
          this.todoLists = data.todoLists;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.finishedTasks = this.getFinishedTasks();
        this.unfinishedTasks = this.getUnfinishedTasks();
        this.finishedLists = this.getFinishedLists();
        this.unfinishedLists = this.getUnfinishedLists();
        console.log(this.todoLists);
      });

    console.log(this.todoLists);

    this.splitTaskButtonItems = [
      {
        label: 'Edit',
        icon: 'pi pi-cog',
        command: () => {
          this.onUpdateTask();
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.onDeleteTask();
        }
      }
    ];
  }

  public getFinishedLists(): number {
    let finishedLists = 0;
    this.todoLists.forEach((todoList) => {
      let counter = 0;
      let tasks = todoList.tasks.length;
      todoList.tasks.forEach((task) => {
        if (task.checked) counter++;
      });
      if (counter === tasks) finishedLists++;
    });
    return finishedLists;
  }

  public getUnfinishedLists(): number {
    let finishedLists = 0;
    this.todoLists.forEach((todoList) => {
      let counter = 0;
      let tasks = todoList.tasks.length;
      todoList.tasks.forEach((task) => {
        if (task.checked) counter++;
      });
      if (counter < tasks) finishedLists++;
    });
    console.log(finishedLists);
    return finishedLists;
  }

  public getFinishedTasks(): number {
    let counter = 0;
    this.todoLists.forEach((todoList) => {
      todoList.tasks.forEach((task) => {
        if (task.checked) counter++;
      });
    });
    return counter;
  }

  public getUnfinishedTasks(): number {
    let counter = 0;
    this.todoLists.forEach((todoList) => {
      todoList.tasks.forEach((task) => {
        if (!task.checked) counter++;
      });
    });
    return counter;
  }

  public ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();

    console.log('bamm');
  }

  public onAddNewList(): void {
    const ref = this.dialogService.open(AddListComponent, {
      header: 'Add new list',
      width: '350px'
    });

    console.log(this.todoLists);
  }

  public onAddNewTask(): void {}

  public onEditList(list: TodoList): void {}

  onCheckTask(task: Task) {
    const checkedTask: Task = {
      ...task,
      checked: true
    };
    this.store$.dispatch(new TodoListActions.CheckTask(checkedTask));
  }
  onUpdateTask() {}
  onDeleteTask() {}
}
