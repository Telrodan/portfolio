import { NgModule } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  providers: [ThemeService, TodoListService],
})
export class CoreModule {}
