import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [ BrowserAnimationsModule, CommonModule, MatTableModule,
            MatSidenavModule, MatTabsModule, MatToolbarModule,
            MatGridListModule, MatButtonModule, MatIconModule
          ],
  exports: [ BrowserAnimationsModule, CommonModule, MatTableModule,
             MatSidenavModule, MatTabsModule, MatToolbarModule,
             MatGridListModule, MatButtonModule, MatIconModule
            ],
  declarations: []
})
export class SharedModule { }
