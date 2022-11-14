import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoList } from './core/models/todo-list.model';
import { SideMenuService } from './core/services/side-menu.service';
import { TodoListService } from './core/services/todo-list.service';
import { isMobileView } from './shared/utils/mobile-view';
import * as TodoListActions from './core/store/todo-list.actions';
import { ThemeService } from './core/services/theme.service';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isMobileView: boolean = false;
  public isSideMenuOpen: boolean = false;
  public isSideMenuShowing: boolean = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sideMenuService: SideMenuService,
    private store: Store<{ todoList: { todoLists: TodoList[] } }>,
    private todoListService: TodoListService,
    private themeService: ThemeService,
    public appConfig: AppConfig
  ) {}

  public ngOnInit(): void {
    this.todoListService.getTodoLists().subscribe((todoLists) => {
      this.store.dispatch(new TodoListActions.AddLists(todoLists));
      console.log(todoLists);
    });

    this.onResize();
    this.sideMenuService.isSideMenuShowing.subscribe(
      (boolean) => (this.isSideMenuShowing = boolean)
    );

    this.sideMenuService.isSideMenuOpen.subscribe((boolean) => {
      this.isSideMenuOpen = boolean;
      if (boolean && this.isMobileView) {
        this.document.body.style.overflowY = 'hidden';
      } else {
        this.document.body.style.overflowY = 'auto';
      }
    });
  }

  public changeTheme(theme: string): void {
    let themeElement = document.getElementById('theme-link');
    console.log(themeElement);
    themeElement.setAttribute(
      'href',
      themeElement.getAttribute('href').replace(this.appConfig.theme, theme)
    );
    this.appConfig.theme = theme;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.isMobileView = isMobileView();
  }
}
