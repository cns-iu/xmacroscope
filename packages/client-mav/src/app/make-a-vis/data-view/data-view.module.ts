import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { DragDropModule } from '../drag-drop/drag-drop.module';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatTableModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, TableComponent]
})
export class DataViewModule { }
