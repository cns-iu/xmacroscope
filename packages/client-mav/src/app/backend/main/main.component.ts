import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Message, XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-backend-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  showAppHeader = true;
  messages: Observable<Message[]>;
  private messageCache: Message[] = [];

  constructor(private route: ActivatedRoute, private dataService: XMacroscopeDataService) {
    route.queryParams.subscribe((q) => {
      if ('showAppHeader' in q) {
        this.showAppHeader = q['showAppHeader'] === 'true' ? true : false;
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }

  ngOnInit() {
    this.messages = this.dataService.messages.pipe(
      map<Message, Message[]>(msg => this.accumulate(msg))
    );
  }

  accumulate(message: Message): Message[] {
    this.messageCache.push(message);
    if (this.messageCache.length > this.dataService.runStreamController.historySize) {
      this.messageCache.shift();
    }
    return this.messageCache.concat().reverse();
  }

  formatMsg(message: Message): string {
    let msg = `type: ${message.type}, timestamp: ${message.timestamp.toLocaleString()}`;
    if (message['run']) {
      msg += `,<br>&nbsp;&nbsp;&nbsp;&nbsp;run: ${JSON.stringify(message['run'])}`;
    }
    return msg;
  }
}
