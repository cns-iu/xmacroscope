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
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    MatTabsModule,
    MatIconModule,

    DvlFwModule,

    ButtonGroupModule,
    GVButtonGroupModule,
  ],
  declarations: [MainComponent, ScatterGraphComponent, GeomapComponent, TableComponent],
  exports: [MainComponent],
})
export class VisualizationViewModule { }
