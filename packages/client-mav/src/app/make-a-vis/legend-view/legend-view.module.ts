import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '../drag-drop/drag-drop.module';
import { MainComponent } from './main/main.component';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { DvlFwModule } from '@dvl-fw/core';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    DvlFwModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
