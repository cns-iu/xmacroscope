import { Component, OnInit } from '@angular/core';
import { duration } from 'moment';

import { Message, XMacroscopeDataService, RunStartedMessage, RunFinishedMessage, SignupFinishedMessage } from 'xmacroscope-dvl-fw-plugin';
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
  isPersonaSet = false;
  personaBackgroundSize = {width: 420, height: 420};
  personaShapeSize = 25000;
  personaBackgroundRadius = 200;

  constructor(private dataService: XMacroscopeDataService, private timerService: TimerService) {}

  ngOnInit() {
    this.dataService.messages.subscribe((msg: Message) => {
      this.handleMessage(msg);
     });
    this.timerService.getFormattedTimeObservable().subscribe((timerText) => {
      this.timerText = timerText;
    });
  }

  handleMessage(msg: Message) {
    if (!this.isPersonaSet && msg instanceof SignupFinishedMessage) {
      this.createPersona(<SignupFinishedMessage>msg);
      this.isPersonaSet = true;
    }
    this.lastMessage = msg;
    if (msg instanceof RunStartedMessage) {
      this.timerService.start();
    } else if (msg instanceof RunFinishedMessage) {
      this.timerService.stop();
      this.isPersonaSet = false;
      this.timerText = this.timerService.formatTime(duration((<RunFinishedMessage>msg).run.timeMillis, 'millisecond'));
    }
  }

  createPersona(msg: SignupFinishedMessage) {
    if (msg && msg.run && msg.run.person) {
      const personAttributes = msg.run.person;
      this.personaColor = personAttributes.color;
      this.personaShape =  personAttributes.icon;
    }
  }
}
