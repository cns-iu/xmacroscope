import { pick } from 'lodash';
import { Observable } from 'rxjs';
import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';

import { Run } from '../shared/run';
import { RunStreamController } from '../shared/run-stream-controller';


export class GraphQLRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';

  constructor(private runStreamController: RunStreamController, private endpoint: string) {

  }

  asObservable(): Observable<RawChangeSet<Run>> {
    return this.runStreamController.createRunStream();
  }

  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
