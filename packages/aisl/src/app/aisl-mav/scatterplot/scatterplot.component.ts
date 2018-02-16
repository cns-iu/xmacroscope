import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScatterPlotDataService } from '../shared/scatterplot-data.service';
import { IField, Field, Changes } from '../../dino-core';
import {
  pointIDField,
  defaultPointPositionFields,
  defaultXField,
  defaultYField,
  defaultPointColorFields,
  defaultPointShapeFields,
  defaultPointSizeFields
} from '../shared/scatterplot-fields';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass'],
  providers: [ScatterPlotDataService]
})
export class ScatterplotComponent implements OnInit {
  pointIDField = pointIDField; // not user facing

  xFields = defaultPointPositionFields;
  xField = defaultXField;

  yFields = defaultPointPositionFields;
  yField = defaultYField;

  colorFields = defaultPointColorFields;
  colorField = defaultPointColorFields.default;

  shapeFields = defaultPointShapeFields;
  shapeField = defaultPointShapeFields.default;

  sizeFields = defaultPointSizeFields;
  sizeField = defaultPointSizeFields.default;

  dataStream: Observable<Changes<any>>;

  constructor(public massager: ScatterPlotDataService) {
    this.dataStream = massager.dataStream;
  }

  ngOnInit() { }
}
