import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  GraphicSymbolOption,
  GraphicVariable,
  GraphicVariableOption,
  Project,
  RecordStream,
  Visualization,
} from '@dvl-fw/core';
import { cloneDeep } from 'lodash';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';

export interface Group {
  option: GraphicSymbolOption;
}

export interface ButtonGroupItem {
  label: string;
  id: string;
  icon: string;
}

@Component({
  selector: 'app-legend-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnChanges {
  @Input() activeVisualization: number;
  private lastActiveVisualization: number;
  private lastProject: Project;
  streams: RecordStream[];
  project: Project;
  visualization: Visualization;
  xMacroscopeDataService: XMacroscopeDataService;
  graphicSymbolOptions: GraphicSymbolOption;
  graphicVariableOptions: GraphicVariableOption[] =  [
    { type: 'color', label: 'Color', visualization: 'color' },
    { type: 'areaSize', label: 'Area Size', visualization: 'node-size' },
    { type: 'shape', label: 'Shape', visualization: 'shape' }
  ];

  navigationButtons: ButtonGroupItem[] = [
    {
      label: 'Data Table',
      id: 'datatable',
      icon: 'visualization:table'
    },
    {
      label: 'Scatter Graph',
      id: 'scattergraph',
      icon: 'visualization:scatter-graph'
    },
    {
      label: 'Map',
      id: 'geomap',
      icon: 'visualization:geomap'
    }
  ];

  constructor(private dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.xMacroscopeDataService = dataService;
    this.project = dataService.project;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('activeVisualization' in changes) {
      this.project = this.xMacroscopeDataService.project;
      const changed = this.activeVisualization !== this.lastActiveVisualization || this.project !== this.lastProject;
      this.lastActiveVisualization = this.activeVisualization;
      this.lastProject = this.project;
      if (changed) {
        this.setState(this.project, this.activeVisualization - 1);
      }
    }
  }

  onGraphicVariableChange(group: any, option: GraphicVariableOption, gv: GraphicVariable): void {
    const  { updateService, visualization } = this;
    const id = option.id || option.type;
    if (visualization) {
      updateService.updateGraphicVariable(visualization, group.id, id, gv);
    }
  }

  navigationChanged(event: any) {} // FIXME

  private setState(project: Project, index: number): void {
    const visualization = this.visualization = project && index >= 0 && project.visualizations[index];
    if (project) {
      this.setStreams(project);
      if (visualization) {
        this.setGroups(visualization);
      }
    }
  }

  private setStreams(project: Project): void {
    this.streams = project.dataSources
      .map(source => source.recordStreams)
      .reduce((acc, s) => acc.concat(s), [] as RecordStream[]);
  }

  private setGroups(visualization: Visualization): void {
    const graphicSymbols = cloneDeep(visualization.graphicSymbols);
    Object.keys(graphicSymbols).forEach((key) => {
      this.graphicSymbolOptions = visualization.graphicSymbolOptions.filter((option) => {
        return option.id === key;
      })[0];
    });
  }
}
