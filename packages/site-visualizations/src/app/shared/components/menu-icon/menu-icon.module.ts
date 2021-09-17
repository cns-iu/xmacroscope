import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuIconComponent } from './menu-icon.component';


@NgModule({
  imports: [CommonModule],
  declarations: [MenuIconComponent],
  exports: [MenuIconComponent]
})
export class MenuIconModule { }