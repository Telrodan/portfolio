import { Component, HostListener, OnInit } from '@angular/core';
import { isMobileView } from 'src/app/shared/utils/mobile-view';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMobileView: boolean = false;

  constructor() {}

  public ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.isMobileView = isMobileView();
  }
}
