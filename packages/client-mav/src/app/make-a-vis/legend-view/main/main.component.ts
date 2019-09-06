import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  GraphicSymbolOption,
  GraphicVariable,
  GraphicVariableOption,
  Project,
  RecordStream,
  Visualization,
} from '@dvl-fw/core';
import { cloneDeep, get } from 'lodash';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';


@Component({
  selector: 'app-legend-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  @Input() activeVisualization: number;

  readonly navigation = [
    { label: 'Data Table', id: 'datatable', icon: 'visualization:table' },
    { label: 'Scatter Graph', id: 'scattergraph', icon: 'visualization:scatter-graph' },
    { label: 'Map', id: 'geomap', icon: 'visualization:geomap' }
  ];
  readonly legends = [
    { variable: 'color', label: 'Color', icon: 'label:color', type: 'color-legend' },
    { variable: 'shape', label: 'Shape', icon: 'label:shape', type: 'shape-legend' },
    { variable: 'areaSize', label: 'Size', icon: 'label:size', type: 'size-legend' }
  ];

  project: Project;

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.project = dataService.project;
  }

  isVariableFixed(type: string): boolean {
    const id = get(this.project, ['graphicSymbols', 0, 'graphicVariables', type, 'id']);
    return id === 'fixed';
  }

  variableLabel(type: string): string {
    return get(this.project, ['graphicSymbols', 0, 'graphicVariables', type, 'label']);
  }

  navigationChanged(event: any) {} // FIXME
}
