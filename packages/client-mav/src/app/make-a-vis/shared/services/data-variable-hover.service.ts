import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataVariableHoverService {
  private hoverEmitter = new EventEmitter<string>();
  public readonly hovers = this.hoverEmitter.asObservable();

  constructor() { }

  startHover(data: string): void {
    this.hoverEmitter.emit(data);
  }

  endHover(): void {
    this.hoverEmitter.emit(undefined);
  }
}
