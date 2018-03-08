import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { IField, Changes } from '@ngx-dino/core';
import { GeomapDataService } from '../shared/geomap-data.service';
import {
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields, PersonastrokeColorField
} from '../shared/common-fields';
import {
  pointIdField,
  defaultStateFields, defaultPointPositionFields, defaultPointSizeFields
} from '../shared/geomap-fields';

@Component({
  selector: 'aisl-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass'],
  providers: [GeomapDataService]
})
export class GeomapComponent implements OnInit {
  stateDataStream: Observable<Changes>;
  pointDataStream: Observable<Changes>;

  strokeColorField: IField<string>; // not user facing

  stateField = defaultStateFields.default;
  stateFields = defaultStateFields;

  stateColorField = defaultStateColorFields.default;
  stateColorFields = defaultStateColorFields;

  pointIdField = pointIdField;

  pointPositionField = defaultPointPositionFields.default;
  pointPositionFields = defaultPointPositionFields;

  pointShapeField = defaultPointShapeFields.default;
  pointShapeFields = defaultPointShapeFields;

  pointSizeField = defaultPointSizeFields.default;
  pointSizeFields = defaultPointSizeFields;

  pointColorField = defaultPointColorFields.default;
  pointColorFields = defaultPointColorFields;

  constructor(public service: GeomapDataService) {
    this.stateDataStream = service.stateDataStream;
    this.pointDataStream = service.pointDataStream;
    this.strokeColorField = new PersonastrokeColorField(this, 'pointColorField');
  }

  ngOnInit() {
  }
}
