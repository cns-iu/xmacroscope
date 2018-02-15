import { Observable } from 'rxjs/Observable';

import { Changes, DatumId, isDatumId } from './changes';
import { IField } from './field';

export type FieldRefs<T> = {
  [P in keyof T]?: IField<T[P]>;
};

class MappingResult<T> {
  constructor(
    public isComplete: boolean,
    public result: T
  ) { }
}

export class FieldProcessor<T> {
  constructor(
    public stream: Observable<Changes>,
    public fields: FieldRefs<T>,
    public computed: FieldRefs<T> = {}
  ) { }

  asObservable(): Observable<Changes<T>> {
    return this.stream.map((changes: Changes): Changes<T> => {
      const add = this.filterComplete(changes.add.map(
        (item) => this.mapItem(item))) as T[];
      const remove = this.filterComplete(changes.remove.map(
        (item) => this.mapItemOrDatumId(item))) as (T | DatumId)[];
      const update = changes.update.reduce((result, [key, upd]) => {
        const { isComplete, result: newKey } = this.mapItemOrDatumId(key);
        if (isComplete) {
          const newUpdate = this.mapItem(upd);
          result.push([newKey, newUpdate]);
        }

        return result;
      }, []) as [T | DatumId, Partial<T>][];

      return new Changes<T>(add, remove, update);
    });
  }

  private mapItem(item: any): MappingResult<Partial<T>> {
    let isComplete = true;
    const result: Partial<T> = {};

    function setValue(key: any, value: any): void {
      if (value == null) {
        isComplete = false;
      } else {
        result[key] = value;
      }
    }

    Object.entries(this.fields).forEach(([key, field]) => {
      setValue(key, field.get(item));
    });

    Object.entries(this.computed).forEach(([key, field]) => {
      setValue(key, field.get(result));
    });

    return new MappingResult(isComplete, result);
  }

  private mapItemOrDatumId(item: any | DatumId): MappingResult<Partial<T> | DatumId> {
    return isDatumId(item) ? new MappingResult(true, item) : this.mapItem(item);
  }

  private filterComplete<U>(items: MappingResult<U>[]): U[] {
    return items.filter(({ isComplete }) => isComplete).map(({ result }) => result);
  }
}
