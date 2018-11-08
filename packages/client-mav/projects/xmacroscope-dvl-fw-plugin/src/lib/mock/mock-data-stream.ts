import { pick } from 'lodash';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';
import { Run } from '../data-model/run';
import { RaceMocker } from './race-mocker';



export class MockRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';
  numInitialRuns = 50;

  asObservable(): Observable<RawChangeSet<any>> {
    const messagesubject = new Subject<any>();
    const mocker = new RaceMocker({ send: (message) => messagesubject.next(message) }, this.numInitialRuns);
    mocker.startMocking();
    return messagesubject.asObservable();
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
