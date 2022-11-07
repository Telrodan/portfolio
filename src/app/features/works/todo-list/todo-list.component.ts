import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { MessageService } from 'primeng/api';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddListComponent } from './add-list/add-list.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [MessageService]
})
export class TodoListComponent implements OnInit {
  public newListName: string = '';
  public newTaskName: string = '';
  public lists: any;

  constructor(
    public dialog: MatDialog,
    private messageService: MessageService,
    public todoListService: TodoListService
  ) {}

  ngOnInit(): void {
    this.todoListService.getTodoLists().subscribe((res) => {
      console.log(res);
      // const convertedLists = Object.entries(res).map((entry) => entry[1]);
      this.lists = res;
    });
  }

  public onAddNewList(): void {
    this.dialog.open(AddListComponent, {
      height: '50vh'
    });
    // if (this.newListName.trim()) {
    //   const newList: TodoList = {
    //     id: uuidv4(),
    //     listName:
    //       this.newListName.charAt(0).toUpperCase() + this.newListName.slice(1),
    //     tasks: []
    //   };
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'To-do list added.'
    //   });
    //   this.todoListService.addNewList(newList);
    //   this.newListName = '';
    // } else {
    //   this.messageService.add({
    //     severity: 'warn',
    //     summary: 'Warn',
    //     detail: 'Enter a list name.'
    //   });
    // }
  }

  public onAddNewTask(listId: string): void {
    this.dialog.open(AddTaskComponent, {});
    // const newTask: Task = {
    //   id: uuidv4(),
    //   listId: uuidv4(),
    //   checked: false,
    //   name: this.newTaskName.charAt(0).toUpperCase() + this.newTaskName.slice(1)
    // };
    // this.todoListService.addNewTask(newTask);
  }
}
