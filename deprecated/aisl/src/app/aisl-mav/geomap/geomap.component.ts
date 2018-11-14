import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RawChangeSet, Field } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields, wrapFieldForShowPersona } from '../fields';

@Component({
  selector: 'aisl-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass']
})
export class GeomapComponent {
  stateDataStream: Observable<RawChangeSet>;
  pointDataStream: Observable<RawChangeSet>;
  fields = RunFields;

  @Input() showCounties = false;
  @Input() pointSizeField: Field<any> = RunFields.fixed;
  @Input() pointShapeField: Field<any> = RunFields.fixed;
  @Input() pointColorField: Field<any> = RunFields.fixed;
  @Input() pointStrokeColorField: Field<any> = RunFields.fixed;
  @Input() pointPulseField: Field<boolean> = RunFields.pulse;

  constructor(service: SharedDataService) {
    this.stateDataStream = Observable.of(new RawChangeSet());
    this.pointDataStream = service.createStream();
  }
}