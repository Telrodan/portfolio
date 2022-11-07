import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  public newListName: string = '';
  public selectedPriority: string = '';

  public priorities = [{ name: 'high' }, { name: 'medium' }, { name: 'low' }];
  constructor() {}

  ngOnInit(): void {}
}
