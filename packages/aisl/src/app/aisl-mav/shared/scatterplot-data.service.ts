import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { List } from 'immutable';

import { IField, Changes } from '@ngx-dino/core';
import { Message, RaceCompletedMessage, RaceResult } from 'aisl-api';

import { MessageService } from '../../aisl-backend';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class ScatterPlotDataService {
  readonly dataStream: Observable<Changes<any>>;

  constructor(private messageService: MessageService) {
    this.dataStream = new ChangeTracker(messageService.asObservable(), 200, 4).asObservable();
  }
}
