import { BoundField, Field, simpleField, DataType, Operator } from '@ngx-dino/core';
import { access } from '@ngx-dino/core/src/operators/methods/extracting/access';
import { chain } from '@ngx-dino/core/src/operators/methods/grouping/chain';
import { map } from '@ngx-dino/core/src/operators/methods/transforming/map';

// Fields are assumed to be pulled from a RunData instance in AISL
import { RunData } from 'aisl-api';

// Export for ease of use in field files
export { access } from '@ngx-dino/core/src/operators/methods/extracting/access';
export { chain } from '@ngx-dino/core/src/operators/methods/grouping/chain';
export { combine } from '@ngx-dino/core/src/operators/methods/grouping/combine';
export { map } from '@ngx-dino/core/src/operators/methods/transforming/map';
export { identity } from '@ngx-dino/core/src/operators/methods/extracting/identity';
export { lookup } from '@ngx-dino/core/src/operators/methods/extracting/lookup';
export { constant } from '@ngx-dino/core/src/operators/methods/generating/constant';
export { autoId } from '@ngx-dino/core/src/operators/methods/generating/auto-id';


export function conditionalField<T>(
  op: Operator<any, boolean>, trueField: Field<T>, falseField: Field<T>, metadataField: Field<T>
): Field<T> {
  const mapping: {[id: string]: Operator<any, T>} = {};
  const wrap = function(key) {
    const trueBoundField = trueField.getBoundField(key);
    const falseBoundField = falseField.getBoundField(key);
    return map<any, T>(
        (item) => {
          return (op.get(item) ? trueBoundField : falseBoundField).get(item);
        }
      );
  };

  for (const key of trueField.getBoundFieldIds().toArray()) {
    if (falseField.mapping.has(key)) {
      mapping[key] = wrap(key);
    } else {
      mapping[key] = trueField.getBoundField(key).operator;
    }
  }
  for (const key of falseField.getBoundFieldIds().toArray()) {
    if (trueField.mapping.has(key)) {
      mapping[key] = wrap(key);
    } else {
      mapping[key] = falseField.getBoundField(key).operator;
    }
  }

  return new Field<T>({
    id: metadataField.id,
    label: metadataField.label,
    dataType: metadataField.dataType,
    mapping: mapping
  });
}

export const showPersonaOp = map<any, boolean>((item) => !!item.showPersona);

export function wrapFieldsForShowPersona<T>(srcField: Field<T>, listOfFields: Field<T>[]) {
  listOfFields.forEach((field, index, arr) => {
    if (field !== srcField) {
      arr[index] = conditionalField(showPersonaOp, srcField, field, field);
    }
  });
}
