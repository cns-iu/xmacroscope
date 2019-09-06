import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { GraphicSymbol, GraphicVariable, OnGraphicSymbolChange, OnPropertyChange,
  Project, Visualization, VisualizationComponent, DefaultGraphicSymbol } from '@dvl-fw/core';

import { SymbolLegendVisualization } from '../symbol-legend/symbol-legend.visualization';
import { XMacroscopeDataService } from '../../shared/xmacroscope-data.service';


@Component({
  selector: 'mav-graphic-variable-legend',
  templateUrl: './graphic-variable-legend.component.html',
  styleUrls: ['./graphic-variable-legend.component.scss']
})
export class GraphicVariableLegendComponent implements VisualizationComponent,
    OnChanges, OnInit, OnPropertyChange, OnGraphicSymbolChange {
  @Input() data: Visualization;
  legend: Visualization;

  constructor(private xMacroscopeDataService: XMacroscopeDataService) { }

  refreshItems(): void {
    let legend: Visualization = null;
    if (this.data) {
      // FIXME: Remove specifics to xMacroscope
      const project: Project = this.data['project'] || this.xMacroscopeDataService.project;
      const allGraphicSymbols = this.data.graphicSymbols || {};
      const allSlots = Object.keys(allGraphicSymbols);
      const slot = allSlots.length && allSlots[0];
      const gs = allGraphicSymbols[slot];
      const gv = gs.graphicVariables[this.data.properties['graphicVariable']];
      const itemDefaults = this.data.properties['itemDefaults'] || undefined;

      if (gs && gv) {
        const graphicSymbol = this.createGraphicSymbol(gv, gs, project);
        legend = this.createLegend(this.data.id, graphicSymbol, {itemDefaults}, project);
      }
    }
    this.legend = legend;
  }

  private createLegend(id: string, graphicSymbol: GraphicSymbol, properties: any, project: Project): Visualization {
    const visualization = new SymbolLegendVisualization({
      id,
      template: 'symbol-legend',
      properties,
      graphicSymbols: {}
    }, project);
    visualization.graphicSymbols = { items: graphicSymbol };

    return visualization;
  }

  private createGraphicSymbol(graphicVariable: GraphicVariable, sourceGraphicSymbol: GraphicSymbol, project: Project) {
    const gvars: { [id: string]: any } = {};
    for (const gv of project.graphicVariables) {
      if (gv.dataVariable === graphicVariable.dataVariable && !gvars[gv.type]) {
        gvars[gv.type] = gv;
      }
    }
    const graphicVariables = {
      identifier: sourceGraphicSymbol.graphicVariables.identifier,
      [graphicVariable.type]: graphicVariable,
      value: graphicVariable,
      input: gvars.input || undefined,
      label: gvars.label || undefined,
      order: gvars.order || undefined
    };

    const graphicSymbol = new DefaultGraphicSymbol({
      id: 'items',
      type: sourceGraphicSymbol.type,
      recordStream: sourceGraphicSymbol.recordStream.id,
      graphicVariables: {}
    }, project);
    graphicSymbol.graphicVariables = graphicVariables;

    return graphicSymbol;
  }

  ngOnInit(): void {
    this.refreshItems();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) { this.refreshItems(); }
  }
  dvlOnGraphicSymbolChange(changes: SimpleChanges): void {
    this.refreshItems();
  }
  dvlOnPropertyChange(changes: SimpleChanges): void {
    if ('graphicVariable' in changes || 'itemDefaults' in changes) { this.refreshItems(); }
  }
}
