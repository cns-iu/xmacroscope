import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { List } from 'immutable';

import { Message } from 'aisl-api';

@Injectable()
export class MessageService {
  private subject = new Subject<Message>();

  send(message: Message) {
    this.subject.next(message);
  }

  asObservable(): Observable<Message> {
    return this.subject.asObservable();
  }

  observe(T: new () => Message): Observable<Message> {
    return this.subject.asObservable().filter((m) => m instanceof T);
  }

  asBoundedList(size: number, T: new () => Message = null): Observable<List<Message>> {
    let messages = List<Message>();
    const observable = T ? this.observe(T) : this.asObservable();
    return observable.map((message) => {
      messages = messages.withMutations((list) => {
        if (list.size >= size) {
          return list.unshift(message).pop();
        } else {
          return list.unshift(message);
        }
      });
      return messages;
    });
  }

  constructor() { }
}
