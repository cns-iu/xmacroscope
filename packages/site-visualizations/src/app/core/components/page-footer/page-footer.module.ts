import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { PageFooterComponent } from './page-footer.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule
  ],
  declarations: [PageFooterComponent],
  exports: [PageFooterComponent],
})
export class PageFooterModule { }
