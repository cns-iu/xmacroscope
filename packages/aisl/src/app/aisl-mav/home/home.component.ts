import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { BoundField } from '@ngx-dino/core';

import { ScatterplotComponent } from '../scatterplot/scatterplot.component';
import { GeomapComponent } from '../geomap/geomap.component';
import { RunFields } from '../fields';

@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  fields = RunFields;
  sizeField = RunFields.persona.age_group;
  colorField = RunFields.persona.gender;

  constructor() { }
  ngOnInit() { }
}
