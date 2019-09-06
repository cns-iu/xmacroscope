import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Visualization } from '@dvl-fw/core';
import { keyBy } from 'lodash';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

@Component({
  selector: 'app-visualization-view-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  @Input() active: string;

  readonly visualizations: { [template: string]: Visualization };
  get data(): Visualization {
    return this.visualizations[this.active];
  }

  constructor(dataService: XMacroscopeDataService) {
    this.visualizations = keyBy(dataService.project.visualizations, 'id');
  }
}
