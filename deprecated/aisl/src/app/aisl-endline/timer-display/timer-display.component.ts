import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Duration, duration } from 'moment';

import { TimerService } from '../shared/timer.service';

@Component({
  selector: 'aisl-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.sass']
})
export class TimerDisplayComponent implements OnInit {
  @Input() timerFormat: string = 'ss:SS';

  currentTime: Observable<Duration>;

  constructor(private timerService: TimerService) {
    this.currentTime = this.timerService.asObservable();
  }

  ngOnInit() {
  }

}
