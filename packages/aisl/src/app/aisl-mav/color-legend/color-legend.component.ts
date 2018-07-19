import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';
import { Map } from 'immutable';

import { Field, RawChangeSet } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields, sizeRange } from '../fields';

@Component({
  selector: 'aisl-color-legend',
  templateUrl: './color-legend.component.html',
  styleUrls: ['./color-legend.component.sass']
})
export class ColorLegendComponent {
  dataStream: Observable<RawChangeSet>;

  @Input() colorField: Field<any> = RunFields.fixed;

  labelToColor = Map<string, string>({
    '07-09': '#bdbdbd',
    '10-12': '#a5a5a5',
    '13-18': '#8e8e8e',
    '19-30': '#767676',
    '31-40': '#5f5f5f',
    '41-50': '#474747',
    '51-60': '#2f2f2f',
    '61-70': '#181818',
    '70+': '#000'
  });

  fields = RunFields;
  sizeRange = sizeRange;

  constructor(service: SharedDataService) {
    this.dataStream = service.createStream();
  }
}
