import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { List, Map } from 'immutable';

import { IField } from './field';
import { DatumId, Changes, getDatumId } from './changes';

export class StreamCache<T> {
    private subject = new Subject<Changes<T>>();
    private cache = List<DatumId>();
    private idToObjectMap = Map<DatumId, T>();

    constructor(public idField: IField<DatumId>, private stream: Observable<Changes<T>>) {
        stream.subscribe(this.processChanges.bind(this));
    }

    asObservable(): Observable<Changes<T>> {
        return this.subject.asObservable();
    }

    processChanges(changes: Changes<T>) {
        changes.add.forEach((d) => {
            const id = this.idField.get(d);
            if (!this.idToObjectMap.has(id)) {
                this.cache = this.cache.push(id);
                this.idToObjectMap = this.idToObjectMap.set(id, d);
            }
        });
        changes.remove.forEach((d) => {
            const id = this.idField.get(d);
            if (this.idToObjectMap.has(id)) {
                this.cache = this.cache.delete(this.cache.indexOf(id));
                this.idToObjectMap = this.idToObjectMap.delete(id);
            }
        });
        changes.update.forEach(([incomingId, d]) => {
            const id: DatumId = getDatumId(incomingId, this.idField);
            if (this.idToObjectMap.has(id)) {
                const obj: T = Object.assign(this.idToObjectMap.get(id), d);
                this.idToObjectMap = this.idToObjectMap.set(id, obj);
            }
        });
        this.subject.next(changes);
    }

    sendUpdate() {
        this.processChanges(this.getUpdateChange());
    }

    getUpdateChange(): Changes<T> {
        const idMap = this.idToObjectMap;
        const update: [DatumId, T][] = this.cache.map((id) => {
            return [id, idMap.get(id)];
        }).toJS();
        return new Changes<T>([], [], update);
    }
}
