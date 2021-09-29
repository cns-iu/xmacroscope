import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DvlFwAngularModule } from '@dvl-fw/angular';
import { NgxMapLibreGLModule } from 'ngx-maplibre-gl';

import { GeographicMapComponent } from './geographic-map/geographic-map.component';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { ScatterplotMapComponent } from './scatterplot-map/scatterplot-map.component';
import { SymbolLegendComponent } from './symbol-legend/symbol-legend.component';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    NgxMapLibreGLModule,
    MatTableModule,
    DvlFwAngularModule
  ],
  declarations: [
    GeographicMapComponent,
    GraphicVariableLegendComponent,
    ScatterplotMapComponent,
    SymbolLegendComponent,
    TableComponent
  ]
})
export class VisualizationsModule { }
