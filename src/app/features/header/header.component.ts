import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { SideMenuService } from 'src/app/core/services/side-menu.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private sideMenuService: SideMenuService,
    public scrollService: ScrollService
  ) {}

  public ngOnInit(): void {}

  public scrollToElement(element: string) {
    this.scrollService.scrollToElement(element);
  }

  public openSideMenu(): void {
    this.sideMenuService.openSideMenu();
  }
}
