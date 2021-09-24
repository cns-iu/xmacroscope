import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxVegaModule } from 'ngx-vega';

import { VisualizationPageComponent } from './visualization-page.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    NgxVegaModule,
    MatProgressSpinnerModule
  ],
  declarations: [VisualizationPageComponent],
  exports: [VisualizationPageComponent]
})
export class VisualizationPageModule { }
