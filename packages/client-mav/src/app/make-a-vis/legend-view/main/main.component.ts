import { Component, OnInit, Input } from '@angular/core';
import { GraphicSymbolOption, GraphicVariable, GraphicVariableOption, Project, RecordStream, Visualization } from '@dvl-fw/core';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { UpdateVisService } from '../../../shared/services/update-vis.service';


export interface Group {
  option: GraphicSymbolOption;
  index: number;
}

@Component({
  selector: 'app-legend-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @Input() project: Project;
  @Input() activeVisualization: number;

  streams: RecordStream[];
  groups: Group[] = [];

  visualization: Visualization;

  private lastActiveVisualization: number;
  private lastProject: Project;

  private permittedGraphicVariables = ['color', 'size'];

  constructor(private dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    const changed = this.activeVisualization !== this.lastActiveVisualization || this.project !== this.lastProject;
    this.lastActiveVisualization = this.activeVisualization;
    this.lastProject = this.project;
    if (changed) {
      this.setState(this.project, this.activeVisualization);
    }
  }

  ngOnInit() {
  }

  onStreamChange(group: Group, index: number) {
    const { streams, updateService, visualization } = this;
    const { id, type } = group.option;
    if (visualization) {
      updateService.updateGraphicSymbol(visualization, id, type, streams[index]);
    }
  }

  onGraphicVariableChange(group: Group, option: GraphicVariableOption, gv: GraphicVariable): void {
    const  { updateService, visualization } = this;
    const id = option.id || option.type;
    if (visualization) {
      updateService.updateGraphicVariable(visualization, group.option.id, id, gv);
    }
  }

  private setState(project: Project, index: number): void {
    const visualization = this.visualization = project && index >= 0 && project.visualizations[index];
    if (project) {
      this.setStreams(project);
      if (visualization) {
        this.setGroups(visualization);
      } else {
        this.groups = [];
      }
    } else {
      this.streams = [];
      this.groups = [];
    }
  }

  private setStreams(project: Project): void {
    this.streams = project.dataSources
      .map(source => source.recordStreams)
      .reduce((acc, s) => acc.concat(s), [] as RecordStream[]);
  }

  private setGroups(visualization: Visualization): void {
    const { graphicSymbolOptions: options, graphicSymbols } = visualization;
    this.groups = [];

    if (options) {
      options.forEach(option => {
        if (this.permittedGraphicVariables.filter((pgv: string) => option.id.toLowerCase().includes(pgv)).length) {
          const symbol = graphicSymbols[option.id];
          const index = symbol ? this.streams.indexOf(symbol.recordStream) : -1;
          this.groups.push({ option, index });
        }
      });
    }
  }
}
