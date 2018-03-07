import { Observable } from 'rxjs/Observable';
import { Changes } from '@ngx-dino/core';
import { List } from 'immutable';
import { RaceCompletedMessage, Message, RaceResult } from '../../aisl-backend';

export class ChangeTracker {
    private readonly mappedStream: Observable<Changes>;
    private accumulator: List<RaceCompletedMessage> = List();

    constructor(
        private readonly stream: Observable<Message>,
        public readonly count: number) {
        this.mappedStream = stream.filter((message: Message) => {
            return message instanceof RaceCompletedMessage;
        }).scan((self: ChangeTracker, message: RaceCompletedMessage) => {
            self.accumulateMessage(message);
            return self;
        }, this).map(() => {
            return this.convertMessagesToChanges();
        });
    }

    asObservable(): Observable<Changes> {
        return this.mappedStream;
    }

    private accumulateMessage(message: RaceCompletedMessage): void {
        const maxCount = this.count + 1;
        const currentCount = this.accumulator.size;
        message.results.forEach((r) => {
            r['avatar'] = message.avatar;
            r['raceTimestamp'] = message.timestamp.getTime();
        });

        if (currentCount === maxCount) {
            this.accumulator = this.accumulator.shift();
        }

        this.accumulator = this.accumulator.push(message);
    }

    private convertMessagesToChanges(): Changes {
        const currentCount = this.accumulator.size;
        let removed: RaceResult[] = [];

        if (currentCount > this.count) {
            removed = this.accumulator.first().results;
        }

        return new Changes(this.accumulator.last().results, removed);
    }
}
