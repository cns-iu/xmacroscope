import { pick } from 'lodash';
import { Observable, Subject } from 'rxjs';
import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';

import { Run } from '../shared/run';
import { RunMocker } from './run-mocker';
import { RunCompletedMessage, Message } from '../shared/message';
import { RunStreamController } from '../shared/run-stream-controller';


export class MockRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';
  private mocker: RunMocker;

  constructor(private runStreamController: RunStreamController) {
    this.mocker = new RunMocker({
      next: runStreamController.sendMessage.bind(runStreamController)
    }, this.runStreamController.historySize);
  }

  asObservable(): Observable<RawChangeSet<Run>> {
    this.mocker.startMocking();
    return this.runStreamController.runStream;
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
