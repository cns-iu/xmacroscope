import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvlFwModule } from '@dvl-fw/core';
import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { MainComponent } from './main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonGroupModule } from 'src/app/shared/components/button-group';

@NgModule({
  imports: [
    CommonModule,
    DvlFwModule,
    ButtonGroupModule,
    MatIconModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
