import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  public isSideMenuOpen = new Subject<boolean>();

  public openSideMenu(): void {
    this.isSideMenuOpen.next(true);
  }

  public closeSideMenu(): void {
    this.isSideMenuOpen.next(false);
  }
}
