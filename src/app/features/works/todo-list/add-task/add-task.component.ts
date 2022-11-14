import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public newTaskName: string = '';
  private list: TodoList;

  constructor(private todoListService: TodoListService) {
    this.list = todoListService.getList();
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    const newTask: Task = {
      id: uuidv4(),
      listId: this.list.id,
      checked: false,
      name: this.newTaskName.charAt(0).toUpperCase() + this.newTaskName.slice(1)
    };
    this.list.tasks.push(newTask);
    this.todoListService.addNewTask(newTask);
    console.log(this.list);
  }
}
