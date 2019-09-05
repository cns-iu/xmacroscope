import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  TrackByFunction,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

export interface ButtonContentContext {
  $implicit: any;
  index: number;
}

@Directive({ selector: '[app-button-group-label], [appButtonGroupLabel]' })
export class ButtonGroupLabelDirective { }

@Directive({ selector: '[app-button-content], [appButtonContent]' })
export class ButtonContentDirective { }

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupComponent {
  @Input() items: any[];
  @Input() value?: any;
  @Input() trackBy?: TrackByFunction<any>;
  @Input() deselectable = true;
  @Input() vertical = false;

  @Output() valueChange: Observable<any>;
  @Output() change = new EventEmitter<MatButtonToggleChange>();

  @ContentChild(ButtonGroupLabelDirective, { static: false, read: TemplateRef }) label: TemplateRef<void>;
  @ContentChild(ButtonContentDirective, { static: false, read: TemplateRef }) content: TemplateRef<ButtonContentContext>;

  private _valueChange = new EventEmitter<any>();

  constructor() {
    // Waits for the group's state to settle before emitting the current value.
    this.valueChange = this._valueChange.pipe(sampleTime(10));
  }

  makeContentContext(item: any, index: number): ButtonContentContext {
    return { $implicit: item, index };
  }

  // https://stackoverflow.com/questions/51282112/uncheck-active-angular-material-toggle-buttons-on-click/51290230
  selectionChanged(event: MatButtonToggleChange): void {
    const toggle = event.source;
    const evalue = event.value as any[];
    let singleValue = evalue[0];

    if (toggle) {
      const { buttonToggleGroup: group, value: tvalue } = toggle;
      if ((evalue.length === 0 && !this.deselectable) || evalue.some(v => v === tvalue)) {
        singleValue = tvalue;
        group.value = [tvalue];
      }
    }

    this.change.emit(new MatButtonToggleChange(toggle, singleValue));
  }

  valueChanged(item: [any] | undefined): void {
    this._valueChange.emit(item && item[0]);
  }
}
