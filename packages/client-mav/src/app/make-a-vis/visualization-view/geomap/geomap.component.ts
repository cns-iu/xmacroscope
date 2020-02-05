import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import {
  DvlFwVisualizationComponent,
  GraphicSymbol,
  GraphicVariable,
  GraphicVariableType,
  Visualization,
} from '@dvl-fw/core';
import { get, set } from 'lodash';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { environment } from '../../../../environments/environment';
import { UpdateVisService } from '../../../shared/services/update-vis.service';


export interface ButtonItem {
  label: string;
  icon: string;
  id: string;
}

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeomapComponent {
  @Input() data: Visualization;

  @ViewChild('visualization', { static: true }) visualization: DvlFwVisualizationComponent;

  readonly colorType = GraphicVariableType.COLOR;
  readonly shapeType = GraphicVariableType.SHAPE;
  readonly sizeType = GraphicVariableType.AREA_SIZE;

  readonly variables: GraphicVariable[];
  readonly buttonItems: ButtonItem[] = [
    {
      label: 'United States',
      icon: 'map:us',
      id: 'USA'
    },
    {
      label: environment.projectConfiguration.defaultUsState,
      icon: `map:${environment.projectConfiguration.defaultUsState.toLowerCase()}`,
      id: environment.projectConfiguration.defaultUsState
    }
  ];

  private get graphicSymbol(): GraphicSymbol {
    return get(this.data, ['graphicSymbols', 'nodes']);
  }

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.variables = dataService.project.graphicVariables.filter(gv => gv.id !== 'row-color');
  }

  currentFeature(): ButtonItem {
    const id = get(this.data, ['properties', 'featureSelection']);
    return this.buttonItems.find(item => item.id === id) || this.buttonItems[1];
  }

  currentVariable(id: string): GraphicVariable {
    return get(this.graphicSymbol, ['graphicVariables', id]);
  }

  geoMapChanged(selectedMap: ButtonItem): void {
    if (this.data) {
      this.data.properties.featureSelection = selectedMap.id;
      this.visualization.runDataChangeDetection();
    }
  }

  variableChanged(variable: GraphicVariable, id: string): void {
    if (this.graphicSymbol) {
      set(this.graphicSymbol, ['graphicVariables', id], variable);
      this.visualization.runDataChangeDetection();
      this.updateService.triggerUpdate(this.data);
    }
  }
}
