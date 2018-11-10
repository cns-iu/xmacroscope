import * as casual from 'casual-browserify';

import { Avatar } from '../models/avatar';
import { AvatarFixtures } from '../fixtures/avatar.fixture';


export function MockAvatar(source: 'fixture' | 'database' = 'fixture', db: any = null): Avatar {
  if (source === 'database' && db) {
    // FIXME: Pull from db
    return <Avatar>casual.random_element(AvatarFixtures);
  } else {
    return <Avatar>casual.random_element(AvatarFixtures);
  }
}
