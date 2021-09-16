import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VisualizationPageModule } from './components/visualization-page/visualization-page.module';


@NgModule({
  imports: [
    CommonModule,
    VisualizationPageModule,
  ],
  declarations: [
  ],
  exports: [
    VisualizationPageModule
  ]
})
export class SharedModule { }