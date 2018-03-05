import { createWebWorkerLink } from 'apollo-link-webworker';

// import * as GraphqlWorker from 'worker-loader!../worker.ts';
import * as GraphqlWorker from 'worker-loader!../worker.bundle.js';
const worker = new GraphqlWorker();

export const link = createWebWorkerLink({ worker });
