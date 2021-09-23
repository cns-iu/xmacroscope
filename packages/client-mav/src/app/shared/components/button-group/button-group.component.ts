import {
  ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, TrackByFunction,
  ViewChild,
} from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

export interface ButtonContentContext {
  $implicit: unknown;
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
  @Input() items!: unknown[];
  @Input() value?: unknown;
  @Input() trackBy?: TrackByFunction<unknown>;
  @Input() deselectable = true;
  @Input() vertical = false;

  @Output() readonly valueChange: Observable<unknown>;
  //eslint-disable-next-line @angular-eslint/no-output-native
  @Output() readonly change = new EventEmitter<MatButtonToggleChange>();

  @ViewChild('buttonGroup', { read: MatButtonToggleGroup }) buttonGroup!: MatButtonToggleGroup;
  @ContentChild(ButtonGroupLabelDirective, { read: TemplateRef }) label!: TemplateRef<void>;
  @ContentChild(ButtonContentDirective, { read: TemplateRef }) content!: TemplateRef<ButtonContentContext>;

  private lastChangeEvent = new MatButtonToggleChange(undefined as unknown as MatButtonToggle, undefined);
  private _valueChange = new EventEmitter<unknown>();

  constructor() {
    // Waits for the group's state to settle before emitting the current value.
    this.valueChange = this._valueChange.pipe(sampleTime(10));
  }

  makeContentContext(item: unknown, index: number): ButtonContentContext {
    return { $implicit: item, index };
  }

  selectionChanged(event: MatButtonToggleChange): void {
    const values = event.value as unknown[];
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

  valueChanged(item: [unknown] | undefined): void {
    this._valueChange.emit(item?.[0]);
  }
}
