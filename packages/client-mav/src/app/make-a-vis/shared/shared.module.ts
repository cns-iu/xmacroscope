import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '../drag-drop/drag-drop.module';
import { DataVariableDropzoneComponent} from './components/data-variable-dropzone/data-variable-dropzone.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    DataVariableDropzoneComponent
  ],
  declarations: [DataVariableDropzoneComponent]
})
export class SharedModule { }
