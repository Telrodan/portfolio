import { Component, OnInit, HostListener } from '@angular/core';
import { SideMenuService } from 'src/app/core/services/side-menu.service';
import { isMobileView } from 'src/app/shared/utils/mobile-view';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'portfolio-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('fadeInAndOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s .3s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
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
}
