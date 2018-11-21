import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '../drag-drop/drag-drop.module';
import { MainComponent } from './main/main.component';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { DvlFwModule } from '@dvl-fw/core';
import { DataVariableDropzoneComponent } from './data-variable-dropzone/data-variable-dropzone.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    DvlFwModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent, DataVariableDropzoneComponent]
})
export class LegendViewModule { }
