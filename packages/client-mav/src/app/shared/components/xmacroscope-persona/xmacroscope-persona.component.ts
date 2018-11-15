import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import * as d3Selection from 'd3-selection';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-xmacroscope-persona',
  templateUrl: './xmacroscope-persona.component.html',
  styleUrls: ['./xmacroscope-persona.component.sass']
})
export class XMacroscopePersonaComponent implements OnInit, OnChanges {
  @Input() color: string;
  @Input() shape: string;
  @Input() shapeSize = 300;

  @Input() pathStrokeColor = '#bebebe';
  @Input() pathStrokeSize = 2;

  @Input() backgroundColor = '#ffffff';
  @Input() backgroundStrokeColor = '#afafaa';
  @Input() backroundStrokeWidth = 4;
  @Input() backgroundSize = { width: 50, height: 50 };
  @Input() backgroundRadius = 22;

  pathDefinition: string;
  pathFill: string;
  pathPosition: string;


  constructor() { }

  ngOnInit() {
    this.pathPosition = 'translate('
    + this.backgroundSize.width / 2 + ', '
    + this.backgroundSize.height / 2 + ')';
    const persona = d3Selection.select('.persona-container').select('svg')
      .select('.persona').select('path');
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('shape' in changes) {
      this.pathDefinition = d3Shape.symbol().type(this.selectShape(
        changes.shape.currentValue
      )).size(this.shapeSize)();
    }

    if ('color' in changes) {
      const color = changes.color.currentValue;
      this.pathFill = (color === null) ? '' : color.toString();
    }
  }

  selectShape(shape) {
    switch (shape) {
      case 'circle': return d3Shape.symbolCircle;
      case 'square': return d3Shape.symbolSquare;
      case 'cross': return d3Shape.symbolCross;
      case 'diamond': return d3Shape.symbolDiamond;
      case 'triangle-up': return d3Shape.symbolTriangle;
      case 'triangle-down': return d3Shape.symbolTriangle;
      case 'triangle-left': return d3Shape.symbolTriangle;
      case 'triangle-right': return d3Shape.symbolTriangle;
      case 'star': return d3Shape.symbolStar;
      default: return d3Shape.symbolCircle;
    }
  }

}
