import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DvlFwModule } from '@dvl-fw/core';
import { ButtonGroupModule } from 'src/app/shared/components/button-group';
import { GVButtonGroupModule } from 'src/app/shared/components/gv-button-group';

import { GeomapComponent } from './geomap/geomap.component';
import { MainComponent } from './main/main.component';
import { ScatterGraphComponent } from './scatter-graph/scatter-graph.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
    MatIconModule,
    NoopAnimationsModule,
    DvlFwModule,
    ButtonGroupModule,
    GVButtonGroupModule,
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, ScatterGraphComponent, GeomapComponent]
})
export class VisualizationViewModule { }
