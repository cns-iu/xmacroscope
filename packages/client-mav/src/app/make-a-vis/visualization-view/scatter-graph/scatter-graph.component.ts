import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent } from '@dvl-fw/angular';
import { GraphicSymbol, GraphicVariable, GraphicVariableType, Visualization } from '@dvl-fw/core';
import { get, set } from 'lodash';
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

  private get graphicSymbol(): GraphicSymbol {
    return get(this.data, ['graphicSymbols', 'points']);
  }

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.variables = dataService.project.graphicVariables.filter(gv => gv.id !== 'row-color');
    this.defaultXAxisVariable = this.findVariable(/time/i, this.xAxisType);
    this.defaultYAxisVariable = this.findVariable(/height/i, this.yAxisType);
  }

  currentVariable(id: string): GraphicVariable {
    return get(this.graphicSymbol, ['graphicVariables', id]);
  }

  variableChanged(variable: GraphicVariable, id: string): void {
    if (this.graphicSymbol) {
      set(this.graphicSymbol, ['graphicVariables', id], variable);
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
