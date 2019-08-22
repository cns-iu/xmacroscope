import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonGroupModule } from './components/button-group/button-group.module';
import { XMacroscopePersonaComponent } from './components/xmacroscope-persona/xmacroscope-persona.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonGroupModule
  ],
  declarations: [
    XMacroscopePersonaComponent
  ],
  exports: [
    XMacroscopePersonaComponent
  ]
})
export class SharedModule { }
