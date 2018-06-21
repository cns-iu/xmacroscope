import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RawChangeSet } from '@ngx-dino/core';

import { MessageService } from '../../aisl-backend';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class GeomapDataService {
  readonly stateDataStream: Observable<RawChangeSet>;
  readonly pointDataStream: Observable<RawChangeSet>;

  constructor(private messageService: MessageService) {
    this.stateDataStream = new ChangeTracker(messageService.asObservable(), 200, 4).asObservable();

    this.pointDataStream = new ChangeTracker(messageService.asObservable(), 200, 4).asObservable();
  }
}
