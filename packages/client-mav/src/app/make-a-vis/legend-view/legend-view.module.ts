import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvlFwModule } from '@dvl-fw/core';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    DvlFwModule,
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
