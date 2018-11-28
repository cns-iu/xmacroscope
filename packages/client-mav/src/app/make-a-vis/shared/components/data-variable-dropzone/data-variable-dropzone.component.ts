import { Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { DataVariable,  GraphicVariable, GraphicVariableOption, RecordStream } from '@dvl-fw/core';
import { Observable } from 'rxjs';

import { DataVariableHoverService } from '../../services/data-variable-hover.service';
import { DragDropEvent } from '../../../drag-drop';

@Component({
  selector: 'app-data-variable-dropzone',
  templateUrl: './data-variable-dropzone.component.html',
  styleUrls: ['./data-variable-dropzone.component.sass']
})
export class DataVariableDropzoneComponent {
  @Input() recordStream: RecordStream;
  @Input() graphicVariableOption: GraphicVariableOption;
  @Input() availableGraphicVariables: GraphicVariable[];
  @Output() graphicVariableChange: Observable<GraphicVariable>;
  graphicVariable: GraphicVariable;

  selectionClass = '';

  private _graphicVariableChange = new EventEmitter<GraphicVariable>();
  constructor(private hoverService: DataVariableHoverService) {
    this.graphicVariableChange = this._graphicVariableChange.asObservable();
   }


  dataVariableDropped(selectedDataVariable: DataVariable) {
    const gvs = this.mappableGraphicVariables(selectedDataVariable);
    this.graphicVariable = gvs[0];
    this._graphicVariableChange.emit(gvs[0]);
  }

  onDragDropEvent(event: DragDropEvent) {
    if (event.type === 'drag-start') {
      this.selectionClass = event.accepted ? 'selectable' : 'unselectable'; // 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)';
    } else if (event.type === 'drag-end') {
      this.selectionClass = '';
    }
  }

  @HostListener('mouseover', [])
  onMouseOver() {
    this.hoverService.startHover([this.graphicVariableOption.type]);
  }

  @HostListener('mouseout', [])
  onMouseOut() {
    this.hoverService.endHover();
  }

  mappableGraphicVariables(dataVariable: DataVariable): GraphicVariable[] {
    const acceptsDrop = this.availableGraphicVariables.filter(gv => gv.recordStream === this.recordStream
      && gv.dataVariable === dataVariable
      && gv.type === this.graphicVariableOption.type
   );
    return acceptsDrop;
  }

  get acceptsDrop() {
    return (dataVariable: DataVariable) => {
        return this.mappableGraphicVariables(dataVariable).length > 0;
    };
  }

}
