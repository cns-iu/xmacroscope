import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.asBoundedList(this.historySize);
  }

  ngOnInit() { }

  formatMsg(message: Message): string {
    return JSON.stringify(message);
  }
}
