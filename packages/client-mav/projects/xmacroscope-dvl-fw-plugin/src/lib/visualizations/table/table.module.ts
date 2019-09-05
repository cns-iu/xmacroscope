import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [TableComponent],
  entryComponents: [TableComponent]
})
export class TableModule { }
