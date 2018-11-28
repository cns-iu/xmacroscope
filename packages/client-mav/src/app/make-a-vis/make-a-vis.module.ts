import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataViewModule } from './data-view/data-view.module';
import { LegendViewModule } from './legend-view/legend-view.module';
import { MainComponent } from './main/main.component';
import { VisualizationViewModule } from './visualization-view/visualization-view.module';

@NgModule({
  imports: [
    CommonModule,

    DataViewModule,
    LegendViewModule,
    VisualizationViewModule
  ],
  exports: [
    MainComponent,
    DataViewModule,
    LegendViewModule,
    VisualizationViewModule
  ],
  declarations: [MainComponent]
})
export class MakeAVisModule { }
