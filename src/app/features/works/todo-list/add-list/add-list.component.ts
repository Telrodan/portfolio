import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from 'primeng/api';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';

interface Priority {
  name: string;
}

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  public newListName: string = '';
  public selectedPriority: Priority = { name: '' };

  public priorities = [{ name: 'Low' }, { name: 'Medium' }, { name: 'High' }];

  constructor(
    private messageService: MessageService,
    private todoListService: TodoListService
  ) {}

  ngOnInit(): void {}

  public onAddNewList(): void {
    if (this.newListName.trim()) {
      const newList: TodoList = {
        id: uuidv4(),
        listName:
          this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1),
        priority: this.selectedPriority.name,
        tasks: []
      };
      console.log(newList);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'To-do list added.'
      });
      this.todoListService.addNewList(newList);
      this.newListName = '';
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'Enter a list name.'
      });
    }
  }
}
