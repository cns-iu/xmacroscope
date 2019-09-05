import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { GeographicMapComponent } from './geographic-map/geographic-map.component';
import { ScatterplotMapComponent } from './scatterplot-map/scatterplot-map.component';
import { TableModule } from './table/table.module';


@NgModule({
  imports: [
    CommonModule,
    NgxMapboxGLModule,
    TableModule
  ],
  declarations: [ScatterplotMapComponent, GeographicMapComponent],
  entryComponents: [ScatterplotMapComponent, GeographicMapComponent]
})
export class VisualizationsModule { }
