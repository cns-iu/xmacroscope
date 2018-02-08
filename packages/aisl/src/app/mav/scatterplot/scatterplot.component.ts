import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IField, Changes } from '../../dino-core';

@Component({
  selector: 'mav-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass']
})
export class ScatterplotComponent implements OnInit {
  @Input() xFields: IField<any>[];
  @Input() yFields: IField<any>[];
  @Input() dataStream: Observable<Changes<any>>;
  @Input() xField: IField<any>;
  @Input() yField: IField<any>;

  constructor() { }

  ngOnInit() { }

}
