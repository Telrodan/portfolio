import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LandingComponent],
})
export class LandingModule {}
