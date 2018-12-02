import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvlFwModule } from '@dvl-fw/core';
import { DragDropModule } from '../drag-drop/drag-drop.module';
import { SharedModule } from '../shared/shared.module';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    DvlFwModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
