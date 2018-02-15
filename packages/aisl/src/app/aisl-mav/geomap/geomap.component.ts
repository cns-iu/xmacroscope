import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { IField, Changes } from '../../dino-core';
import { GeomapDataService } from '../shared/geomap-data.service';
import {
  defaultStateColorFields, defaultPointColorFields,
  defaultPointShapeFields, defaultPointSizeFields
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

  stateField: IField<any>;
  stateFields: IField<any>[];

  stateColorField = defaultStateColorFields.default;
  stateColorFields = defaultStateColorFields;

  pointShapeField = defaultPointShapeFields.default;
  pointShapeFields = defaultPointShapeFields;

  pointSizeField = defaultPointSizeFields.default;
  pointSizeFields = defaultPointSizeFields;

  pointColorField = defaultPointColorFields.default;
  pointColorFields = defaultPointColorFields;

  pointPositionField: IField<any>;
  pointPositionFields: IField<any>[];

  constructor(public service: GeomapDataService) {
    this.stateDataStream = service.stateDataStream;
    this.pointDataStream = service.pointDataStream;

    this.stateField = service.stateFields[0];
    this.stateFields = service.stateFields;

    this.pointPositionField = service.pointPositionFields[0];
    this.pointPositionFields = service.pointPositionFields;
  }

  ngOnInit() {
  }
}
