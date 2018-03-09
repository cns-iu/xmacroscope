/// <reference path="../typings.d.ts" />

import { createWebWorkerLink } from 'apollo-link-webworker';

// import * as GraphqlWorker from 'worker-loader!../worker';
import * as GraphqlWorker from 'worker-loader!../worker.bundle.js';

export function createClientDBLink(): any {
  const worker = new GraphqlWorker();
  return createWebWorkerLink({ worker });
}
