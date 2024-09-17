// first.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FirstComponent }
    ]),
    FirstComponent
  ]
})
export class FirstModule {}
