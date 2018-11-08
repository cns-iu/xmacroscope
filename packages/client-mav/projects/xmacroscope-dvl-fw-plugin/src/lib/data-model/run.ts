import { Person } from './person';

// @dynamic
export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;

  constructor(data: any = {}) {
    data.person = new Person(data.person || {});
    Object.assign(this, data);
  }
}
