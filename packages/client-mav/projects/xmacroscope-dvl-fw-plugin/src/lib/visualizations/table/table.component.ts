import { Component, OnInit, Input } from '@angular/core';
import { Visualization } from '@dvl-fw/core';

@Component({
  selector: 'mav-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Visualization;

  dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
