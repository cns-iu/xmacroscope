import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { HomeComponent } from './home/home.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerService } from './shared/timer.service';
import { LaneComponent } from './lane/lane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TimeDisplayComponent, HomeComponent
  ],
  declarations: [TimeDisplayComponent, HomeComponent, TimerDisplayComponent, LaneComponent],
  providers: [TimerService]
})
export class AislEndlineModule { }
