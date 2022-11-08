import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public newTaskName: string = '';
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {}
}
// const newTask: Task = {
//   id: uuidv4(),
//   listId: uuidv4(),
//   checked: false,
//   name: this.newTaskName.charAt(0).toUpperCase() + this.newTaskName.slice(1)
// };
// this.todoListService.addNewTask(newTask);
