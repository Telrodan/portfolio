import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-menu',
  templateUrl: './works-menu.component.html',
  styleUrls: ['./works-menu.component.scss']
})
export class WorksMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onNavigate(url: string) {
    window.location.href = url;
  }
}
