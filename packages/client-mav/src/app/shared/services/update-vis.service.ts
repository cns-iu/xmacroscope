import { Injectable } from '@angular/core';
import { GraphicVariable, RecordStream, Visualization } from '@dvl-fw/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateVisService {
  readonly update: Observable<Visualization>;
  private _update = new Subject<Visualization>();

  constructor() {
    this.update = this._update.asObservable();
  }

  triggerUpdate(visualization: Visualization): void {
    this._update.next(visualization);
  }

  updateGraphicSymbol(visualization: Visualization, _slot: string, _type: string, _stream?: RecordStream): void {
    this._update.next(visualization);
  }

  updateGraphicVariable(visualization: Visualization, slot: string, id: string, variable: GraphicVariable): void {
    visualization.graphicSymbols[slot].graphicVariables[id] = variable;
    this._update.next(visualization);
  }
}
