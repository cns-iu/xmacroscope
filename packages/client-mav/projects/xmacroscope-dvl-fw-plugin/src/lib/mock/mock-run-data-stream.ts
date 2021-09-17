import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';
import { pick } from 'lodash';
import { Observable } from 'rxjs';

import { Run } from '../shared/run';
import { RunStreamController } from '../shared/run-stream-controller';
import { RunMocker } from './run-mocker';


export class MockRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';
  private mocker: RunMocker;

  constructor(private runStreamController: RunStreamController) {
    this.mocker = new RunMocker({
      next: runStreamController.sendMessage.bind(runStreamController)
    });
    this.mocker.startMocking();
    this.mocker.sendPastRuns(this.runStreamController.historySize);
  }

  asObservable(): Observable<RawChangeSet<Run>> {
    return this.runStreamController.createRunStream();
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
