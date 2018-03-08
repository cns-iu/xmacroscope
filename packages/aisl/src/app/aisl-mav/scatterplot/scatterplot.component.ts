import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Changes } from '@ngx-dino/core';

import { ScatterPlotDataService } from '../shared/scatterplot-data.service';
import {
  combineUnique,
  defaultPointColorFields, defaultPointShapeFields
} from '../shared/common-fields';
import {
  pointIDField,
  defaultPointPositionFields,
  defaultXField, defaultYField,
  defaultPointSizeFields,
  showPersonaField
} from '../shared/scatterplot-fields';


@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass'],
  providers: [ScatterPlotDataService]
})
export class ScatterplotComponent implements OnInit {
  pointIDField = pointIDField; // not user facing
  showPersonaField = showPersonaField; // not user facing

  fields = combineUnique<any>(
    defaultPointPositionFields,
    defaultPointColorFields,
    defaultPointShapeFields,
    defaultPointSizeFields
  );

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

  dataStream: Observable<Changes>;

  constructor(service: ScatterPlotDataService) {
    this.dataStream = service.dataStream;
  }

  ngOnInit() { }
}
