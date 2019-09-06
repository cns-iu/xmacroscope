import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GraphicSymbol, GraphicVariable, Project, DefaultGraphicSymbol } from '@dvl-fw/core';
import { get } from 'lodash';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { UpdateVisService } from '../../../shared/services/update-vis.service';



@Component({
  selector: 'app-legend-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnChanges {
  @Input() activeVisualization = 'datatable';
  @Output() activeVisualizationChange = new EventEmitter<string>();

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

  selected = this.navigation[0];
  readonly originalGraphicSymbol: any;
  readonly originalTableOrder: GraphicVariable;

  project: Project;

  constructor(dataService: XMacroscopeDataService, private updateService: UpdateVisService) {
    this.project = dataService.project;

    this.originalGraphicSymbol = this.project.graphicSymbols.find(g => g.id === 'runPoints').toJSON();
    this.originalTableOrder = this.project.graphicSymbols.find(g => g.id === 'runTable').graphicVariables.order;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('activeVisualization' in changes) {
      this.selected = this.navigation.find(n => n.id === this.activeVisualization) || this.navigation[0];
    }
  }

  isVariableFixed(type: string): boolean {
    const gs = this.project.graphicSymbols.find(g => g.id === 'runPoints');
    const id = get(gs, ['graphicVariables', type, 'id']);
    return id === 'fixed' || id === undefined;
  }

  variableLabel(type: string): string {
    const gs = this.project.graphicSymbols.find(g => g.id === 'runPoints');
    return get(gs, ['graphicVariables', type, 'label']);
  }

  goHome() {
    this.navigationChanged(this.navigation[0]);
    const gs = new DefaultGraphicSymbol(this.originalGraphicSymbol, this.project);
    const runPoints = this.project.graphicSymbols.find(g => g.id === 'runPoints');
    Object.assign(runPoints.graphicVariables, gs.graphicVariables);

    const runTable = this.project.graphicSymbols.find(g => g.id === 'runTable');
    runTable.graphicVariables.order = this.originalTableOrder;

    this.updateService.triggerUpdate(this.project.visualizations.find(v => v.id === 'datatable'));
  }

  navigationChanged(event: any) {
    this.selected = event;
    this.activeVisualization = event.id;
    this.activeVisualizationChange.emit(event.id);
  }
}
