import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/takeUntil';

import { RawChangeSet } from '@ngx-dino/core';

import { MessageService } from '../../aisl-backend';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class SharedDataService {
  private readonly emitter = new Subject<RawChangeSet>();
  private readonly stopper = new Subject<any>();
  private readonly dataStream: Observable<RawChangeSet>;
  historySize = 50; // TODO
  highlightCount = 4; // TODO

  constructor(private messageService: MessageService) {
    this.dataStream = new ChangeTracker(
      messageService.asObservable(), this.historySize, this.highlightCount
    ).asObservable().share();
  }

  createStream() {
    const stopStream = Observable.merge(this.dataStream.last(), this.stopper);
    const stoppableStream = this.dataStream.takeUntil(stopStream);
    return Observable.merge(stoppableStream, this.emitter);
  }

  emit(change: RawChangeSet): void {
    this.emitter.next(change);
  }

  stop() {
    this.stopper.next('stop');
  }
}
