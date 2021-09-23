import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Options, Spec } from 'ngx-vega';


@Component({
  selector: 'app-visualization-page',
  templateUrl: './visualization-page.component.html',
  styleUrls: ['./visualization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualizationPageComponent {
  @HostBinding('class') readonly clsName = 'app-visualization-page';

  @Input() headline = 'xMacroscopes';
  @Input() title?: string;
  @Input() description?: string;
  @Input() spec?: Spec;
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

  get specString(): string | undefined {
    return this.spec as string;
  }

  constructor(
  ) { }

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
}