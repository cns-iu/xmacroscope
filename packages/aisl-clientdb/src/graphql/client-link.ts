/// <reference path="../typings.d.ts" />

import { createWebWorkerLink } from 'apollo-link-webworker';

// import * as GraphqlWorker from 'worker-loader!../worker';
import * as GraphqlWorker from 'worker-loader!../worker.bundle.js';
const worker = new GraphqlWorker();

export const link = createWebWorkerLink({ worker });
