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
  ViewChild,
} from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
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

  @ViewChild('buttonGroup', { static: false, read: MatButtonToggleGroup }) buttonGroup: MatButtonToggleGroup;
  @ContentChild(ButtonGroupLabelDirective, { static: false, read: TemplateRef }) label: TemplateRef<void>;
  @ContentChild(ButtonContentDirective, { static: false, read: TemplateRef }) content: TemplateRef<ButtonContentContext>;

  private lastChangeEvent = new MatButtonToggleChange(undefined, []);
  private _valueChange = new EventEmitter<any>();

  constructor() {
    // Waits for the group's state to settle before emitting the current value.
    this.valueChange = this._valueChange.pipe(sampleTime(10));
  }

  makeContentContext(item: any, index: number): ButtonContentContext {
    return { $implicit: item, index };
  }

  selectionChanged(event: MatButtonToggleChange): void {
    const values = event.value as any[];
    let source = event.source;
    let value = values[0];

    if (!source && !this.deselectable) {
      const lastValue = this.lastChangeEvent.value;
      source = this.lastChangeEvent.source;
      value = lastValue !== undefined ? lastValue : this.value;
    } else if (event.source && values.length > 1) {
      value = event.source.value;
    }

    const changeEvent = new MatButtonToggleChange(source, value);
    const group = this.buttonGroup;

    group.value = value !== undefined ? [value] : [];
    this.lastChangeEvent = changeEvent;
    this.change.emit(changeEvent);
  }

  valueChanged(item: [any] | undefined): void {
    this._valueChange.emit(item && item[0]);
  }
}
