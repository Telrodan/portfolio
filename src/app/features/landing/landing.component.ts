import { Component, HostListener, OnInit } from '@angular/core';
import { isMobileView } from '../../shared/utils/mobile-view';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public isMobileView: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.isMobileView = isMobileView();
  }
}
