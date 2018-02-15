import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTabsModule, MatSidenavModule } from '@angular/material';

import { DinoGeomapModule } from '../dino-geomap';
import { DinoScatterplotModule } from '../dino-scatterplot';

import { GeomapComponent } from './geomap/geomap.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { FieldDropzoneComponent } from './field-dropzone/field-dropzone.component';
import { FieldDropzonesComponent } from './field-dropzones/field-dropzones.component';

import { DragDropService, DraggableDirective, DroppableDirective } from './drag-drop';

const components: any[] = [
  GeomapComponent,
  ScatterplotComponent,
  AttributeSelectorComponent,
  FieldDropzoneComponent,
  FieldDropzonesComponent,
  DraggableDirective,
  DroppableDirective
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    DinoGeomapModule,
    DinoScatterplotModule
  ],
  exports: components,
  providers: [
    DragDropService
  ],
  declarations: components
})
export class MavModule { }
