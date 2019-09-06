import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent, Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';


@Component({
  selector: 'app-graphic-variable-legend',
  templateUrl: './graphic-variable-legend.component.html',
  styleUrls: ['./graphic-variable-legend.component.sass']
})
export class GraphicVariableLegendComponent implements OnInit, OnChanges {
  @Input() visualizationId: string;

  @ViewChild('visualization', { static: true }) legendComponent: DvlFwVisualizationComponent;
  legend: Visualization;

  constructor(private xMacroscopeDataService: XMacroscopeDataService, private updateService: UpdateVisService) { }

  ngOnInit() {
    this.updateService.update.subscribe(this.legendUpdated.bind(this));
  }
  ngOnChanges(changes: SimpleChanges) {
    if ('visualizationId' in changes) { this.setLegend(); }
  }

  private setLegend() {
    this.legend = this.xMacroscopeDataService.project.visualizations.find(v => v.id === this.visualizationId);
  }
  private legendUpdated() {
    this.legendComponent.runDataChangeDetection();
  }
}
