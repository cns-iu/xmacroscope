import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTabsModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [ BrowserAnimationsModule, CommonModule, MatTableModule, MatSidenavModule, MatTabsModule, MatToolbarModule ],
  exports: [ BrowserAnimationsModule, CommonModule, MatTableModule, MatSidenavModule, MatTabsModule, MatToolbarModule ],
  declarations: []
})
export class SharedModule { }
