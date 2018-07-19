import { BoundField, Field, simpleField, DataType, Operator } from '@ngx-dino/core';
import { access } from '@ngx-dino/core/src/operators/methods/extracting/access';
import { map } from '@ngx-dino/core/src/operators/methods/transforming/map';
import { constant } from '@ngx-dino/core/src/operators/methods/generating/constant';
import { combine } from '@ngx-dino/core/src/operators/methods/grouping/combine';
import { chain } from '@ngx-dino/core/src/operators/methods/grouping/chain';

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

import { Colorscale } from './color-scale';
import { Sizescale } from './size-scale';

export const greyscale = new Colorscale('#bdbdbd', '#000000', '#ffffff', -51);
export const sizeRange = [50, 250];
export const sizescale = new Sizescale(sizeRange[0], sizeRange[1], 5, 'linear'); // TBD TODO

export function mappingWithDefault(mapping: any, defaultKey: string): any {
  mapping[Field.defaultSymbol] = mapping[defaultKey];
  return mapping;
}

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

export const showPersonaOp = map<any, boolean>((item: any) => item && !!item.showPersona);
export const persona = new Field({
  id: 'persona',
  label: 'Select Runner',
  dataType: DataType.String,
  mapping: {
    'shape': access('persona.icon'),
    'color': access('persona.color'),
    'strokeColor': access('persona.color'),
    'size': constant(250),
    'label': combine({
      'shape': access('persona.icon'),
      'color': access('persona.color'),
      'strokeColor': access('persona.color'),
      'size': constant(250),
    })
  }
});

export function wrapFieldForShowPersona<T>(field: Field<T>): Field<T> {
  if (field === persona) {
    return field;
  }
  const wrap = function(key) {
    const personaOp = persona.getBoundField(key).operator;
    const fieldOp = field.getBoundField(key).operator;
    return chain(
      combine([showPersonaOp, personaOp, fieldOp]),
      map((data) => data[0] ? data[1] : data[2])
    );
  };

  const mapping = {};
  for (const key of persona.getBoundFieldIds().toArray()) {
    if (field.mapping.has(key)) {
      mapping[key] = wrap(key);
    }
  }
  for (const key of field.getBoundFieldIds().toArray()) {
    if (!mapping.hasOwnProperty(key)) {
      mapping[key] = field.getBoundField(key).operator;
    }
  }
  if (field.getBoundField()) {
    mapping[Field.defaultSymbol] = field.getBoundField().operator;
  }

  return new Field<T>({
    id: field.id,
    label: field.label,
    dataType: field.dataType,
    mapping: mapping
  });
}

export function wrapFieldsForShowPersona(fields: Field<any>[]): Field<any>[] {
  return fields.map(wrapFieldForShowPersona);
}
