import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RawChangeSet } from '@ngx-dino/core';

import { MessageService } from '../../aisl-backend';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class SharedDataService {
  readonly dataStream: Observable<RawChangeSet<any>>;
  historySize = 50; // TODO
  highlightCount = 4; // TODO

  constructor(private messageService: MessageService) {
    this.dataStream = new ChangeTracker(
      messageService.asObservable(), this.historySize, this.highlightCount
    ).asObservable();
  }
}
