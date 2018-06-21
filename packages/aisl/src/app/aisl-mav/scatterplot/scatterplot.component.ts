import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { assign, mapValues, pick } from 'lodash';

import { BoundField, RawChangeSet } from '@ngx-dino/core';
import { ScatterPlotDataService } from '../shared/scatterplot-data.service';


import * as commonFields from '../shared/common-fields';
import * as scatterplotFields from '../shared/scatterplot-fields';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass'],
  providers: [ScatterPlotDataService]
})
export class ScatterplotComponent implements OnInit {
  strokeColorField: BoundField<string>; // not user facing

  defaultFields: {[key: string]: BoundField<any>};
  listOfFields: {[key: string]: BoundField<any>};

  fields = commonFields.combineUnique<any>(
    scatterplotFields.pointPositionFields,
    scatterplotFields.pointSizeFields,

    commonFields.pointColorFields,
    commonFields.pointShapeFields
  );

  dataStream: Observable<RawChangeSet>;

  constructor(service: ScatterPlotDataService) {
    const combinedDefaultFields = assign({}, pick(commonFields, [
      'pointColorFields.default', 'pointShapeFields.default'
      ]), pick(scatterplotFields, [
        'pointIdField', 'defaultXField', 'defaultYField',
        'pointSizeFields.default', 'pointPositionFields.default'
      ])
    );

    this.defaultFields = mapValues(combinedDefaultFields, // mapping to bound fields
      (d: any) => {
        const n: any = {};
        if  (d.default) {
          n.default = d.default.getBoundField();
          return n;
        } else {
          return d.getBoundField();
        }
      });

    const combinedFields = assign({}, pick(commonFields, [
      'pointColorFields', 'pointShapeFields'
      ]), pick(scatterplotFields, [
        'pointPositionFields', 'pointSizeFields'
    ]));

    this.listOfFields = mapValues(
      combinedFields, (l: any) => Array.isArray(l)
        ? l.map((f) => f.getBoundField())
        : l.getBoundField()
    );

    this.dataStream = service.dataStream;
    this.strokeColorField = commonFields.personaStrokeColorField(this, 'colorField').getBoundField();
  }

  ngOnInit() { }
}
