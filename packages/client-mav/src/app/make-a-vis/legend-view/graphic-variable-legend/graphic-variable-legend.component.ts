import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {
  DefaultGraphicSymbol, DvlFwVisualizationComponent, GraphicSymbol, GraphicSymbolOption,
  GraphicVariable, GraphicVariableOption, Project, ProjectSerializerService, Visualization
} from '@dvl-fw/core';
import { uniqueId } from 'lodash';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';
import { UpdateVisService } from '../../../shared/services/update-vis.service';


@Component({
  selector: 'app-graphic-variable-legend',
  templateUrl: './graphic-variable-legend.component.html',
  styleUrls: ['./graphic-variable-legend.component.sass']
})
export class GraphicVariableLegendComponent implements OnInit, OnChanges {

  @Input() graphicSymbolOption: GraphicSymbolOption;
  @Input() graphicVariableOption: GraphicVariableOption;
  @Input() visualization: Visualization;

  @ViewChild('visualization', { static: true }) legendComponent: DvlFwVisualizationComponent;

  graphicVariable: GraphicVariable;
  legendVisualizationTypes = ['color', 'node-size'];
  legendVisualizationType: string;
  project: Project;
  legend: Visualization;

  constructor(private xMacroscopeDataService: XMacroscopeDataService, private serializer: ProjectSerializerService,
    private updateService: UpdateVisService) {
   }

  ngOnInit() {
    this.updateService.update.subscribe(this.visualizationUpdated.bind(this));
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('visualization' in changes) {
    this.visualizationUpdated();
    }
  }

  private generateLegendGraphicSymbol(template: string, graphicVariable: GraphicVariable,
    sourceGraphicSymbol: GraphicSymbol, project: Project): GraphicSymbol {
  const graphicSymbol: GraphicSymbol = new DefaultGraphicSymbol({
    id: 'items', type: sourceGraphicSymbol.type, recordStream: sourceGraphicSymbol.recordStream.id,
    graphicVariables: {}
  }, project);

  const gvars = graphicSymbol.graphicVariables;
  gvars[graphicVariable.type] = graphicVariable;
  if (template === 'color') {
    gvars.color = graphicVariable;
  }
  gvars.identifier = sourceGraphicSymbol.graphicVariables.identifier;
  for (const gv of project.graphicVariables) {
    if (gv.dataVariable === graphicVariable.dataVariable && !gvars[gv.type]) {
      gvars[gv.type] = gv;
    }
  }
  return graphicSymbol;
}

  private visualizationUpdated() {
    if (!this.visualization) { return; }
    const graphicSymbol = this.visualization.graphicSymbols[this.graphicSymbolOption.id];
    if (!graphicSymbol) { return; }
    const graphicVariable = graphicSymbol.graphicVariables[this.graphicVariableOption.id || this.graphicVariableOption.type];
    this.graphicVariable = graphicVariable;
    const template = this.graphicVariableOption.visualization;
    this.legendVisualizationType = template;
    if (this.legendVisualizationTypes.indexOf(template) !== -1 && graphicVariable) {
      const preData: any = {
        id: `legend-visualization-${uniqueId()}`,
        template,
        properties: {},
        graphicSymbols: {}
      };

      this.project = this.xMacroscopeDataService.project;
      (<any>this.legendComponent).unload(); // FIXME: Make this public in dvl-fw
      this.serializer.createVisualization(
            this.graphicVariableOption.visualization, preData, this.project
          ).subscribe((legend) => {
            legend.graphicSymbols.items = this.generateLegendGraphicSymbol(template, graphicVariable, graphicSymbol, this.project);
            this.legend = legend;
            this.legendComponent.data = legend;
            this.legendComponent.runDataChangeDetection();
          });
  } else if (this.legendComponent) {
      this.legend = undefined; // TODO
      this.legendComponent.data = undefined; // TODO
      this.legendComponent.runDataChangeDetection();
  }

  }
}
