import { Directive, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { DragDropEvent } from './events';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[mavDroppable]'
})
export class DroppableDirective implements OnDestroy {
  private _zones: string[] = ['any-zone'];
  private acceptsCurrentDrop = false;
  private eventSubscription: Subscription;

  @Input()
  set zones(zone: string | string[]) {
    this._zones = typeof zone === 'string' ? [zone] : zone;
  }
  @Input() acceptsDrop: (data: any) => boolean = (() => true);

  @Output() mavDroppable = new EventEmitter<any>();
  @Output() dragDropEvents: Observable<DragDropEvent>;

  constructor(private service: DragDropService) {
    this.dragDropEvents = service.events.map((event: DragDropEvent) => {
      if (event.type === 'drag-start') {
        this.acceptsCurrentDrop = (this._zones.includes(event.zone) &&
          this.acceptsDrop(event.data));

        return Object.assign({}, event, {accepted: this.acceptsCurrentDrop});
      }

      return event;
    });

    // Events must be observed so that acceptsCurrentDrop become set.
    this.eventSubscription = this.dragDropEvents.subscribe(() => undefined);
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): boolean {
    return !this.acceptsCurrentDrop;
  }

  @HostListener('drop')
  onDrop(): boolean {
    this.mavDroppable.emit(this.service.currentItem);
    return false;
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
