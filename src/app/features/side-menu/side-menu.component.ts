import { Component, OnInit, HostListener } from '@angular/core';
import { SideMenuService } from 'src/app/core/services/side-menu.service';
import { isMobileView } from 'src/app/shared/utils/mobile-view';

@Component({
  selector: 'portfolio-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public isOpen: boolean = false;
  public isHidden: boolean = false;
  public isMobileView: boolean = false;

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit(): void {
    this.onResize();
    this.sideMenuService.isSideMenuOpen.subscribe(
      (boolean) => (this.isOpen = boolean)
    );
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.isMobileView = isMobileView();
  }

  public openSideMenu(): void {
    this.sideMenuService.openSideMenu();
    this.isOpen = true;
  }

  public closeSideMenu(): void {
    this.sideMenuService.closeSideMenu();
    this.isOpen = false;
  }

  public showSideMenu(): void {
    this.sideMenuService.showSideMenu();
    this.isHidden = false;
  }

  public hideSideMenu(): void {
    this.sideMenuService.hideSideMenu();
    this.isHidden = true;
    this.closeSideMenu();
  }
}
