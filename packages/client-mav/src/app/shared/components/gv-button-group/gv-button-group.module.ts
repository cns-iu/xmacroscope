import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonGroupModule } from '../button-group';
import { GVButtonGroupComponent } from './gv-button-group.component';

@NgModule({
  imports: [CommonModule, ButtonGroupModule],
  declarations: [GVButtonGroupComponent],
  exports: [GVButtonGroupComponent],
})
export class GVButtonGroupModule { }
