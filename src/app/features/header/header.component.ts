import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { SideMenuService } from 'src/app/core/services/side-menu.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private appConfig: AppConfig) {}

  public ngOnInit(): void {}

  public changeTheme(theme: string): void {
    let themeElement = document.getElementById('theme-link');
    console.log(themeElement);
    themeElement.setAttribute(
      'href',
      themeElement.getAttribute('href').replace(this.appConfig.theme, theme)
    );
    this.appConfig.theme = theme;
  }
}
