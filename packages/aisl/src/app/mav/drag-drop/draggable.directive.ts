import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[mavDraggable]'
})
export class DraggableDirective {
  @Input() mavDraggable: any; // Data
  @Input() zone = 'any-zone';
  @Input() dropEffect = 'copy';

  constructor(private service: DragDropService) { }

  @HostBinding()
  get draggable(): boolean {
    return true;
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent): void {
    event.dataTransfer.effectAllowed = this.dropEffect;
    this.service.startDrag(this.zone, this.mavDraggable);
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: DragEvent): void {
    this.service.endDrag(this.zone, this.mavDraggable,
      event.dataTransfer.dropEffect === 'none');
  }
}
