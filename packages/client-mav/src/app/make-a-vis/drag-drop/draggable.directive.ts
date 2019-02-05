import { Directive, HostBinding, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[mavDraggable]'
})
export class DraggableDirective {
  private emitEndEventOnMouseOut = true;
  private touchstartPosition: [number, number];

  @Input() mavDraggable: any; // Data
  @Input() zone = 'any-zone';
  @Input() dropEffect = 'copy';

  constructor(private service: DragDropService, private render: Renderer2, private elementRef: ElementRef) { }

  @HostBinding()
  get draggable(): boolean {
    return true;
  }

  @HostListener('mouseover', [])
  onMouseOver(): void {
    this.emitEndEventOnMouseOut = true;
    this.service.startDrag(this.zone, this.mavDraggable);
  }

  @HostListener('mouseout', [])
  onMouseOut(): void {
    if (this.emitEndEventOnMouseOut) {
      this.service.endDrag(this.zone, this.mavDraggable, true);
    }
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent): void {
    this.service.startDrag(this.zone, this.mavDraggable);
    this.emitEndEventOnMouseOut = false;
    event.dataTransfer.effectAllowed = this.dropEffect;
    event.dataTransfer.setData('text/plain', 'Useless Data');
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event: DragEvent): void {
    this.service.endDrag(this.zone, this.mavDraggable,
      event.dataTransfer.dropEffect === 'none');
  }

  /** Disable Context Menu */
  @HostListener('contextmenu')
  onContextMenu() {
    return false;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent | any): void {
    event.preventDefault();
    this.resetTouchMove();
    const yOffset = this.elementRef.nativeElement.getBoundingClientRect().top + window.scrollY;
    this.touchstartPosition = [event.touches[0].clientX, event.touches[0].clientY - yOffset];
    this.service.startDrag(this.zone, this.mavDraggable);
    this.emitEndEventOnMouseOut = false;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent | any): void {
    if (this.touchstartPosition) {
      const newPosition = [event.touches[0].clientX, event.touches[0].clientY];
      const dxPosition = [newPosition[0] - this.touchstartPosition[0], newPosition[1] - this.touchstartPosition[1]];
      const transform = `translate(${dxPosition[0]}px,${dxPosition[1]}px)`;
      this.render.setStyle(this.elementRef.nativeElement, 'position', 'absolute');
      this.render.setStyle(this.elementRef.nativeElement, 'width', 'min-content');
      this.render.setStyle(this.elementRef.nativeElement, 'opacity', 0.7);
      this.render.setStyle(this.elementRef.nativeElement, 'transform', transform);
    }
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent | any): void {
    event.preventDefault();
    this.resetTouchMove();
    this.service.endDrag(this.zone, this.mavDraggable, this.dropEffect === 'none');
  }

  @HostListener('touchcancel', ['$event'])
  onTouchCancel(event: TouchEvent | any): void {
    event.preventDefault();
    this.resetTouchMove();
    this.emitEndEventOnMouseOut = true;
    this.service.endDrag(this.zone, this.mavDraggable, true);
  }

  private resetTouchMove() {
    this.touchstartPosition = undefined;
    this.render.removeStyle(this.elementRef.nativeElement, 'position');
    this.render.removeStyle(this.elementRef.nativeElement, 'width');
    this.render.removeStyle(this.elementRef.nativeElement, 'opacity');
    this.render.removeStyle(this.elementRef.nativeElement, 'transform');
  }
}
