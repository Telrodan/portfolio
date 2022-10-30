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
  public isMobileView: boolean = false;

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit(): void {
    this.sideMenuService.isSideMenuOpen.subscribe(
      (boolean) => (this.isOpen = boolean)
    );
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.isMobileView = isMobileView();
  }

  public openSideMenu(): void {
    this.sideMenuService.openSideMenu();
    console.log('open');
  }

  public closeSideMenu(): void {
    this.sideMenuService.closeSideMenu();
  }
}
