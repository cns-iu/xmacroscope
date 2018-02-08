import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GeomapComponent } from './geomap/geomap.component';
import { MavModule } from '../mav';
import { HomeComponent } from './home/home.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { FieldListComponent } from './field-list/field-list.component';

const components: any[] = [
  GeomapComponent,
  HomeComponent,
  ScatterplotComponent,
  FieldListComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MavModule
  ],
  exports: components,
  declarations: components,
  providers: []
})
export class AislMavModule { }
