import { Component, OnInit } from '@angular/core';
import { duration } from 'moment';

import { Message, XMacroscopeDataService, RunStartedMessage, RunFinishedMessage, SignupStartedMessage } from 'xmacroscope-dvl-fw-plugin';
import { TimerService } from '../timer-service/timer.service';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.sass'],
  providers: [XMacroscopeDataService, TimerService],
})
export class DisplayScreenComponent implements OnInit {
  lastMessage: Message;
  timerText = '00:00';
  personaColor = '#000';
  personaShape = 'circle';
  personaBackgroundSize = {width: 420, height: 420};
  personaShapeSize = 25000;
  personaBackgroundRadius = 200;

  constructor(private dataService: XMacroscopeDataService, private timerService: TimerService) {}

  ngOnInit() {
    let timeoutHandle: any; // used to store setTimeout Id to clear it when a new message arrives.
    this.dataService.messages.subscribe((msg: Message) => {
      // clearing a timeout if it had been set earlier.
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
        timeoutHandle = null;
      }
      this.handleMessage(msg);
      /*
       * If a RunFinishedMessage does not arrive, the screen is tricked to
       * show 'Waiting for Runner' text.
       * To do this, a timeout is fetched from the environment and when the timeout expires,
       * a SignupStartedMessage is simulated, this ends the timer and displays
       * 'Waiting for Runner' text.
       */
      if (msg instanceof RunStartedMessage) {
        timeoutHandle = setTimeout(() => {
          this.timerService.stop();
          this.handleMessage(this.createDummySignupStartedMessage());
        }, this.dataService.config.runTimout);
      }
     });
    this.timerService.getFormattedTimeObservable().subscribe((timerText) => {
      this.timerText = timerText;
    });
  }

  handleMessage(msg: Message) {
    this.updatePersona(msg);
    this.lastMessage = msg;
    if (msg instanceof RunStartedMessage) {
      this.timerService.start();
    } else if (msg instanceof RunFinishedMessage) {
      this.timerService.stop();
      this.timerText = this.timerService.formatTime(duration(msg.run.timeMillis, 'millisecond'));
    }
  }

  updatePersona(msg: Message) {
    if (msg && msg.run && msg.run.person) {
      const personAttributes = msg.run.person;
      this.personaColor = personAttributes.color;
      this.personaShape =  personAttributes.icon;
    }
  }

  createDummySignupStartedMessage(): SignupStartedMessage {
    return new SignupStartedMessage();
  }
}
