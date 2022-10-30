import { Component, OnInit, Input } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.scrollTo.subscribe((element) => {
      document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  public scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
