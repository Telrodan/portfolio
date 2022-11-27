import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ButtonModule } from 'primeng/button';

const PRIMENG_MODULES = [ButtonModule];

@NgModule({
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  imports: [CommonModule, ...PRIMENG_MODULES],
})
export class SharedModule {}
