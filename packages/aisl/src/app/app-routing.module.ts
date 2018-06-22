import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent as home } from './aisl-home/home/home.component';
import { HomeComponent as backend } from './aisl-backend/home/home.component';
import { HomeComponent as mav } from './aisl-mav/home/home.component';
import { HomeComponent as endline } from './aisl-endline/home/home.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: home },
  { path: 'backend', component: backend },
  { path: 'mav', component: mav },
  { path: 'endline', component: endline },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
