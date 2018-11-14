import { Component, OnInit } from '@angular/core';

import { XMacroscopeDataService, RunCompletedMessage } from 'xmacroscope-dvl-fw-plugin';

import { Message } from 'projects/xmacroscope-dvl-fw-plugin/src/public_api';
import { TimerService } from '../timer-service/timer.service';
import { Observable } from 'rxjs';
import { duration } from 'moment';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.sass'],
  providers: [XMacroscopeDataService, TimerService],
})
export class DisplayScreenComponent implements OnInit {

  displayFlags: DisplayFlags;
  timerText = '00:00';

  constructor(private dataService: XMacroscopeDataService, private timerService: TimerService) {
    this.displayFlags = {
      displayWaitingText: false,
      displayGetReadyText: false,
      displayGoText: false,
      displayFinishedText: false
    };
    this.dataService.messages.subscribe((msg: Message) => {
      this.handleMessage(msg);
     });
  }

  ngOnInit() {
    this.timerService.getFormattedTimeObservable().subscribe((timeObj) => {
      this.timerText = timeObj;
    });
  }

  handleMessage(msg: Message) {
    if ( msg.type === 'run-signup') {
      this.show('displayWaitingText');
    } else if ( msg.type === 'run-pressed' ) {
      this.show('displayGetReadyText');
    } else if ( msg.type === 'run-initiated' ) {
      this.show('displayGoText');
      this.timerService.start();
    } else if ( msg.type === 'run-completed' ) {
      this.show('displayFinishedText');
      this.timerService.stop();
      this.timerText = this.timerService.formatTime(duration((<RunCompletedMessage>msg).run.timeMillis, 'millisecond'));
    }
  }

  show(type: string) {
    Object.keys(this.displayFlags).forEach(flag => {
      this.displayFlags[flag] = false;
      this.displayFlags[type] = true;
    });
  }

}

interface DisplayFlags {
  displayWaitingText: boolean;
  displayGetReadyText: boolean;
  displayGoText: boolean;
  displayFinishedText: boolean;
}
