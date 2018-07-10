import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Field, RawChangeSet, Datum, rawDataSymbol } from '@ngx-dino/core';

import { SharedDataService } from '../shared/shared-data.service';
import { RunFields } from '../fields';

@Component({
  selector: 'aisl-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass']
})
export class ScatterplotComponent {
  dataStream: Observable<RawChangeSet>;
  fields = RunFields;

  @Input() xField: Field<any> = RunFields.fixed;
  @Input() yField: Field<any> = RunFields.fixed;
  @Input() pointSizeField: Field<any> = RunFields.fixed;
  @Input() pointShapeField: Field<any> = RunFields.fixed;
  @Input() pointColorField: Field<any> = RunFields.fixed;
  @Input() pointStrokeColorField: Field<any> = RunFields.fixed;
  @Input() pointPulseField: Field<boolean> = RunFields.pulse;

  width = window.innerWidth;
  height = 75 / 100 * window.innerHeight;
  autoresize = true;

  private currentFocusItem: any;

  constructor(private service: SharedDataService) {
    this.dataStream = service.createStream();
  }

  focusItem(item: Datum<any>): void {
    const replace: [any, any][] = [];
    if (item) {
      const data = item[rawDataSymbol];
      const newData = Object.assign({pulse: true}, data);
      replace.push([data, newData]);
    }
    if (this.currentFocusItem) {
      const data = this.currentFocusItem[rawDataSymbol];
      replace.push([data, data]);
    }

    this.service.emit(new RawChangeSet(
      undefined, undefined, undefined, replace
    ));
    this.currentFocusItem = item;

    this.service.stop();
  }
}
