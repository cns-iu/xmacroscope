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

  resetButtonClicked(): void {
    window.location.reload();
  }

  restartButtonClicked() {
    this.table.resetSelection();
    this.dataService.restartStream();
  }
}
