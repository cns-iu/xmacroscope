import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { List } from 'immutable';

import { Message } from './message';


@Injectable({providedIn: 'root'})
export class MessageService {
  private subject = new Subject<Message>();
  private observable: Observable<Message> = this.subject.asObservable().pipe(share());

  send(message: Message) {
    this.subject.next(message);
  }

  asObservable(): Observable<Message> {
    return this.observable;
  }

  observe(T: new () => Message): Observable<Message> {
    return this.subject.asObservable().pipe(filter((m) => m instanceof T));
  }

  asBoundedList(size: number, T: new () => Message = null): Observable<List<Message>> {
    let messages = List<Message>();
    const observable = T ? this.observe(T) : this.asObservable();
    return observable.pipe(map((message) => {
      messages = messages.withMutations((list) => {
        if (list.size >= size) {
          return list.unshift(message).pop();
        } else {
          return list.unshift(message);
        }
      });
      return messages;
    }));
  }
}
