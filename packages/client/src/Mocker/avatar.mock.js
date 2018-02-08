import { AvatarFixtures } from './avatar.fixture';
import { casual } from './casual';

export function MockAvatar() {
  return casual.random_element(AvatarFixtures);
}
