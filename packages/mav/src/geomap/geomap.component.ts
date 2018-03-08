import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Changes, IField } from '@ngx-dino/core';

@Component({
  selector: 'mav-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass']
})
export class GeomapComponent implements OnInit {
  @Input() stateDataStream: Observable<Changes>;

  @Input() strokeField:IField<string>;
  
  @Input() stateField: IField<string>;
  @Input() stateColorField: IField<string>;

  @Input() stateFields: IField<any>[];
  @Input() stateColorFields: IField<any>[];

  @Input() pointIdField: IField<string>;
  @Input() pointDataStream: Observable<Changes>;
  @Input() pointPositionField: IField<[number, number]>;
  @Input() pointSizeField: IField<number>;
  @Input() pointColorField: IField<string>;
  @Input() pointShapeField: IField<string>;

  @Input() pointPositionFields: IField<[number, number]>[];
  @Input() pointSizeFields: IField<number>[];
  @Input() pointColorFields: IField<string>[];
  @Input() pointShapeFields: IField<string>[];

  constructor() { }

  ngOnInit() { }

}
