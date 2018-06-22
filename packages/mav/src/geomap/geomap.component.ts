import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BoundField, RawChangeSet } from '@ngx-dino/core';

@Component({
  selector: 'mav-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.sass']
})
export class GeomapComponent implements OnInit {
  @Input() stateDataStream: Observable<RawChangeSet>;
  @Input() stateField: BoundField<string>;
  @Input() stateColorField: BoundField<string>;
  @Input() strokeColorField: BoundField<string>;

  @Input() pointIdField: BoundField<string>;
  @Input() pointDataStream: Observable<RawChangeSet>;
  @Input() pointPositionField: BoundField<[number, number]>;
  @Input() pointSizeField: BoundField<number>;
  @Input() pointColorField: BoundField<string>;
  @Input() pointShapeField: BoundField<string>;

  constructor() { }

  ngOnInit() { }

}
