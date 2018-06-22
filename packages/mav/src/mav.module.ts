import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTabsModule, MatSidenavModule } from '@angular/material';

import { DinoGeomapModule } from '@ngx-dino/geomap';
import { DinoScatterplotModule } from '@ngx-dino/scatterplot';

import { GeomapComponent } from './geomap/geomap.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';

import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';

import { FieldDropzoneComponent } from './field-dropzone/field-dropzone.component';

import { DragDropService, DraggableDirective, DroppableDirective } from './drag-drop';

import { FieldHoverService } from './shared/field-hover.service';

const components: any[] = [
  GeomapComponent,
  ScatterplotComponent,
  AttributeSelectorComponent,
  FieldDropzoneComponent,
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
    DragDropService, FieldHoverService
  ],
  declarations: components
})
export class MavModule { }
