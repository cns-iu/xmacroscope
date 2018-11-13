import { Injectable } from '@angular/core';
import { DataVariable, GraphicVariable, Project, RecordSet } from '@dvl-fw/core';
import { access, combine, RawChangeSet, Operator } from '@ngx-dino/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

export interface DataSource {
  id: string;
  label: string;
  columns: DataVariable[];
  data: any[];
  records: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSourcesChange = new BehaviorSubject<DataSource[]>(undefined);
  dataSourcesChanged: Observable<DataSource[]> = this.dataSourcesChange.asObservable();
  maxRecords = 50;

  constructor(private dataService: XMacroscopeDataService) {
    const project = this.dataService.project;
    if (project && project.recordSets) {
      const dataSources = project.recordSets.map((recordSet: RecordSet) => {
        const dataSource: DataSource = {} as DataSource;

        dataSource.id = recordSet.id || '';
        dataSource.label = recordSet.label || '';
        dataSource.columns = recordSet.dataVariables;

        const operator = this.getDataMappingOperator(recordSet.dataVariables, project.graphicVariables, recordSet.id);
        console.log(operator);

        dataSource.data = [];
        dataSource.records = [];
        recordSet.defaultRecordStream.asObservable().subscribe((changeSet: RawChangeSet<any>) => {
          dataSource.records = dataSource.records.filter((e: any) => !changeSet.remove
            .some((obj: any) => obj.id === e.id)).concat(changeSet.insert);
          dataSource.data = dataSource.records.map(operator.getter);
        });

        if (dataSource.data.length > 1) {
          dataSource.label = recordSet.labelPlural;
        }
        return dataSource;
      });
      this.dataSourcesChange.next(dataSources);
    } else {
      this.dataSourcesChange.next([]);
    }
  }

  getDataMappingOperator(dataVariables: DataVariable[], graphicVariables: GraphicVariable[], recordSetId: string): Operator<any, any> {
    const mapping = {};
    dataVariables.forEach((dv: DataVariable) => {
      const filter = graphicVariables.filter((gv: GraphicVariable) => {
        if ((gv.dataVariable.id === dv.id) && (gv.recordSet.id === recordSetId)
          && (gv.type === 'text' || gv.type === 'label')) {
          return gv;
        }
      });
      if (filter.length) {
        mapping[dv.id] = filter[0].asBoundField().operator;
      } else {
        mapping[dv.id] = access<any>(dv.id, '');
      }
    });

    return combine(mapping);
  }
}
