import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoGeomapModule } from '@ngx-dino/geomap';
import { DinoScatterplotModule } from '@ngx-dino/scatterplot';

import { MavModule } from 'make-a-vis';
import { SharedModule } from '../shared';

import { GeomapComponent } from './geomap/geomap.component';
import { HomeComponent } from './home/home.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';

const components: any[] = [
  HomeComponent,
  GeomapComponent,
  ScatterplotComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MavModule,
    DinoGeomapModule,
    DinoScatterplotModule
  ],
  exports: components,
  declarations: components,
  providers: []
})
export class AislMavModule { }
