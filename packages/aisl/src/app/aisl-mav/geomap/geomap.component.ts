import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { List } from 'immutable';

import { IField, Changes } from '../../dino-core';

import { GeomapDataService } from '../shared/geomap-data.service';

@Component({
  selector: 'aisl-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass'],
  providers: [GeomapDataService]
})
export class GeomapComponent implements OnInit {
  stateDataStream: Observable<Changes>;

  stateField: IField<any>;
  stateColorField: IField<any>;

  stateFields: IField<any>[];
  stateColorFields: IField<any>[];

  pointDataStream: Observable<Changes>;

  pointPositionField: IField<any>;
  pointSizeField: IField<any>;
  pointColorField: IField<any>;
  pointShapeField: IField<any>;

  pointPositionFields: IField<any>[];
  pointSizeFields: IField<any>[];
  pointColorFields: IField<any>[];
  pointShapeFields: IField<any>[];

  constructor(public massager: GeomapDataService) {
    this.stateDataStream = massager.stateDataStream;

    this.stateField = massager.stateFields[0];
    this.stateColorField = massager.stateColorFields[1];

    this.stateFields = massager.stateFields;
    this.stateColorFields = massager.stateColorFields;

    this.pointDataStream = massager.pointDataStream;

    this.pointPositionField = massager.pointPositionFields[0];
    this.pointSizeField = massager.pointSizeFields[0];
    this.pointColorField = massager.pointColorFields[0];
    this.pointShapeField = massager.pointShapeFields[0];

    this.pointPositionFields = massager.pointPositionFields;
    this.pointSizeFields = massager.pointSizeFields;
    this.pointColorFields = massager.pointColorFields;
    this.pointShapeFields = massager.pointShapeFields;
  }

  ngOnInit() {
  }
}
