import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Duration, duration } from 'moment';
import 'moment-duration-format'; // Import for side effects

@Component({
  selector: 'aisl-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.sass']
})
export class TimeDisplayComponent implements OnInit {
  @Input() time: Duration | null = null;
  @Input() timeFormat: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  get formattedTime(): string {
    const time = this.time || duration(0);
    const timeFormat = this.timeFormat || 'ss:SS';
    return time.format(timeFormat, {trim: false});
  }

}
