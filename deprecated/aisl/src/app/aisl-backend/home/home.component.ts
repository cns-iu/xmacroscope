import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { Message } from 'aisl-api';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'aisl-backend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @Input() historySize = 50;

  messages: Observable<List<Message>>;

  showAppHeader = true;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
    this.messages = this.messageService.asBoundedList(this.historySize);
    route.queryParams.subscribe((q) => {
      if ('showAppHeader' in q) {
        this.showAppHeader = q['showAppHeader'] === 'true' ? true : false;
      } else if (Object.keys(q).length === 0) {
        this.showAppHeader = true;
      }
    });
  }

  ngOnInit() { }

  formatMsg(message: Message): string {
    return JSON.stringify(message);
  }
}
