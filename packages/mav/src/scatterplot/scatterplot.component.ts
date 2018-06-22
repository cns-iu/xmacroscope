import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BoundField, RawChangeSet } from '@ngx-dino/core';

@Component({
  selector: 'mav-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass']
})
export class ScatterplotComponent implements OnInit {
  @Input() pointIdField: BoundField<string>; // not user facing
  
  @Input() xField: BoundField<any>;
  @Input() yField: BoundField<any>;
  
  @Input() colorField: BoundField<string>;
  @Input() shapeField: BoundField<string>;
  @Input() sizeField: BoundField<string>;
  @Input() strokeColorField: BoundField<boolean>; // not user facing

  @Input() xFields: BoundField<any>[];
  @Input() yFields: BoundField<any>[];
  
  @Input() colorFields: BoundField<string>[];
  @Input() shapeFields: BoundField<string>[];
  @Input() sizeFields: BoundField<string>[];
  
  @Input() dataStream: Observable<RawChangeSet<any>>;

  @Input() width: number;
  @Input() height: number;
  @Input() autoresize: boolean;
  
  constructor() { }

  ngOnInit() { }

}
