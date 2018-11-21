import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { DvlFwModule } from '@dvl-fw/core';

@NgModule({
  imports: [
    CommonModule,
    DvlFwModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
