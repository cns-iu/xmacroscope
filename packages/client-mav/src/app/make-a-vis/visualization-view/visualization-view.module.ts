import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DvlFwModule } from '@dvl-fw/core';
import { MainComponent } from './main/main.component';
import { ScatterGraphComponent } from './scatter-graph/scatter-graph.component';
import { GVButtonGroupModule } from 'src/app/shared/components/gv-button-group';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
    NoopAnimationsModule,
    DvlFwModule,
    GVButtonGroupModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, ScatterGraphComponent]
})
export class VisualizationViewModule { }
