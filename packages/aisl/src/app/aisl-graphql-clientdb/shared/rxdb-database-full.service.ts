// UNUSED version that has all the fun bits of RxDB and PouchDB

import RxDB from 'rxdb';
import { RxDocument } from 'rxdb';

import * as LocalStorageAdapter from 'pouchdb-adapter-localstorage';
import * as WebSQLAdapter from 'pouchdb-adapter-websql';
import * as IdbAdapter from 'pouchdb-adapter-idb';
import * as MemoryAdapter from 'pouchdb-adapter-memory';
import * as HttpAdapter from 'pouchdb-adapter-http';

import { RxAislDatabase } from './rxdb-types.d';

import { AvatarSchema } from './avatar.schema';
import { PersonaSchema } from './persona.schema';
import { RunSchema } from './run.schema';

import { Avatar, Persona, Run, FlatRun } from '../../aisl-backend';

import { environment } from '../../shared';

/** Setup RxDB Plugins **/
import RxDBSchemaCheckModule from 'rxdb/plugins/schema-check';
if (!environment.production) {
  // schema-checks should be used in dev-mode only
  RxDB.plugin(RxDBSchemaCheckModule);
}

import RxDBValidateModule from 'rxdb/plugins/validate';
RxDB.plugin(RxDBValidateModule);
import RxDBLeaderElectionModule from 'rxdb/plugins/leader-election';
RxDB.plugin(RxDBLeaderElectionModule);

import RxDBReplicationModule from 'rxdb/plugins/replication';

RxDB.plugin(RxDBReplicationModule);
// always needed for replication with the node-server
RxDB.plugin(HttpAdapter);

const adapters = {
  localstorage: LocalStorageAdapter,
  websql: WebSQLAdapter,
  idb: IdbAdapter,
  memory: MemoryAdapter
};

const useAdapter = 'idb';
RxDB.plugin(adapters[useAdapter]);

RxDB.QueryChangeDetector.enable(true);

if (!environment.production) {
  RxDB.QueryChangeDetector.enableDebugging();
}

/** END Setup RxDB Plugins **/



// Disable sync with remote pouchdb
// console.log('hostname: ' + window.location.hostname);
// const syncURL = 'http://' + window.location.hostname + ':10101/';
const syncURL = 'http://localhost:10101/';
// const doSync = window.location.hash !== '#nosync';
const doSync = false;

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
    schema: AvatarSchema,
    sync: doSync
  },
  {
    name: 'persona',
    schema: PersonaSchema,
    sync: doSync
  },
  {
    name: 'run',
    schema: RunSchema,
    sync: doSync,
    methods: {
      asRun() {
        return FlatRunAsRun(this);
      }
    },
  }
];

export class RxdbDatabaseService {
  private dbPromise: Promise<RxAislDatabase> = null;

  collections: any[] = collections;

  private async _create(): Promise<RxAislDatabase> {
    console.log('DatabaseService: creating database..');
    const db: RxAislDatabase = await RxDB.create({
      name: 'aisl',
      adapter: useAdapter,
      // password: 'myLongAndStupidPassword' // no password needed
    });
    console.log('DatabaseService: created database');
    // window['db'] = db; // write to window for debugging
    // show leadership in title
    db.waitForLeadership()
      .then(() => {
        console.log('isLeader now');
        // document.title = '♛ ' + document.title;
      });

    // create collections
    console.log('DatabaseService: create collections');
    await Promise.all(this.collections.map(colData => db.collection(colData)));

    // sync
    console.log('DatabaseService: sync');
    collections
      .filter(col => col.sync)
      .map(col => col.name)
      .forEach(colName => db[colName].sync({ remote: syncURL + colName + '/' }));

    return db;
  }

  get(): Promise<RxAislDatabase> {
    if (this.dbPromise) {
      return this.dbPromise;
    }

    // create database
    this.dbPromise = this._create();
    return this.dbPromise;
  }
}
