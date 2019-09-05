import { Component, Input, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent, GraphicVariable, GraphicVariableType, Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.scss']
})
export class GeomapComponent {
  @Input() data: Visualization;

  @ViewChild('visualization', { static: true }) visualization: DvlFwVisualizationComponent;

  readonly colorType = GraphicVariableType.COLOR;
  readonly shapeType = GraphicVariableType.SHAPE;
  readonly sizeType = GraphicVariableType.AREA_SIZE;

  readonly variables: GraphicVariable[];

  buttonsItems = [
    {
      label: 'United States',
      icon: 'map:Indiana'
    },
    {
      label: 'United States',
      icon: 'map:Indiana'
    }
  ];
  constructor(dataService: XMacroscopeDataService) {
    this.variables = dataService.project.graphicVariables;
  }

  variableChanged(variable: GraphicVariable, id: string): void {
    if (this.data) {
      this.data.graphicSymbols['nodes'].graphicVariables[id] = variable;
      this.visualization.runDataChangeDetection();
    }
  }
}
