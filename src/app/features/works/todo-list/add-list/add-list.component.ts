import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from 'primeng/api';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { MatDialogRef } from '@angular/material/dialog';

interface Priority {
  priority: string;
}

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  public newListName: string = '';
  public selectedPriority: Priority = { priority: '' };

  public priorities = [
    { priority: 'Low' },
    { priority: 'Medium' },
    { priority: 'High' }
  ];

  constructor(
    private messageService: MessageService,
    private todoListService: TodoListService,
    public dialogRef: MatDialogRef<AddListComponent>
  ) {}

  ngOnInit(): void {}

  public onAddNewList(): void {
    if (this.newListName.trim()) {
      const newList: TodoList = {
        id: uuidv4(),
        name:
          this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1),
        priority: this.selectedPriority.priority,
        tasks: []
      };
      this.todoListService.addNewList(newList);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'To-do list added.'
      });
      this.dialogRef.close();
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a list name.'
      });
    }
  }
}
