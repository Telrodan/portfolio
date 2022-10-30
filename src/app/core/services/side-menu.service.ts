import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  public isSideMenuOpen = new Subject<boolean>();
  public isSideMenuShowing = new Subject<boolean>();

  public openSideMenu(): void {
    this.isSideMenuOpen.next(true);
  }

  public closeSideMenu(): void {
    this.isSideMenuOpen.next(false);
  }

  public showSideMenu(): void {
    this.isSideMenuShowing.next(true);
  }

  public hideSideMenu(): void {
    this.isSideMenuShowing.next(false);
  }
}
