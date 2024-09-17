import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(m => m.FirstModule) // Lazy Loading
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule) // Lazy Loading
  },
  {
    path: '**',
    redirectTo: 'first'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
