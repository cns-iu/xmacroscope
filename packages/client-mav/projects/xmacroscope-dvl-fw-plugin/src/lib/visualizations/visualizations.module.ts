import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DvlFwModule } from '@dvl-fw/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { GeographicMapComponent } from './geographic-map/geographic-map.component';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { ScatterplotMapComponent } from './scatterplot-map/scatterplot-map.component';
import { SymbolLegendComponent } from './symbol-legend/symbol-legend.component';
import { TableComponent } from './table/table.component';


const entryComponents: any = [
  GeographicMapComponent,
  GraphicVariableLegendComponent,
  ScatterplotMapComponent,
  SymbolLegendComponent,
  TableComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule,
    MatTableModule,
    DvlFwModule
  ],
  declarations: entryComponents,
  entryComponents
})
export class VisualizationsModule { }
