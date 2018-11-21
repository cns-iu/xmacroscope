import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GraphicSymbolOption, GraphicVariable, GraphicVariableOption, Project,
  Visualization, RecordStream, DefaultGraphicVariable
} from '@dvl-fw/core';
import { filter, cloneDeep } from 'lodash';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { UpdateVisService } from '../../../shared/services/update-vis.service';

export interface Group {
  option: GraphicSymbolOption;
}

@Component({
  selector: 'app-legend-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() activeVisualization: number;

  streams: RecordStream[];
  project: Project;
  visualization: Visualization;
  xMacroscopeDataService: XMacroscopeDataService;
  private lastActiveVisualization: number;
  private filteredGraphicVariables: DefaultGraphicVariable[];
  private filteredGraphicVariableOptions: GraphicVariableOption[] = [];
  private lastProject: Project;
  private graphicSymbolOptions;

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
  ngOnInit() {}

  onGraphicVariableChange(group: any, option: GraphicVariableOption, gv: GraphicVariable): void {
    const  { updateService, visualization } = this;
    const id = option.id || option.type;
    if (visualization) {
      updateService.updateGraphicVariable(visualization, group.id, id, gv);
    }
  }

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
      this.filteredGraphicVariableOptions =  [
        { type: 'color', label: 'Color', visualization: 'color' },
        { type: 'areaSize', label: 'Area Size', visualization: 'node-size' }
      ];

      this.graphicSymbolOptions = visualization.graphicSymbolOptions.filter((option) => {
        option.graphicVariableOptions = this.filteredGraphicVariableOptions;
        return option.id === key;
      })[0];
    });
  }
}
