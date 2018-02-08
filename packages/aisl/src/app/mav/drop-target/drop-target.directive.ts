import {
  Output,
  EventEmitter,
  Input,
  HostListener,
  Directive,
  HostBinding
} from '@angular/core';

import { DragService } from '../shared/drag.service';

@Directive({
  selector: '[mavDropTarget]'
})
export class DropTargetDirective {
  constructor(private dragService: DragService) {
  }

  @Input()
  set mavDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output('mavDrop') drop = new EventEmitter();

  private options: DropTargetOptions = {};

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data = JSON.parse(event.dataTransfer.getData('Object'));
    this.drop.next(data);
  }
}
export interface DropTargetOptions {
  zone?: string;
}
