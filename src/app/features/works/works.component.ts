import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public openProject(): void {}
  display: boolean = false;

  openWorkDialog() {
    this.dialog.open(TodoListComponent, {
      width: '50rem',
      panelClass: 'works-custom-modal'
    });
  }
}
