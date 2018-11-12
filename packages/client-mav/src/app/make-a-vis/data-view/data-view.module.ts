import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent]
})
export class DataViewModule { }
