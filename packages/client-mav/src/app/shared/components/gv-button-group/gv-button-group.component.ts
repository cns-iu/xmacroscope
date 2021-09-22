import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Pipe,
  PipeTransform,
  SimpleChanges,
} from '@angular/core';
import { GraphicVariable, GraphicVariableType } from '@dvl-fw/core';
import { get, groupBy, includes, replace } from 'lodash';

@Pipe({ name: 'removeUnits' })
export class RemoveUnitsPipe implements PipeTransform {
  transform(value: string): string {
    return replace(value, /\s*\(.*\)\s*$/, '');
  }
}

@Component({
  selector: 'app-gv-button-group',
  templateUrl: './gv-button-group.component.html',
  styleUrls: ['./gv-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GVButtonGroupComponent implements OnChanges {
  @Input() variables: GraphicVariable[];
  @Input() type: GraphicVariableType;
  @Input() selected?: GraphicVariable;
  @Input() defaultVariable?: GraphicVariable;
  @Input() label?: string;
  @Input() icon?: string;
  @Input() vertical = false;

  @Output() variableChange = new EventEmitter<GraphicVariable>();

  fixedVariable: GraphicVariable;
  filteredVariables: GraphicVariable[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('variables' in changes || 'type' in changes) {
      this.updateVariables();
    }
  }

  isDeselectable(): boolean {
    return !includes(this.filteredVariables, this.defaultVariable);
  }

  variableChanged(variable: GraphicVariable): void {
    this.variableChange.emit(variable || this.defaultVariable || this.fixedVariable);
  }

  private updateVariables(): void {
    const fixed = 'fixed';
    const { variables, type } = this;
    const partitions = groupBy(variables, val => val.id === fixed && val.type === type ? fixed : val.type);

    this.fixedVariable = get(partitions, [fixed, 0], undefined);
    this.filteredVariables = get(partitions, type, []);
  }
}
