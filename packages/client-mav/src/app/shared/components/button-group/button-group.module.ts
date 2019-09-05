import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ButtonContentDirective, ButtonGroupComponent, ButtonGroupLabelDirective } from './button-group.component';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  declarations: [ButtonGroupComponent, ButtonContentDirective, ButtonGroupLabelDirective],
  exports: [ButtonGroupComponent, ButtonContentDirective, ButtonGroupLabelDirective]
})
export class ButtonGroupModule { }
