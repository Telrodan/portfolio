import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from 'src/app/core/models/task.model';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  public newTaskName = '';
  public todoList: TodoList;

  constructor(
    private messageService: MessageService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
    private todoListService: TodoListService
  ) {
    this.todoList = this.dialogConfig.data;
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    if (this.newTaskName.trim()) {
      const newTask: Task = {
        id: uuidv4(),
        listId: this.todoList.id,
        checked: false,
        name: this.newTaskName.charAt(0).toUpperCase() + this.newTaskName.slice(1),
      };
      this.todoListService.setTask(newTask);
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Task added.',
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
