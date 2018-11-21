import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XMacroscopePersonaComponent } from './components/xmacroscope-persona/xmacroscope-persona.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    XMacroscopePersonaComponent
  ],
  declarations: [XMacroscopePersonaComponent]
})
export class SharedModule { }
