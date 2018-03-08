import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ScatterplotComponent } from '../scatterplot/scatterplot.component';
import { GeomapComponent } from '../geomap/geomap.component';
import { IField } from '@ngx-dino/core';


@Component({
  selector: 'aisl-mav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  @ViewChild(ScatterplotComponent) scatterplot: ScatterplotComponent;
  @ViewChild(GeomapComponent) geomap: GeomapComponent;
  @Input() fields;

  constructor() { }

  ngOnInit() {
    this.fields = this.scatterplot.fields;
  }

  setFields(index: number) {
    if (index === 0) {
      this.fields = this.scatterplot.fields;
    } else if (index === 1) {
      this.fields = this.geomap.fields;
    }
  }
}
