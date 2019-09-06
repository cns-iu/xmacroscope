import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DvlFwModule } from '@dvl-fw/core';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { GeographicMapComponent } from './geographic-map/geographic-map.component';
import { ScatterplotMapComponent } from './scatterplot-map/scatterplot-map.component';
import { SymbolLegendComponent } from './symbol-legend/symbol-legend.component';
import { TableModule } from './table/table.module';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule,
    TableModule,
    DvlFwModule
  ],
  declarations: [ScatterplotMapComponent, GeographicMapComponent, SymbolLegendComponent, GraphicVariableLegendComponent],
  entryComponents: [ScatterplotMapComponent, GeographicMapComponent, SymbolLegendComponent, GraphicVariableLegendComponent]
})
export class VisualizationsModule { }
