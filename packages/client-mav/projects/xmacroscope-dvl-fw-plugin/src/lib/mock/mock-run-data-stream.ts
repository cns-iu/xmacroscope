import { pick } from 'lodash';
import { Observable, Subject } from 'rxjs';
import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';

import { Run } from '../data-model/run';
import { RaceMocker } from './race-mocker';
import { RunCompletedMessage } from '../data-model/message';


export class MockRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';
  numInitialRuns = 50;

  asObservable(): Observable<RawChangeSet<any>> {
    const messages = new Subject<any>();
    const mocker = new RaceMocker({ send: (message) => {
      if (message instanceof RunCompletedMessage) {
        messages.next(RawChangeSet.fromArray([message]));
      }
    }}, this.numInitialRuns);
    mocker.startMocking();
    return messages.asObservable();
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
