import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MavModule } from 'make-a-vis';
import { SharedModule } from '../shared';

import { GeomapComponent } from './geomap/geomap.component';
import { HomeComponent } from './home/home.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { FieldListComponent } from './field-list/field-list.component';
import { DatatableComponent } from './datatable/datatable.component';

import { SharedDataService } from './shared/shared-data.service';

const components: any[] = [
  GeomapComponent,
  HomeComponent,
  ScatterplotComponent,
  FieldListComponent,
  DatatableComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MavModule
  ],
  exports: components,
  declarations: components,
  providers: [SharedDataService]
})
export class AislMavModule { }
