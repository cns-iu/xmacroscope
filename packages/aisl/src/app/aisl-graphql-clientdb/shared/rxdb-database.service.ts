import RxDB from 'rxdb';
import { RxDocument } from 'rxdb';
import RxDBValidateModule from 'rxdb/plugins/validate';
import RxDBSchemaCheckModule from 'rxdb/plugins/schema-check';

// import * as DBAdapter from 'pouchdb-adapter-idb';
// const useAdapter = 'idb';

import * as DBAdapter from 'pouchdb-adapter-memory';
const useAdapter = 'memory';

import { RxAislDatabase } from './rxdb-types.d';
import { AvatarSchema } from './avatar.schema';
import { PersonaSchema } from './persona.schema';
import { RunSchema } from './run.schema';
import { Avatar, Persona, Run, FlatRun } from '../../aisl-backend/shared/models';

import { AvatarFixtures } from '../../aisl-graphql-mockdb/shared/avatar.fixture';

import { environment } from '../../shared';

/** Setup RxDB Plugins **/
if (!environment.production) {
  // schema-checks should be used in dev-mode only
  RxDB.plugin(RxDBSchemaCheckModule);
}
RxDB.plugin(RxDBValidateModule);
RxDB.plugin(DBAdapter);

RxDB.QueryChangeDetector.enable(true);
if (!environment.production) {
  RxDB.QueryChangeDetector.enableDebugging();
}
/** END Setup RxDB Plugins **/

async function FlatRunAsRun(rxRun: RxDocument<FlatRun>): Promise<Run> {
  const avatar: Avatar = await rxRun.populate('avatar');
  const persona: Persona = await rxRun.populate('persona');
  const timestamp = new Date(rxRun.timestamp);

  return <Run>{
    avatar, persona, timestamp,
    lane: rxRun.lane,
    started: rxRun.started,
    falseStart: rxRun.falseStart,
    timeMillis: rxRun.timeMillis
  };
}

const collections = [
  {
    name: 'avatar',
    schema: AvatarSchema
  },
  {
    name: 'persona',
    schema: PersonaSchema
  },
  {
    name: 'run',
    schema: RunSchema,
    methods: {
      asRun() {
        return FlatRunAsRun(this);
      }
    },
  }
];

export class RxdbDatabaseService {
  private static dbPromise: Promise<RxAislDatabase> = null;

  collections: any[] = collections;

  private async _create(): Promise<RxAislDatabase> {
    console.log('DatabaseService: creating database..');
    const db: RxAislDatabase = await RxDB.create({
      name: 'aisl',
      adapter: useAdapter
    });
    console.log('DatabaseService: created database');

    // create collections
    console.log('DatabaseService: create collections');
    await Promise.all(this.collections.map(colData => db.collection(colData)));

    await this.initialize(db);

    return db;
  }

  get(): Promise<RxAislDatabase> {
    if (RxdbDatabaseService.dbPromise) {
      return RxdbDatabaseService.dbPromise;
    }

    // create database
    RxdbDatabaseService.dbPromise = this._create();
    return RxdbDatabaseService.dbPromise;
  }

  private async initialize(db: RxAislDatabase) {
    if ((await db.avatar.find().limit(1).exec()).length === 0) {
      await Promise.all(AvatarFixtures.map((avatar) => db.avatar.insert(avatar)));
    }
    const numFixtures = (await db.avatar.find().exec()).length;
    console.log('Fixtures:', numFixtures);
  }
}
