import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent, GraphicVariable, GraphicVariableType, Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';

@Component({
  selector: 'app-scatter-graph',
  templateUrl: './scatter-graph.component.html',
  styleUrls: ['./scatter-graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScatterGraphComponent {
  @Input() data: Visualization;

  @ViewChild('visualization', { static: true }) visualization: DvlFwVisualizationComponent;

  readonly xAxisType = GraphicVariableType.AXIS;
  readonly yAxisType = GraphicVariableType.AXIS;
  readonly colorType = GraphicVariableType.COLOR;
  readonly shapeType = GraphicVariableType.SHAPE;
  readonly sizeType = GraphicVariableType.AREA_SIZE;

  readonly variables: GraphicVariable[];
  readonly defaultXAxisVariable: GraphicVariable;
  readonly defaultYAxisVariable: GraphicVariable;

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.variables = dataService.project.graphicVariables;
    this.defaultXAxisVariable = this.findVariable(/time/i, this.xAxisType);
    this.defaultYAxisVariable = this.findVariable(/height/i, this.yAxisType);
  }

  variableChanged(variable: GraphicVariable, id: string): void {
    if (this.data) {
      this.data.graphicSymbols['points'].graphicVariables[id] = variable;
      this.visualization.runDataChangeDetection();
      this.updateService.triggerUpdate(this.data);
    }
  }

  private findVariable(label: RegExp, type: GraphicVariableType): GraphicVariable {
    return this.variables.find(variable => {
      return label.test(variable.label) && variable.type === type;
    });
  }
}
