import { Injectable } from '@angular/core';
import moment, { Duration, duration } from 'moment';
import durationInit from 'moment-duration-format';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Timer } from './timer';

durationInit(moment);

@Injectable()
export class TimerService {
  timer: Timer;

  constructor() {
    this.timer = new Timer();
  }

  getTimer(): Timer {
    return this.timer;
  }

  start(): void {
    this.timer.start();
  }

  stop(): void {
    this.timer.stop();
  }

  getFormattedTimeObservable(_timeFormat = 'ss:SS'): Observable<string> {
    const timerObs: Observable<Duration> = this.getTimer().asObservable();
    return timerObs.pipe(map((time) => this.formatTime(time)));
  }

  formatTime(time: Duration, timeFormat = 'ss:SS'): string {
    return duration(time, 'millisecond').format(timeFormat, { trim: false });
  }
}
