import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Duration, duration } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;
import * as durationInit from 'moment-duration-format';
durationInit(moment);

import { Timer } from './timer';

@Injectable()
export class TimerService {

  timer: Timer;
  constructor() {
    this.timer = new Timer();
  }

  getTimer(): Timer {
    return this.timer;
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }
  getFormattedTimeObservable(timeFormat = 'ss:SS'): Observable<string> {
    const timerObs: Observable<Duration> = this.getTimer().asObservable();
    return timerObs.pipe(map((time) => this.formatTime(time)));
  }

  formatTime(time: Duration, timeFormat = 'ss:SS'): string {
    return (<unknown>duration(time, 'millisecond')).format(timeFormat, { trim: false });
  }
}
