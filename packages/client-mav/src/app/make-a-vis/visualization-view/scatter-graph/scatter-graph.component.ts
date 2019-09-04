import { Component, Input } from '@angular/core';
import { Visualization, GraphicVariableType } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-scatter-graph',
  templateUrl: './scatter-graph.component.html',
  styleUrls: ['./scatter-graph.component.scss']
})
export class ScatterGraphComponent {
  @Input() data: Visualization;

  readonly xAxisType = GraphicVariableType.AXIS;
  readonly yAxisType = GraphicVariableType.AXIS;
  readonly colorType = GraphicVariableType.COLOR;
  readonly shapeType = GraphicVariableType.SHAPE;
  readonly sizeType = GraphicVariableType.AREA_SIZE;

  constructor(public dataService: XMacroscopeDataService) { }
}
