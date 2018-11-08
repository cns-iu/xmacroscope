import { DefaultRawData } from '@dvl-fw/core';

import { RunCompletedMessage } from '../data-model/message';
import { RaceMocker } from './race-mocker';


export class MockRunRawData extends DefaultRawData {
  constructor(data: any) {
    super(Object.assign({}, data, {data: {runs: MockRunRawData.generateMockRunData()}}));
  }

  public static generateMockRunData(numMocks = 50): any[] {
    const runs = [];
    const mocker = new RaceMocker({ send: (message) => {
      if (message instanceof RunCompletedMessage) {
        const run = (message as RunCompletedMessage).run;
        runs.push(run.toJSON());
      }
    }});
    mocker.sendPastRuns(numMocks);
    return runs;
  }
}
