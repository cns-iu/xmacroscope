import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Options, Spec } from 'ngx-vega';
import { VisualizationSpec } from 'vega-embed';
import { createScatterplot, VisControls } from '../../../../assets/pages/vis3-scatterplot/scatterplot.vl';


@Component({
  selector: 'app-visualization-page',
  templateUrl: './visualization-page.component.html',
  styleUrls: ['./visualization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizationPageComponent implements OnChanges {
  @HostBinding('class') readonly clsName = 'app-visualization-page';

  @Input() headline = 'xMacroscopes';
  @Input() title?: string;
  @Input() description?: string;
  @Input() spec?: Spec | VisualizationSpec;
  @Input() options: Options = { renderer: 'canvas', actions: true, width: 1268 };
  @Input() content?: string;
  @Input() sql?: string;
  @Input() csv?: string;

  csvSpinnerActive = true;
  spinners = {
    sql: true,
    csv: true,
    spec: true
  };
  loadingVegaVisualization = true;

  visControls: VisControls = {
    xAxis: 'Time (seconds)',
    yAxis: 'height'
  };

  get specString(): string | undefined {
    return this.spec as string;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('title' in changes) {
      this.spec = this.title === 'Scatterplot' ? createScatterplot(this.visControls) : this.spec;
    }
  }

  disableSpinner(key: string): void {
    this.spinners = {
      ...this.spinners,
      [key]: false
    };
  }

  enableSpinner(key: string): void {
    this.spinners = {
      ...this.spinners,
      [key]: true
    };
  }

  update(value: string, variable: string): void {
    this.visControls = { ...this.visControls, [variable]: value };
    this.spec = createScatterplot(this.visControls);
  }
}
