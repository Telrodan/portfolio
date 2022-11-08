import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  public list: any;
  public newListName: string = '';
  public priority: string = '';
  public priorities = [
    { priority: 'Low' },
    { priority: 'Medium' },
    { priority: 'High' }
  ];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.list = this.todoListService.getList();
    this.newListName = this.list.name;
    this.priority = this.list.priority;
    console.log(this.list.priority);
  }

  public onSubmit() {}

  public onDelete() {}
}
