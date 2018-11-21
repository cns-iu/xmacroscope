import { Component, OnInit } from '@angular/core';
import { Visualization } from '@dvl-fw/core';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { find } from 'lodash';

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


  visTypes: VisType[] = [
    { template: 'scattergraph', label: 'Scatter Graph', icon: 'scatter-graph' },
    { template: 'geomap', label: 'Geomap', icon: 'geomap' },
    { template: 'science-map', label: 'Map of Science', icon: 'mapOfScience' },
    { template: 'network', label: 'Network', icon: 'network' },
    { template: 'temporal-bargraph', label: 'Temporal Bar Graph', icon: 'hbg' }
  ];

  // visualization indexing starting from 1
  selectedVisualization = 1;
  vis = undefined;
  visualizations = [];
  constructor(private dataService: XMacroscopeDataService ) {
    this.selectedVisualization = 1;
    this.vis = this.dataService.project.visualizations.map(vis => {
      const type = find(this.visTypes, { template: vis.template });
      const label = type && type.label || vis.id || '';
      const icon = 'assets/img/icon-mav-' + type.icon + '.svg';
      return { label, icon, data: vis } as Vis;
    });

  }

  setSelectedVis(index) {
   this.selectedVisualization = index;

  }

  ngOnInit() {
  }

}
