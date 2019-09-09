import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonGroupModule } from './components/button-group';
import { GVButtonGroupModule } from './components/gv-button-group';

@NgModule({
  imports: [
    CommonModule,
    ButtonGroupModule,
    GVButtonGroupModule
  ]
})
export class SharedModule { }
