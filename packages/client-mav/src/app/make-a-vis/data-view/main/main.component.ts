import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { TableComponent } from '../table/table.component';
import { DataService, DataSource } from '../shared/data.service';

@Component({
  selector: 'app-data-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @ViewChild('table') table: TableComponent;
  dataSources: Observable<DataSource[]>;

  constructor(private dataService: DataService) {
    this.dataSources = this.dataService.dataSourcesChanged;
  }

  ngOnInit() {
  }

  restartButtonClicked() {
    this.dataService.restartStream();
    this.table.resetSelection();
  }

}
