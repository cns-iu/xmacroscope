import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTabsModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [ CommonModule, MatTableModule, MatSidenavModule, MatTabsModule, MatToolbarModule ],
  exports: [ CommonModule, MatTableModule, MatSidenavModule, MatTabsModule, MatToolbarModule ],
  declarations: []
})
export class SharedModule { }
