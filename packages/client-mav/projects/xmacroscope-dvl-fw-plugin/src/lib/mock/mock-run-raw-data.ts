import { DefaultRawData, DefaultRawDataArg } from '@dvl-fw/core';

import { RunFinishedMessage } from '../shared/message';
import { RunMocker } from './run-mocker';


export class MockRunRawData extends DefaultRawData {
  static generateMockRunData(numMocks = 50): unknown[] {
    const runs: unknown[] = [];
    const mocker = new RunMocker({
      next: (message) => {
        if (message instanceof RunFinishedMessage) {
          const run = (message).run;
          runs.push(run.toJSON());
        }
      }
    });
    mocker.sendPastRuns(numMocks);
    return runs;
  }

  constructor(data: DefaultRawDataArg) {
    super({
      ...data,
      data: { runs: MockRunRawData.generateMockRunData() }
    });
  }
}
