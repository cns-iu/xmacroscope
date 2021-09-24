import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { PageMenuComponent } from './page-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatDividerModule,
    MatIconModule,

    SharedModule
  ],
  declarations: [PageMenuComponent],
  exports: [PageMenuComponent]
})
export class PageMenuModule { }
