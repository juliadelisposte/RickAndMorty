// second.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SecondComponent }
    ]),
    SecondComponent
  ]
})
export class SecondModule {}
