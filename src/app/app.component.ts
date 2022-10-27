import { Component, HostListener, OnInit } from '@angular/core';
import { isMobileView } from './shared/utils/mobile-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isMobileView: boolean = false;

  public ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.isMobileView = isMobileView();
  }
}
