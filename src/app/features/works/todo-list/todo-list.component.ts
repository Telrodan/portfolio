import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AddListComponent } from './add-list/add-list.component';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { Task } from 'src/app/core/models/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [DialogService],
})
export class TodoListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public todoLists: TodoList[];
  public isLoading = true;
  public finishedTasks: number;
  public unfinishedTasks: number;
  public finishedLists: number;
  public unfinishedLists: number;
  public splitTaskButtonItems: MenuItem[];
  public selectedTask: Task;
  public selectedList: TodoList;
  public ref: DynamicDialogRef;

  constructor(public dialogService: DialogService, private todoListService: TodoListService) {}

  public ngOnInit(): void {
    this.todoListService
      .getLists$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.isLoading = false));

    this.todoListService.todoListChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((resTodoLists) => {
        this.todoLists = resTodoLists;
        this.finishedLists = this.getFinishedLists();
        this.finishedTasks = this.getFinishedTasks();
        this.unfinishedLists = this.getUnfinishedLists();
        this.unfinishedTasks = this.getUnfinishedTasks();
      });

    this.splitTaskButtonItems = [
      {
        label: 'Edit',
        icon: 'pi pi-cog',
        command: () => {
          this.onUpdateTask();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.onDeleteTask();
        },
      },
    ];
  }

  public onAddNewList(): void {
    this.ref = this.dialogService.open(AddListComponent, {
      header: 'Add new list',
      width: '350px',
    });
  }

  public onEditList(list: TodoList): void {
    this.ref = this.dialogService.open(EditListComponent, {
      header: 'Edit list',
      width: '350px',
      data: list,
    });
  }

  public onAddNewTask(list: TodoList): void {
    this.ref = this.dialogService.open(AddTaskComponent, {
      header: 'Add new task',
      width: '350px',
      data: list,
    });
  }

  public onCheckTask(list: TodoList, taskId: string): void {
    const taskIndex = list.tasks.findIndex((task) => task.id === taskId);
    list.tasks[taskIndex].checked = !list.tasks[taskIndex].checked;
    this.todoListService.todoListChanges.next(this.todoLists);
  }

  public onUpdateTask(): void {
    this.ref = this.dialogService.open(EditTaskComponent, {
      header: 'Edit task',
      width: '350px',
      data: [this.selectedList, this.selectedTask],
    });
  }

  public onDeleteTask(): void {
    const taskIndex = this.selectedList.tasks.findIndex((task) => task.id === this.selectedTask.id);
    this.selectedList.tasks.splice(taskIndex, 1);
    this.todoListService.todoListChanges.next(this.todoLists);
  }

  public setListAndTask(list: TodoList, task: Task) {
    this.selectedList = list;
    this.selectedTask = task;
  }

  public getFinishedLists(): number {
    let finishedLists = 0;
    this.todoLists.forEach((todoList) => {
      let counter = 0;
      let tasks = todoList.tasks.length;
      if (tasks !== 0) {
        todoList.tasks.forEach((task) => {
          if (task.checked) counter++;
        });
        if (counter === tasks) finishedLists++;
      }
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
}
