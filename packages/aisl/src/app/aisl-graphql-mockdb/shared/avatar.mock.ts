import { Avatar } from '../../aisl-backend';
import { AvatarFixtures } from './avatar.fixture';
import { randFromList } from './random';

export function MockAvatar(source: 'fixture' | 'database' = 'fixture', db: any = null): Avatar {
  if (source === 'database' && db) {
    // FIXME: Pull from db
    return <Avatar>randFromList(AvatarFixtures);
  } else {
    return <Avatar>randFromList(AvatarFixtures);
  }
}
