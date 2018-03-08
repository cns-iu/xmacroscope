import { IField, Field } from '@ngx-dino/core';
import {
  genderMapping, ageGroupMapping, handednessMapping,
  athleticismMapping, laneMapping, falseStartMapping
} from './mappings';

export interface FieldList<T> extends Array<IField<T>> {
  default: IField<T>;
}

export class ShowPersonaField<T> extends Field<T> {
  constructor(private field1: IField<T>, private field2: IField<T>) {
    super(field2);
    this['get'] = this.realGet.bind(this);
  }

  realGet(item: any): T {
    if (item.showPersona) {
      return this.field1.get(item);
    } else {
      return this.field2.get(item);
    }
  }
}

export function wrapFieldsForShowPersona<T>(srcField: IField<T>, listOfFields: IField<T>[]) {
  listOfFields.forEach((field, index, arr) => {
    if (field !== srcField) {
      arr[index] = new ShowPersonaField(srcField, field);
    }
  });
}

export function makeFieldList<T>(
  fields: IField<T>[], defaultIndex: number = 0
): FieldList<T> {
  // This should be a class but typescript can not transpile super calls to
  // builtins correctly. Therefore we cannot extend Array. See:
  // https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
  const result: FieldList<T> = fields.slice() as any;
  Object.defineProperties(result, {
    default: {
      get() {
        return this[defaultIndex];
      }
    }
  });

  return result;
}


// Name fields
const nameFields: IField<string>[] = [
  new Field<string>({
    name: 'persona.name', label: 'Name', default: 'Unknown'
  }),
  new Field<string>({
    name: 'avatar.name', label: 'Avatar', default: 'Unknown'
  })
];

export const defaultNameFields = makeFieldList(nameFields);

const personaColorField =  new Field({
  name: 'persona.color', label: 'Color', default: '#696969'
});
// Color fields
const colorFields: IField<string>[] = [
  personaColorField,
  new Field({
    name: 'persona.gender', label: 'Gender', default: '#696969',
    transform: genderMapping.makeMapper('color')
  }),
  new Field({
    name: 'persona.age_group', label: 'Age Group', default: '#696969',
    transform: ageGroupMapping.makeMapper('color')
  }),
  new Field({
    name: 'persona.handedness', label: 'Handedness', default: '#696969',
    transform: handednessMapping.makeMapper('color')
  }),
  // Not available yet
  /*new Field({
    name: 'persona.athleticism', label: 'Runner\'s Athleticism',
    default: '#696969', transform: athleticismMapping.makeMapper('color')
  }),*/
  new Field({
    name: 'lane', label: 'Run Lane', default: '#696969',
    transform: laneMapping.makeMapper('color')
  }),
  new Field({
    name: 'falseStart', label: 'False Start', default: '#696969',
    transform: falseStartMapping.makeMapper('color')
  })
];
wrapFieldsForShowPersona(personaColorField, colorFields);

// State color fields
export const defaultStateColorFields = makeFieldList(colorFields, 0);

// Point color fields
export const defaultPointColorFields = makeFieldList(colorFields, 1);

const personaShapeField = new Field({
  name: 'persona.icon', label: 'Shape', default: 'star'
});
// Shape fields
const shapeFields: IField<string>[] = [
  personaShapeField,
  new Field({
    name: 'fixed', label: 'Fixed Shape', accessor: () => 'square'
  }),
  new Field({
    name: 'persona.gender', label: 'Gender', default: 'circle',
    transform: genderMapping.makeMapper('shape')
  }),
  new Field({
    name: 'persona.age_group', label: 'Age Group', default: 'circle',
    transform: ageGroupMapping.makeMapper('shape')
  }),
  new Field({
    name: 'persona.handedness', label: 'Handedness', default: 'circle',
    transform: handednessMapping.makeMapper('shape')
  }),
  // Not available yet
  /*new Field({
    name: 'persona.athleticism', label: 'Runner\'s Athleticism',
    default: 'circle', transform: athleticismMapping.makeMapper('shape')
  }),*/
  new Field({
    name: 'lane', label: 'Run Lane', default: 'circle',
    transform: laneMapping.makeMapper('shape')
  }),
  new Field({
    name: 'falseStart', label: 'False Start', default: 'circle',
    transform: falseStartMapping.makeMapper('shape')
  })
];
wrapFieldsForShowPersona(personaShapeField, shapeFields);

// Point shape fields
export const defaultPointShapeFields = makeFieldList(shapeFields, 3);

/* internal field - not user facing */
export class PersonastrokeColorField<T> extends Field<T> {
  constructor(parent: any, fieldName: string) {
    super({
      name: 'showPersona', label: 'Stroke', datatype: 'boolean',
      accessor: (item) => item.showPersona ? 'green' : parent[fieldName].get(item)
    });
  }
}
