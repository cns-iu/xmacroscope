import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [ BrowserAnimationsModule, CommonModule, MatTableModule,
            MatSidenavModule, MatTabsModule, MatToolbarModule,
            MatGridListModule, MatButtonModule
          ],
  exports: [ BrowserAnimationsModule, CommonModule, MatTableModule,
             MatSidenavModule, MatTabsModule, MatToolbarModule,
             MatGridListModule, MatButtonModule
            ],
  declarations: []
})
export class SharedModule { }
