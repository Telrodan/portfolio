import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';

const landingModule = () =>
  import('./features/landing/landing.module').then((m) => m.LandingModule);

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent, loadChildren: landingModule },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
