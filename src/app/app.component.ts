import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit, Inject } from '@angular/core';
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
  public isSideMenuShowing: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sideMenuService: SideMenuService
  ) {}

  public ngOnInit(): void {
    this.onResize();
    this.sideMenuService.isSideMenuShowing.subscribe(
      (boolean) => (this.isSideMenuShowing = boolean)
    );

    this.sideMenuService.isSideMenuOpen.subscribe((boolean) => {
      this.isSideMenuOpen = boolean;
      if (boolean && this.isMobileView) {
        this.document.body.style.overflowY = 'hidden';
      } else {
        this.document.body.style.overflowY = 'auto';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.isMobileView = isMobileView();
  }
}
