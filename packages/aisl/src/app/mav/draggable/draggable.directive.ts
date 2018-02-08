import { Input, HostListener, Directive, HostBinding } from '@angular/core';
import { DragService } from '../shared/drag.service';
@Directive({
  selector: '[mavDraggable]'
})
export class DraggableDirective {
  constructor(private dragService: DragService) {
  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set mavDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }

  private options: DraggableOptions = {};

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const zone = 'zone', data = this.options;
    this.dragService.startDrag(zone);
    event.dataTransfer.setData('Object', JSON.stringify(data));
  }
}
export interface DraggableOptions {
  zone?: string;
  data?: any;
}
