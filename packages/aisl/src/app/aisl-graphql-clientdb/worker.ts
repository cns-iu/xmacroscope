import { createWorker, handleSubscriptions } from 'apollo-link-webworker';

import { MockRaces } from './shared/mock-races';
import { RxdbDatabaseService } from './shared/rxdb-database.service';

import { schema } from './shared/schema';
import { RxDBGraphQLContext } from './shared/context';
import { pubsub } from './shared/subscriptions';

const context = new RxDBGraphQLContext(null);

const db = new RxdbDatabaseService();
db.get().then((database) => {
  context.db = database;
});
const racer = new MockRaces();

createWorker({
  schema,
  context
});

self.onmessage = message => handleSubscriptions({
  self,
  message,
  schema,
  context,
  pubsub,
});
