import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { ScatterplotMapComponent } from './scatterplot-map/scatterplot-map.component';
import { GeographicMapComponent } from './geographic-map/geographic-map.component';


@NgModule({
  declarations: [ScatterplotMapComponent, GeographicMapComponent],
  imports: [
    CommonModule,
    NgxMapboxGLModule
  ],
  entryComponents: [ScatterplotMapComponent, GeographicMapComponent]
})
export class VisualizationsModule { }
