import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuIconModule } from './components/menu-icon/menu-icon.module';
import { VisualizationPageModule } from './components/visualization-page/visualization-page.module';


@NgModule({
  imports: [
    CommonModule,
    MenuIconModule,
    VisualizationPageModule,
  ],
  declarations: [
  ],
  exports: [
    MenuIconModule,
    VisualizationPageModule
  ]
})
export class SharedModule { }
