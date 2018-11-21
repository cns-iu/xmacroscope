// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GraphicVariable, RecordStream, Visualization } from '@dvl-fw/core';


@Injectable({
  providedIn: 'root'
})
export class UpdateVisService {
  readonly update: Observable<Visualization>;
  private _update = new Subject<Visualization>();

  constructor() {
    this.update = this._update.asObservable();
  }

  updateGraphicSymbol(visualization: Visualization, slot: string, type: string, stream?: RecordStream) {
    this._update.next(visualization);
  }

  updateGraphicVariable(visualization: Visualization, slot: string, id: string, variable: GraphicVariable) {
    visualization.graphicSymbols[slot].graphicVariables[id] = variable;
    this._update.next(visualization);
  }
}
