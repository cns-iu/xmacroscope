import { Component, OnInit, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent, GraphicVariable, GraphicVariableOption, Visualization, RecordStream } from '@dvl-fw/core';
import { find } from 'lodash';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { UpdateVisService } from '../../../shared/services/update-vis.service';


export interface VisType {
  template: string;
  label: string;
  icon: string;
}

export interface Vis {
  label: string;
  data: Visualization;
  icon: string;
}

@Component({
  selector: 'app-visualization-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})


export class MainComponent implements OnInit {
  @ViewChild('visualization', { static: false }) visualizationComponent: DvlFwVisualizationComponent;

  visTypes: VisType[] = [
    { template: 'scattergraph', label: 'Scatter Graph', icon: 'scatter-graph' },
    { template: 'geomap', label: 'Geomap', icon: 'geomap' },
    { template: 'science-map', label: 'Map of Science', icon: 'mapOfScience' },
    { template: 'network', label: 'Network', icon: 'network' },
    { template: 'temporal-bargraph', label: 'Temporal Bar Graph', icon: 'hbg' }
  ];
  // visualization indexing starting from 1
  selectedVisualization = 1;
  availableGraphicVariables: GraphicVariable[];
  graphicVariableOptions: GraphicVariableOption[] =  [
    { type: 'axis', label: 'X Axis', id: 'x'},
    { type: 'axis', label: 'Y Axis', id: 'y'}
  ];
  recordStreams: RecordStream[];
  vis = undefined;

  constructor(private dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.selectedVisualization = 1;
    this.availableGraphicVariables = this.dataService.project.graphicVariables;

    this.recordStreams = this.dataService.project.dataSources
      .map(source => source.recordStreams)
      .reduce((acc, s) => acc.concat(s), [] as RecordStream[]);

    this.vis = this.dataService.project.visualizations.map(vis => {
      const type = find(this.visTypes, { template: vis.template });
      const label = type && type.label || vis.id || '';
      const icon = 'assets/img/icon-mav-' + type.icon + '.svg';
      return { label, icon, data: vis } as Vis;
    });

    this.updateService.update.subscribe(() => {
      // FIXME: Visualizations are not properly handling graphic variable changes
      (<any>this.visualizationComponent).unload();
      this.visualizationComponent.runDataChangeDetection();
    });
  }

  setSelectedVis(index) {
    this.selectedVisualization = index;
  }

  onGraphicVariableChange(vis: Visualization, option: GraphicVariableOption, gv: GraphicVariable): void {
    const id = option.id || option.type;
    if (vis) {
      let graphicSymbolOption;
      Object.keys(vis.graphicSymbols).forEach((key) => {
          graphicSymbolOption = vis.graphicSymbolOptions.filter((opt) => {
          return opt.id === key;
        })[0];
      });
      this.updateService.updateGraphicVariable(vis, graphicSymbolOption.id, id, gv);
    }
  }

  ngOnInit() {
  }
}
