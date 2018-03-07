import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

<<<<<<< HEAD:packages/mav/src/scatterplot/scatterplot.component.ts
import { IField, Changes } from '@ngx-dino/core';
=======
import { IField, Changes } from '../../dino-core';
import { showPersonaField } from '../../aisl-mav/shared/scatterplot-fields';
>>>>>>> f7f82e1ab70c8e993b076ad1e11c2e9d8fce4f7c:packages/aisl/src/app/mav/scatterplot/scatterplot.component.ts

@Component({
  selector: 'mav-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.sass']
})
export class ScatterplotComponent implements OnInit {
  @Input() pointIDField: IField<string>; // not user facing
  @Input() showPersonaField: IField<boolean>; // not user facing
  @Input() xFields: IField<any>[];
  @Input() yFields: IField<any>[];
  @Input() colorFields: IField<string>[];
  @Input() shapeFields: IField<string>[];
  @Input() sizeFields: IField<string>[];
  @Input() dataStream: Observable<Changes<any>>;
  @Input() xField: IField<any>;
  @Input() yField: IField<any>;
  @Input() colorField: IField<string>;
  @Input() shapeField: IField<string>;
  @Input() sizeField: IField<string>;

  constructor() { }

  ngOnInit() { }

}
