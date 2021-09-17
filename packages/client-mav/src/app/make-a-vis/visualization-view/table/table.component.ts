import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent } from '@dvl-fw/angular';
import { GraphicVariable, GraphicVariableType, Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() data: Visualization;
  @ViewChild('visualization', { static: true }) visualization: DvlFwVisualizationComponent;

  readonly orderType = GraphicVariableType.ORDER;

  readonly variables: GraphicVariable[];
  readonly defaultOrderVariable: GraphicVariable;

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.variables = dataService.project.graphicVariables;
    this.defaultOrderVariable = dataService.project.graphicSymbols.find(g => g.id === 'runTable').graphicVariables.order;
  }

  variableChanged(variable: GraphicVariable, id: string): void {
    if (this.data && this.data.graphicSymbols['items']) {
      this.data.graphicSymbols['items'].graphicVariables[id] = variable;
      this.visualization.runDataChangeDetection();
      this.updateService.triggerUpdate(this.data);
    }
  }
}
