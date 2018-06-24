import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTabsModule, MatSidenavModule } from '@angular/material';

import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';

import { FieldDropzoneComponent } from './field-dropzone/field-dropzone.component';

import { DragDropService, DraggableDirective, DroppableDirective } from './drag-drop';

import { FieldHoverService } from './shared/field-hover.service';

const components: any[] = [
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
  ],
  exports: components,
  providers: [
    DragDropService, FieldHoverService
  ],
  declarations: components
})
export class MavModule { }
