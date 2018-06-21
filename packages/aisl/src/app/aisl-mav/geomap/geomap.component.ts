import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RawChangeSet, BoundField, Field } from '@ngx-dino/core';

import { assign, mapValues, pick } from 'lodash';

import { GeomapDataService } from '../shared/geomap-data.service';

import * as commonFields from '../shared/common-fields';
import * as geomapFields from '../shared/geomap-fields';

@Component({
  selector: 'aisl-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass'],
  providers: [GeomapDataService]
})
export class GeomapComponent implements OnInit {
  stateDataStream: Observable<RawChangeSet>;
  pointDataStream: Observable<RawChangeSet>;

  fields = commonFields.combineUnique<any>(
    commonFields.stateColorFields, commonFields.pointColorFields,
    commonFields.pointShapeFields, geomapFields.pointSizeFields,
    geomapFields.tooltipFields
  );

  defaultFields: {[key: string]: BoundField<any>};
  listOfFields: {[key: string]: BoundField<any>};

  strokeColorField: BoundField<string>; // not user facing
  pointColorField = commonFields.pointColorFields.default;

  constructor(service: GeomapDataService) {

    const combinedDefaultFields = assign({}, pick(commonFields, [
      'stateColorFields.default', 'pointColorFields.default',
      'pointShapeFields.default'
      ]), pick(geomapFields, [
        'stateFields.default', 'pointIdField',
        'pointSizeFields.default', 'pointPositionFields.default'
      ]));

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
    'stateColorFields', 'pointColorFields',
    'pointShapeFields'
    ]), pick(geomapFields, [
      'stateFields', 'pointIdField',
      'pointSizeFields', 'pointPositionFields'
    ]));


    this.listOfFields = mapValues(
      combinedFields, (l: any) => Array.isArray(l)
        ? l.map((f) => f.getBoundField())
        : l.getBoundField()
    );

    this.stateDataStream = service.stateDataStream;
    this.pointDataStream = service.pointDataStream;

    this.strokeColorField = commonFields.personaStrokeColorField(this, 'pointColorField').getBoundField();
  }

  ngOnInit() {
  }
}
