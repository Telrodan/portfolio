import { Component, HostListener, OnInit } from '@angular/core';
import { SideMenuService } from './core/services/side-menu.service';
import { isMobileView } from './shared/utils/mobile-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isMobileView: boolean = false;
  public isSideMenuOpen: boolean = false;
  public isSideMenuShowing: boolean = true;

  constructor(private sideMenuService: SideMenuService) {}

  public ngOnInit(): void {
    this.onResize();
    this.sideMenuService.isSideMenuShowing.subscribe((boolean) => {
      this.isSideMenuShowing = boolean;
      console.log(this.isSideMenuShowing);
    });
    this.sideMenuService.isSideMenuOpen.subscribe(
      (boolean) => (this.isSideMenuOpen = boolean)
    );
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.isMobileView = isMobileView();
  }
}
