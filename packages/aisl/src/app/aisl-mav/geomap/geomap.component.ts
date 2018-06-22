import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RawChangeSet, Field } from '@ngx-dino/core';

import { GeomapDataService } from '../shared/geomap-data.service';
import { RunFields, wrapFieldForShowPersona } from '../fields';

@Component({
  selector: 'aisl-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass'],
  providers: [GeomapDataService]
})
export class GeomapComponent {
  stateDataStream: Observable<RawChangeSet>;
  pointDataStream: Observable<RawChangeSet>;
  fields = RunFields;

  @Input() pointSizeField: Field<any> = RunFields.timeMillis;
  @Input() pointShapeField: Field<any> = RunFields.fixed;
  @Input() pointColorField: Field<any> = RunFields.persona.age_group;

  constructor(service: GeomapDataService) {
    this.stateDataStream = service.stateDataStream;
    this.pointDataStream = service.pointDataStream;
  }

  wrapField(field: Field<any>): Field<any> {
    if (field) {
      return wrapFieldForShowPersona(field);
    } else {
      return RunFields.persona.persona;
    }
  }
}
