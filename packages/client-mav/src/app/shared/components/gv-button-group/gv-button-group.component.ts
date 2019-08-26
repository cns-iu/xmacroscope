import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GraphicVariable, GraphicVariableType } from '@dvl-fw/core';
import { get, groupBy } from 'lodash';

@Component({
  selector: 'app-gv-button-group',
  templateUrl: './gvbutton-group.component.html',
  styleUrls: ['./gvbutton-group.component.scss']
})
export class GVButtonGroupComponent implements OnChanges {
  @Input() variables: GraphicVariable[];
  @Input() type: GraphicVariableType;
  @Input() label: string;
  @Input() icon: string; // FIXME: type?
  @Input() vertical = false;

  @Output() variableChange = new EventEmitter<GraphicVariable>();

  fixedVariable: GraphicVariable;
  filteredVariables: GraphicVariable[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('variables' in changes || 'type' in changes) {
      this.updateVariables();
    }
  }

  emitVariableChange(variable: GraphicVariable): void {
    this.variableChange.emit(variable || this.fixedVariable);
  }

  private updateVariables(): void {
    const fixed = 'fixed';
    const { variables, type } = this;
    const partitions = groupBy(variables, val => {
      return val.id === fixed && val.type === type ? fixed : val.type;
    });

    this.fixedVariable = get(partitions, [fixed, 0], undefined);
    this.filteredVariables = get(partitions, type, []);
  }
}
