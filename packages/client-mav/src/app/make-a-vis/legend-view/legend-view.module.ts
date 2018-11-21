import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '../drag-drop/drag-drop.module';
import { MainComponent } from './main/main.component';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
