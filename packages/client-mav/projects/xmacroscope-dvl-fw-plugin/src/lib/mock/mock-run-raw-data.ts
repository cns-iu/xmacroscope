import { DefaultRawData } from '@dvl-fw/core';

import { RunFinishedMessage } from '../shared/message';
import { RunMocker } from './run-mocker';


export class MockRunRawData extends DefaultRawData {
  constructor(data: any) {
    super(Object.assign({}, data, {data: {runs: MockRunRawData.generateMockRunData()}}));
  }

  public static generateMockRunData(numMocks = 50): any[] {
    const runs = [];
    const mocker = new RunMocker({ next: (message) => {
      if (message instanceof RunFinishedMessage) {
        const run = (message as RunFinishedMessage).run;
        runs.push(run.toJSON());
      }
    }});
    mocker.sendPastRuns(numMocks);
    return runs;
  }
}
