import { Component, OnInit, Input } from '@angular/core';
import { Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-scatter-graph',
  templateUrl: './scatter-graph.component.html',
  styleUrls: ['./scatter-graph.component.sass']
})
export class ScatterGraphComponent implements OnInit {
  @Input() data: Visualization; // FIXME: Change data type later.
  constructor(public dataService: XMacroscopeDataService) {

   }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data.graphicSymbols.points.graphicVariables);
  }

}
