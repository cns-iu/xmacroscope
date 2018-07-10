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
  readonly dataStream: Observable<RawChangeSet<any>>;
  historySize = 50; // TODO
  highlightCount = 4; // TODO

  constructor(private messageService: MessageService) {
    const origStream = new ChangeTracker(
      messageService.asObservable(), this.historySize, this.highlightCount
    ).asObservable().share();
    const mergedStream = Observable.merge(origStream, this.emitter);
    this.dataStream = mergedStream.takeUntil(origStream.last());
  }

  emit(change: RawChangeSet): void {
    this.emitter.next(change);
  }
}
