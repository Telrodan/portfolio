import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription, tap, takeUntil } from 'rxjs';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddListComponent } from './add-list/add-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  public isLoading = false;
  public todoLists: TodoList[];
  public displayedLists: TodoList[];
  private componentSubscriptions: Subscription[] = [];

  constructor(
    public dialogService: DialogService,
    private store$: Store<{ todoList: { todoLists: TodoList[] } }>
  ) {}

  public ngOnInit(): void {
    this.store$
      .select('todoList')
      .pipe(
        tap((todoLists) => {
          const extractedLists = todoLists.todoLists;
          this.todoLists = extractedLists;
          this.finishedTasks = this.getFinishedTasks();
          this.unfinishedTasks = this.getUnfinishedTasks();
          this.finishedLists = this.getFinishedLists();
          this.unfinishedLists = this.getUnfinishedLists();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

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
  }

  public onAddNewList(): void {
    const ref = this.dialogService.open(AddListComponent, {
      header: 'Add new list',
      width: '50%'
    });
  }

  public onAddNewTask(): void {}

  public onEditList(list: TodoList): void {}

  public paginate(event: any): void {
    this.displayedLists = [];
    const start = event.first;
    const end = event.first + event.rows;
    // this.setDisplayedLists(start, end);
  }
  onCheckTask(task: Task) {
    const checkedTask: Task = {
      ...task,
      checked: true
    };
    this.store$.dispatch(new TodoListActions.CheckTask(checkedTask));
  }
  onUpdateTask() {}
  onDeleteTask() {}
  // private setDisplayedLists(start: number = 0, end: number = 3) {
  //   this.displayedLists = [];
  //   for (let i = start; i < end; i++) {
  //     if (this.lists[i]) {
  //       this.displayedLists.push(this.lists[i]);
  //     }
  //   }
  // }
}
