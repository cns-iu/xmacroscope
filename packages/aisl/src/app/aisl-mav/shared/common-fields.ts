import { Seq, Map } from 'immutable';

import { BoundField, Field, simpleField, DataType, Operator } from '@ngx-dino/core';

import { access } from '@ngx-dino/core/src/operators/methods/extracting/access';
import { chain } from '@ngx-dino/core/src/operators/methods/grouping/chain';
import { map } from '@ngx-dino/core/src/operators/methods/transforming/map';

import {
  genderMapping, ageGroupMapping, handednessMapping,
  laneMapping, falseStartMapping
} from './mappings';

// Field list type
export interface FieldList<T> extends Array<Field<T>> {
  default: Field<T>;
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

export const showPersonaOp = map<any, boolean>((item) => !!item.showPersona);
export function wrapFieldsForShowPersona<T>(srcField: Field<T>, listOfFields: Field<T>[]) {
  listOfFields.forEach((field, index, arr) => {
    if (field !== srcField) {
      arr[index] = conditionalField(showPersonaOp, srcField, field, field);
    }
  });
}

export function makeFieldList<T>(
  fields: Field<T>[], defaultIndex: number = 0
): FieldList<T> {
  // This should be a class but typescript can not transpile super calls to
  // builtins correctly. Therefore we cannot extend Array. See:
  // https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
  const result: FieldList<T> = fields.slice() as any;
  Object.defineProperties(result, {
    default: {
      value: result[defaultIndex]
    }
  });

  return result;
}

// Utility
// FIXME add sorting and grouping options
export function combineUnique<T>(...fields: FieldList<T>[]): Field<T>[] {
  if (fields.length === 0) {
    return [];
  }

  const fieldSeq = Seq.Indexed<Field<T>>().concat(...fields);
  const sortedSeq = fieldSeq.sortBy((field) => field.label);
  const groupedSeq = sortedSeq.groupBy((field) => field.label);
  const groups = groupedSeq.valueSeq();
  const uniqueSeq = groups.map((group) => group.first());

  return uniqueSeq.toArray();
}

// Name fields
export const nameFields = makeFieldList<string>(
  [
    simpleField<string>({
      bfieldId: 'name',
      label: 'Name',

      operator: access('persona.name', 'Unknown')
    }),

    simpleField<string>({
      bfieldId: 'avatarName',
      label: 'Avatar',

      operator: access('avatar.name', 'Unknown')
    })
  ]
);

export const personaColorField: Field<string> =  simpleField<string>({
  bfieldId: 'color',
  label: 'Color',

  operator: access('persona.color', '#696969')
});

export const stateColorField = simpleField({
  bfieldId: 'ageGroup',
  label: 'Age Group',

  operator: chain(
    access('persona.age_group', '#696969'),
    map((a) => ageGroupMapping.makeMapper('color'))
  )
});

// Color fields
const colorFields: Field<any>[] = [
  personaColorField,

  simpleField({
    bfieldId: 'gender',
    label: 'Gender',

    operator: chain(
      access('persona.gender', '#696969'),
      map((g) => genderMapping.makeMapper('color'))
    ),
  }),

  simpleField({
    bfieldId: 'ageGroup',
    label: 'Age Group',

    operator: chain(
      access('persona.age_group', '#696969'),
      map((a) => ageGroupMapping.makeMapper('color'))
    )
  }),

  simpleField({
    bfieldId: 'handedness',
    label: 'Handedness',

    operator: chain(
      access('persona.handedness', '#696969'),
      map((h) => handednessMapping.makeMapper('color'))
    )
  }),

  simpleField({
    bfieldId: 'runLane',
    label: 'Run Lane',

    operator: chain(
      access('lane', '#696969'),
      map((l) => laneMapping.makeMapper('color'))
    )
  })
];

// State color fields
export const stateColorFields = makeFieldList(colorFields, 0);
// Point color fields
export const pointColorFields = makeFieldList(colorFields, 1);

wrapFieldsForShowPersona(personaColorField, colorFields);


const personaShapeField: Field<any> = simpleField({ // TODO typings
  bfieldId: 'shape',
    label: 'Shape',

    operator: chain(
      access('persona.icon', 'star'),
      map((l) => laneMapping.makeMapper('color'))
    )
});

export const pointShapeField = simpleField({
  bfieldId: 'ageGroup',
  label: 'Age Group',

  operator: chain(
    access('persona.age_group'),
    map((g) => ageGroupMapping.makeMapper('shape')) // TODO default shape
  )
});

// Shape fields
const shapeFields: Field<any>[] = [
  personaShapeField,

  simpleField({
    bfieldId: 'fixedShape',
    label: 'Fixed Shape',

    operator: map(() => 'square')
  }),

  simpleField({
    bfieldId: 'gender',
    label: 'Gender',

    operator: chain(
      access('persona.gender'),
      map((g) => genderMapping.makeMapper('shape')) // TODO default shape
    )
  }),

  simpleField({
    bfieldId: 'ageGroup',
    label: 'Age Group',

    operator: chain(
      access('persona.age_group'),
      map((g) => ageGroupMapping.makeMapper('shape')) // TODO default shape
    )
  }),

  simpleField({
    bfieldId: 'handedness',
    label: 'Handedness',

    operator: chain(
      access('persona.handedness'),
      map((g) => handednessMapping.makeMapper('shape')) // TODO default shape
    )
  }),

  simpleField({
    bfieldId: 'runLane',
    label: 'Run Lane',

    operator: chain(
      access('lane'),
      map((g) => laneMapping.makeMapper('shape')) // TODO default shape
    )
  }),

  simpleField({
    bfieldId: 'falseStart',
    label: 'False Start',

    operator: chain(
      access('falseStart'),
      map((g) => falseStartMapping.makeMapper('shape')) // TODO default shape
    )
  })
];

// Point shape fields
export const pointShapeFields = makeFieldList(shapeFields, 3);

wrapFieldsForShowPersona(personaShapeField, shapeFields);

const defaultSymbol = Field.defaultSymbol;

/* internal field - not user facing */
export function personaStrokeColorField(parent: any, fieldName: string): Field<string> {
  return simpleField({
    id: 'showPersona', label: 'Stroke', dataType: DataType.Boolean,
    operator: map((item) => {
      return item
    ? item.showPersona ? 'black' : parent[fieldName].get(item)
    : 'black';
    })
  });
}
