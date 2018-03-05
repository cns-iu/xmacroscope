import { Avatar, Persona, Run, FlatRun } from '../../aisl-backend/shared/models';

import { RxDocument, RxCollection, RxDatabase } from 'rxdb';
import { Observable } from 'rxjs/Observable';

export type RxAvatarDocument = RxDocument<Avatar>;
export type RxPersonaDocument = RxDocument<Persona>;
export type RxRunDocument = RxDocument<FlatRun>;

declare class RxAvatarCollection extends RxCollection<Avatar> { }
declare class RxPersonaCollection extends RxCollection<Persona> { }
declare class RxRunCollection extends RxCollection<FlatRun> { }

export class RxAislDatabase extends RxDatabase {
  avatar?: RxAvatarCollection;
  persona?: RxPersonaCollection;
  run?: RxRunCollection;
}
