import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonGroupModule } from '../button-group';
import { GVButtonGroupComponent, RemoveUnitsPipe } from './gv-button-group.component';

@NgModule({
  imports: [CommonModule, ButtonGroupModule],
  declarations: [GVButtonGroupComponent, RemoveUnitsPipe],
  exports: [GVButtonGroupComponent],
})
export class GVButtonGroupModule { }
