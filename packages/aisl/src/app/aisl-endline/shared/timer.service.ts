import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Duration, duration } from 'moment';

import { MessageService } from '../../aisl-backend';
import { RunSelectedMessage, RaceInitiatedMessage, RaceCompletedMessage } from '../../aisl-backend';
import { Timer } from './timer';

@Injectable()
export class TimerService {

  constructor(private messageService: MessageService) { }

  asObservable(): Observable<Duration> {
    const timer = new Timer();
    const messageObservable = this.messageService.asObservable();

    messageObservable.subscribe((msg) => {
      if (msg instanceof RunSelectedMessage) {
        timer.stop();
      } else if (msg instanceof RaceInitiatedMessage) {
        timer.start();
      } else if (msg instanceof RaceCompletedMessage) {
        timer.pause();
      }
    });

    return timer.asObservable();
  }

}
