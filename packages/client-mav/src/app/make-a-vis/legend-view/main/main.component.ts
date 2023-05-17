import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DefaultGraphicSymbol, DefaultGraphicSymbolArg, GraphicSymbol, GraphicVariable, Project } from '@dvl-fw/core';
import { get } from 'lodash';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';



@Component({
  selector: 'app-legend-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnChanges {
  @Input() activeVisualization = 'datatable';
  @Output() readonly activeVisualizationChange = new EventEmitter<string>();

  readonly navigation = [
    { label: 'Data Table', id: 'datatable', icon: 'visualization:table', hideLegend: true },
    { label: 'Scatter Graph', id: 'scattergraph', icon: 'visualization:scatter-graph', hideLegend: false },
    { label: 'Map', id: 'geomap', icon: 'visualization:geomap', hideLegend: false }
  ];
  readonly legends = [
    { variable: 'color', label: 'Color', icon: 'label:color', type: 'color-legend' },
    { variable: 'shape', label: 'Shape', icon: 'label:shape', type: 'shape-legend' },
    { variable: 'areaSize', label: 'Size', icon: 'label:size', type: 'size-legend' }
  ];

  readonly originalGraphicSymbol: unknown;
  readonly originalTableOrder: GraphicVariable;

  project: Project;
  selected = this.navigation[0];

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.project = dataService.project;

    this.originalGraphicSymbol = this.getRunPoints().toJSON();
    this.originalTableOrder = this.getRunTable().graphicVariables.order;

    console.log(dataService.config)
    if (dataService.config.location === 'null') {
      const index = this.navigation.findIndex(nav => nav.id === 'geomap');
      this.navigation.splice(index, 1);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('activeVisualization' in changes) {
      this.selected = this.navigation.find(n => n.id === this.activeVisualization) ?? this.navigation[0];
    }
  }

  isVariableFixed(type: string): boolean {
    const id = get(this.getRunPoints(), ['graphicVariables', type, 'id']);
    return id === 'fixed' || id === undefined;
  }

  variableLabel(type: string): string {
    return get(this.getRunPoints(), ['graphicVariables', type, 'label']);
  }

  goHome(): void {
    this.navigationChanged(this.navigation[0]);
    const gs = new DefaultGraphicSymbol(this.originalGraphicSymbol as DefaultGraphicSymbolArg, this.project);
    Object.assign(this.getRunPoints().graphicVariables, gs.graphicVariables);
    this.getRunTable().graphicVariables.order = this.originalTableOrder;

    this.updateService.triggerUpdate(this.project.visualizations.find(v => v.id === 'datatable')!);
  }

  navigationChanged(event: unknown): void {
    this.selected = event as { label: string; id: string; icon: string; hideLegend: boolean };
    this.activeVisualization = this.selected.id;
    this.activeVisualizationChange.emit(this.selected.id);
  }

  private getRunPoints(): GraphicSymbol {
    return this.project.graphicSymbols.find(g => g.id === 'runPoints')!;
  }

  private getRunTable(): GraphicSymbol {
    return this.project.graphicSymbols.find(g => g.id === 'runTable')!;
  }
}
