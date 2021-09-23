import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent } from '@dvl-fw/angular';
import { Project, Visualization } from '@dvl-fw/core';
import { Subscription } from 'rxjs';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';


@Component({
  selector: 'app-graphic-variable-legend',
  templateUrl: './graphic-variable-legend.component.html',
  styleUrls: ['./graphic-variable-legend.component.scss']
})
export class GraphicVariableLegendComponent implements OnDestroy {
  @Input() set visualizationId(id: string) {
    this.legend = this.project.visualizations.find(vis => vis.id === id)!;
  }

  @ViewChild('visualization', { static: true }) component!: DvlFwVisualizationComponent;

  project: Project;
  legend!: Visualization;

  private subscriptions = new Subscription();

  constructor(dataService: XMacroscopeDataService, updateService: UpdateVisService) {
    this.project = dataService.project;
    this.subscriptions.add(updateService.update.subscribe(() => {
      this.component.runDataChangeDetection();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  isSizeLegend(): boolean {
    return this.legend.id === 'size-legend';
  }
}
