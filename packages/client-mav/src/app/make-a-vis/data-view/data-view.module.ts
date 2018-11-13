import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, TableComponent]
})
export class DataViewModule { }
