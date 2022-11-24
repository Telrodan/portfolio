import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {
  public todoList: TodoList;
  public listName: string;
  public selectedPriority: any;
  public priorities = [
    { priority: 'Low', key: 'L' },
    { priority: 'Medium', key: 'M' },
    { priority: 'High', key: 'H' },
  ];

  constructor(
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
    private todoListService: TodoListService,
    private messageService: MessageService
  ) {
    this.todoList = this.dialogConfig.data;
    this.listName = this.todoList.name;
    this.selectedPriority =
      this.priorities[
        this.priorities.findIndex((priority) => priority.priority === this.todoList.priority)
      ];
  }

  ngOnInit(): void {}

  public onSubmit() {
    if (this.listName.trim()) {
      const updatedList: TodoList = {
        ...this.todoList,
        name: this.listName.charAt(0).toUpperCase() + this.listName.slice(1),
        priority: this.selectedPriority.priority,
      };
      this.todoListService.setList(updatedList);
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'To-do list updated.',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a list name.',
      });
    }
  }

  public onDelete() {
    this.todoListService.deleteList(this.todoList);
    this.dialogRef.close();
  }
}
