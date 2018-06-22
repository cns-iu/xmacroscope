import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { BoundField } from '@ngx-dino/core';

import { ScatterplotComponent } from '../scatterplot/scatterplot.component';
import { GeomapComponent } from '../geomap/geomap.component';

@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  @ViewChild(ScatterplotComponent) scatterplot: ScatterplotComponent;
  @ViewChild(GeomapComponent) geomap: GeomapComponent;
  @Input() fields: BoundField<any>[];

  constructor() { }

  ngOnInit() {
    this.fields = this.scatterplot.fields
      .map((f) => f.getBoundField());
  }

  setFields(index: number) {
    if (index === 1) {
      this.fields = this.scatterplot.fields
        .map((f) => f.getBoundField());
    } else if (index === 2) {
      this.fields = this.geomap.fields
        .map((f) => f.getBoundField());
    }
  }
}
