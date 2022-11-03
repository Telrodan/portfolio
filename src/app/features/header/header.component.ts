import { Component, OnInit } from '@angular/core';
import { SideMenuService } from 'src/app/core/services/side-menu.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private sideMenuService: SideMenuService) {}

  public ngOnInit(): void {}

  public onOpenSideMenu(): void {
    this.sideMenuService.openSideMenu();
  }
}
