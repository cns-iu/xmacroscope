import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FieldHoverService {
  private hoverEmitter = new EventEmitter<string[]>();
  public readonly hovers = this.hoverEmitter.asObservable();

  constructor() {  }

  startHover(data: string[]): void {
    this.hoverEmitter.emit(data);
  }

  endHover(): void {
    this.hoverEmitter.emit([]);
  }
}
