import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualizationModule } from './pages/visualization/visualization.module';

const routes: Routes = [
  { path: 'visualization/:id', loadChildren: () => VisualizationModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
