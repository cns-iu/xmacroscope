import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ButtonGroupModule } from '../button-group';
import { GVButtonGroupComponent, RemoveUnitsPipe } from './gv-button-group.component';

@NgModule({
  imports: [CommonModule, MatIconModule, ButtonGroupModule],
  declarations: [GVButtonGroupComponent, RemoveUnitsPipe],
  exports: [GVButtonGroupComponent],
})
export class GVButtonGroupModule { }
