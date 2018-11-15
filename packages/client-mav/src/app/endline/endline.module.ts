import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TimerService } from './timer-service/timer.service';
import { DisplayScreenComponent } from './display-screen/display-screen.component';
import { XMacroscopePersonaComponent } from '../shared/components/xmacroscope-persona/xmacroscope-persona.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, DisplayScreenComponent, XMacroscopePersonaComponent],
  providers: [TimerService]
})
export class EndlineModule { }
