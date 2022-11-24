import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task.model';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  public task: Task;
  public todoList: TodoList;
  public newTaskName = '';

  constructor(
    public dialogConfig: DynamicDialogConfig,
    public dialogRef: DynamicDialogRef,
    private todoListService: TodoListService,
    private messageService: MessageService
  ) {
    this.todoList = this.dialogConfig.data[0];
    this.task = this.dialogConfig.data[1];
    this.newTaskName = this.task.name;
  }

  ngOnInit(): void {}

  public onSubmit() {
    if (this.newTaskName.trim()) {
      this.task.name = this.newTaskName;
      const taskIndex = this.todoList.tasks.findIndex((checkTask) => checkTask.id === this.task.id);
      this.todoList.tasks[taskIndex] = this.task;
      this.todoListService.setList(this.todoList);
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Task updated.',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a task name.',
      });
    }
  }
}
