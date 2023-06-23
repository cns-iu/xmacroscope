import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutModule } from './pages/about/about.module';
import { VisualizationModule } from './pages/visualization/visualization.module';

import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', loadChildren: () => AboutModule },
  { path: 'visualization/:id', loadChildren: () => VisualizationModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: environment.useHashStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
