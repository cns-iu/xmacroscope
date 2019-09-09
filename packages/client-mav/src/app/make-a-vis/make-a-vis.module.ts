import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegendViewModule } from './legend-view/legend-view.module';
import { MainComponent } from './main/main.component';
import { VisualizationViewModule } from './visualization-view/visualization-view.module';
import { GVButtonGroupModule } from '../shared/components/gv-button-group';

@NgModule({
  imports: [
    CommonModule,

    GVButtonGroupModule,
    LegendViewModule,
    VisualizationViewModule
  ],
  exports: [
    MainComponent,
    LegendViewModule,
    VisualizationViewModule
  ],
  declarations: [MainComponent]
})
export class MakeAVisModule { }
