import { pick } from 'lodash';
import { Observable } from 'rxjs';
import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';

import { Run } from '../shared/run';
import { RunMocker } from './run-mocker';
import { RunFinishedMessage, Message } from '../shared/message';
import { RunStreamController } from '../shared/run-stream-controller';


export class MockRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';
  private mocker: RunMocker;

  constructor(private runStreamController: RunStreamController) {
    this.mocker = new RunMocker({
      next: runStreamController.sendMessage.bind(runStreamController)
    }, this.runStreamController.historySize);
    this.mocker.startMocking();
  }

  asObservable(): Observable<RawChangeSet<Run>> {
    return this.runStreamController.createRunStream();
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
