import { pick } from 'lodash';
import { Observable } from 'rxjs';

import { RecordStream } from '@dvl-fw/core';
import { RawChangeSet } from '@ngx-dino/core';
import { Run } from './data-model/run';


export class GraphQLRunDataStream implements RecordStream<Run> {
  id = 'runs';
  label = 'Runs';

  constructor(private endpoint: string) {

  }

  asObservable(): Observable<RawChangeSet<Run>> {
    throw new Error('Method not implemented.');
  }
  toJSON(): any {
    return pick(this, ['id', 'label']);
  }
}
