import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualizationDataResolver } from './visualization-data-resolver';
import { VisualizationComponent } from './visualization.component';

const routes: Routes = [{
  path: '',
  component: VisualizationComponent,
  resolve: {
    visualization: VisualizationDataResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationRoutingModule { }