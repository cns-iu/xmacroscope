import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import * as moment from 'moment';
import { Duration, duration } from 'moment';

export class Timer {
  private readonly ticker: Observable<Duration>;
  private readonly eventEmiter: Subject<Duration>;
  private readonly combinedObserver: Observable<Duration>;
  private running: boolean = false;
  private startTime?: number;

  constructor(private accumulator: number = 0, readonly granularity = 70) {
    this.ticker = Observable.interval(granularity)
        .filter(() => this.isRunning)
        .map(() => {
          return duration(this.accumulator + this.timeDifference());
        });

    this.eventEmiter = new Subject<Duration>();
    this.combinedObserver = Observable.merge(this.ticker, this.eventEmiter);
  }

  get isRunning(): boolean {
    return this.running;
  }

  start(): void {
    this.setStartTime();
    this.setRunning();
  }

  stop(): void {
    this.clearRunning();
    this.clearStartTime();
    this.accumulator = 0;
    this.emit(0);
  }

  pause(): void {
    this.clearRunning();
    this.accumulator += this.timeDifference();
    this.clearStartTime();
    this.emit(this.accumulator);
  }

  reset(offset: number = 0): void {
    this.setStartTime();
    this.accumulator = offset;
    this.emit(offset);
  }

  asObservable(): Observable<Duration> {
    return this.combinedObserver;
  }

  private setRunning(): void {
    this.running = true;
  }

  private clearRunning(): void {
    this.running = false;
  }

  private setStartTime(): void {
    this.startTime = +moment();
  }

  private clearStartTime(): void {
    this.startTime = undefined;
  }

  private timeDifference(): number {
    return this.startTime ? +moment() - this.startTime : 0;
  }

  private emit(dur: number) {
    this.eventEmiter.next(duration(dur));
  }

}
