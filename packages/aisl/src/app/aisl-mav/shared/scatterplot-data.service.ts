import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RawChangeSet } from '@ngx-dino/core';

import { MessageService } from '../../aisl-backend';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class ScatterPlotDataService {
  readonly dataStream: Observable<RawChangeSet<any>>;

  constructor(private messageService: MessageService) {
    this.dataStream = new ChangeTracker(messageService.asObservable(), 200, 4).asObservable();
  }
}
