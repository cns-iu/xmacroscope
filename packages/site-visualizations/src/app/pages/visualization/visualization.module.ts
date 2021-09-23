import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizationComponent } from './visualization.component';
import { VisualizationPageModule } from '../../shared/components/visualization-page/visualization-page.module';


@NgModule({
  declarations: [VisualizationComponent],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    VisualizationPageModule
  ]
})
export class VisualizationModule { }