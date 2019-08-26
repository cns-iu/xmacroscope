import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonGroupModule } from './components/button-group';
import { GVButtonGroupModule } from './components/gv-button-group';
import { XMacroscopePersonaComponent } from './components/xmacroscope-persona/xmacroscope-persona.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonGroupModule,
    GVButtonGroupModule
  ],
  declarations: [
    XMacroscopePersonaComponent
  ],
  exports: [
    XMacroscopePersonaComponent
  ]
})
export class SharedModule { }
