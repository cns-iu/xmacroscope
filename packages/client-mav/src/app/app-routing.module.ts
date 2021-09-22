import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent as home } from './home/main/main.component';
import { MainComponent as backend } from './backend/main/main.component';
import { MainComponent as mav } from './make-a-vis/main/main.component';
import { MainComponent as endline } from './endline/main/main.component';

import { environment } from '../environments/environment'; // TODO

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: home },
  { path: 'backend', component: backend },
  { path: 'mav', component: mav },
  { path: 'endline', component: endline },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHashStrategy })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
