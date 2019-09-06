import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent, GraphicVariable, GraphicVariableType, Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

import { UpdateVisService } from '../../../shared/services/update-vis.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() data: Visualization;
  @ViewChild('visualization', { static: true }) visualization: DvlFwVisualizationComponent;

  constructor() { }
}
