import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserTrackingComponent } from './user-tracking/user-tracking.component';
import { WorksMenuComponent } from './works-menu/works-menu.component';
import { WorksComponent } from './works.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [
      {
        path: 'menu',
        component: WorksMenuComponent
      },
      {
        path: 'todo-list',
        component: TodoListComponent
      },
      {
        path: 'user-tracking',
        component: UserTrackingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {}
