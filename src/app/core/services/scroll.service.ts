import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public scrollTo = new Subject<string>();

  constructor() {}

  public scrollToElement(element: string): void {
    this.scrollTo.next(element);
  }
}
