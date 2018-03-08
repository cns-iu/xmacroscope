import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Changes } from '@ngx-dino/core';

import { MessageService } from '../../aisl-backend';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class GeomapDataService {
  readonly stateDataStream: Observable<Changes>;
  readonly pointDataStream: Observable<Changes>;

  constructor(private messageService: MessageService) {
    this.stateDataStream = new ChangeTracker(messageService.asObservable(), 200, 400).asObservable();

    this.pointDataStream = new ChangeTracker(messageService.asObservable(), 200, 400).asObservable();
  }
}
