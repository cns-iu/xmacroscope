import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FieldHoverService {
  private hoverEmitter = new EventEmitter<any[]>();
  public readonly hovers = this.hoverEmitter.asObservable();

  constructor() {  }

  startHover(data: any[]): void {
    this.hoverEmitter.emit(data);
  }

  endHover(): void {
    this.hoverEmitter.emit([]);
  }
}
