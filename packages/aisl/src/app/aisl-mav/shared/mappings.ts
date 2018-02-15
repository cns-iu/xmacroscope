export interface ShapeProp {
  shape: string;
}

export interface ColorProp {
  color: string;
}

export interface Mapping<T> {
  default: T;
  get(key: string): T;
  makeMapper<K extends keyof T>(item: K): (key: string) => T[K];
}

class MappingImpl<T> implements Mapping<T> {
  public readonly default: T;

  constructor(private mapping: {[key: string]: T}, defaultValue: T | string) {
    if (typeof defaultValue === 'string') {
      this.default = mapping[defaultValue];
    } else {
      this.default = defaultValue;
    }
  }

  get(key: string): T {
    const item = this.mapping[key];
    return item !== undefined ? item : this.default;
  }

  makeMapper<K extends keyof T>(item: K): (key: string) => T[K] {
    return (key: string): T[K] => {
      return this.get(key)[item];
    };
  }
}

// Gender
// TODO fix shape
export const genderMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  male: {
    shape: 'circle',
    color: 'blue'
  },
  female: {
    shape: 'circle',
    color: 'pink'
  },
  other: {
    shape: 'circle',
    color: 'purple'
  }
}, {
  shape: 'circle',
  color: 'black'
});

// Age group
export const ageGroupMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  // TODO
}, {
  shape: 'circle',
  color: 'black'
});

// Handedness
export const handednessMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  // TODO
}, {
  shape: 'circle',
  color: 'black'
});

// Athleticism
export const athleticismMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  // TODO
}, {
  shape: 'circle',
  color: 'black'
});

// Lane
export const laneMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  // TODO
}, {
  shape: 'circle',
  color: 'black'
});

// False Start
// TODO fix shapes
export const falseStartMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  'true': {
    shape: 'circle',
    color: 'red'
  },
  'false': {
    shape: 'circle',
    color: 'green'
  }
}, {
  shape: 'circle',
  color: 'black'
});
