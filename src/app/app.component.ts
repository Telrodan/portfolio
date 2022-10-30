import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SideMenuService } from './core/services/side-menu.service';
import { isMobileView } from 'src/app/shared/utils/mobile-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isSideMenuOpen: boolean = false;
  public isMobileView: boolean = false;

  constructor(private sideMenuService: SideMenuService) {}

  public ngOnInit(): void {
    this.onResize();
    console.log(this.isMobileView);
    this.sideMenuService.isSideMenuOpen.subscribe(
      (boolean) => (this.isSideMenuOpen = boolean)
    );
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.isMobileView = isMobileView();
  }

  public scroll(event: string) {
    console.log(event);
  }
}
