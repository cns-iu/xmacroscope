import { RxAislDatabase } from '../rxdb/rxdb-types';
import { getClientDatabase } from '../rxdb/client-database';

export class RxDBGraphQLContext {
  constructor(public db: RxAislDatabase = null) {
    if (!db) {
      getClientDatabase().then((database) => {
        this.db = database;
      });
    }
  }
}

export const context = new RxDBGraphQLContext();
