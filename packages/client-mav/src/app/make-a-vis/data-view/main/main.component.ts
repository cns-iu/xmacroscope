import { Component, OnInit } from '@angular/core';

import { DataService, DataSource } from '../shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  dataSources: Observable<DataSource[]>;

  constructor(private dataService: DataService) {
    this.dataSources = this.dataService.dataSourcesChanged;
    this.dataSources.subscribe(console.log); // TODO: temporary for debugging
  }

  ngOnInit() {
  }

}
