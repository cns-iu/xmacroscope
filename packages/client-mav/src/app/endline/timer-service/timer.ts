import { Observable, Subject, interval, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import * as moment from 'moment';
import { Duration, duration } from 'moment';

export class Timer {
  private readonly ticker: Observable<Duration>;
  private readonly eventEmiter: Subject<Duration>;
  private readonly combinedObserver: Observable<Duration>;
  private running = false;
  private startTime?: number;

  constructor(private accumulator: number = 0, readonly granularity = 70) {
    this.ticker = interval(granularity).pipe(
      filter(() => this.isRunning)).pipe(
      map(() => duration(this.accumulator + this.timeDifference())));


    this.eventEmiter = new Subject<Duration>();
    this.combinedObserver = merge(this.ticker, this.eventEmiter);
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

  reset(offset = 0): void {
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

  private emit(dur: number): void {
    this.eventEmiter.next(duration(dur));
  }
}
