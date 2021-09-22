import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DvlFwAngularModule } from '@dvl-fw/angular';
import { ButtonGroupModule } from 'src/app/shared/components/button-group';

import { GraphicVariableLegendComponent } from './graphic-variable-legend/graphic-variable-legend.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    DvlFwAngularModule,
    ButtonGroupModule,
    MatIconModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, GraphicVariableLegendComponent]
})
export class LegendViewModule { }
