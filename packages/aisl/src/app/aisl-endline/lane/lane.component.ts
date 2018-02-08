import { Component, Input, OnInit } from '@angular/core';

import { Duration, duration } from 'moment';

import { MessageService } from '../../aisl-backend';
import { RunSelectedMessage, RaceCompletedMessage, RaceResult } from '../../aisl-backend';

@Component({
  selector: 'aisl-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.sass']
})
export class LaneComponent implements OnInit {
  @Input() laneId: number;
  @Input() timeFormat: string | null = null;

  falseStart: boolean = false;
  time?: Duration;

  constructor(private messageService: MessageService) {
    this.messageService.asObservable().subscribe((msg) => {
      if (msg instanceof RunSelectedMessage) {
        this.resetResult();
      } else if (msg instanceof RaceCompletedMessage) {
        const result = msg.results.find((result) => {
          return result.lane == this.laneId;
        });

        if (result !== undefined) {
          this.setResult(result);
        }
      }
    });
  }

  ngOnInit() {
  }

  get available(): boolean {
    return this.time !== undefined;
  }

  private setResult(result: RaceResult): void {
    this.time = duration(result.timeMillis);
    this.falseStart = result.falseStart;
  }

  private resetResult(): void {
    this.time = undefined;
    this.falseStart = false;
  }

}
