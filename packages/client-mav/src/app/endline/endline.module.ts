import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TimerService } from './timer-service/timer.service';
import { DisplayScreenComponent } from './display-screen/display-screen.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, DisplayScreenComponent],
  providers: [TimerService]
})
export class EndlineModule { }
