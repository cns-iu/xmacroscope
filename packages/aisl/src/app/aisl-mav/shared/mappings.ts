export interface ShapeProp {
  shape: string;
}

export interface ColorProp {
  color: string;
}

export interface SizeProp {
  size: number;
}

export interface Mapping<T> {
  default: T;
  get(key: string): T;
  makeMapper<K extends keyof T>(item: K): (key: string) => T[K];
}

class MappingImpl<T> implements Mapping<T> {
  public readonly default: T;

  constructor(private mapping: { [key: string]: T }, defaultValue: T | string) {
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
export const genderMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  male: {
    shape: 'square',
    color: 'blue'
  },
  female: {
    shape: 'diamond',
    color: 'pink'
  },
  other: {
    shape: 'triangle-down',
    color: 'purple'
  }
}, {
    shape: 'circle',
    color: 'black'
  });

// Age group
// TODO fix shape and color
export const ageGroupMapping: Mapping<ShapeProp & ColorProp & SizeProp> = new MappingImpl({
  '07-09': {
    shape: 'circle',
    color: 'black',
    size: 66
  },
  '10-12': {
    shape: 'circle',
    color: 'black',
    size: 77
  },
  '13-18': {
    shape: 'circle',
    color: 'black',
    size: 88
  },
  '19-30': {
    shape: 'circle',
    color: 'black',
    size: 99
  },
  '31-40': {
    shape: 'circle',
    color: 'black',
    size: 110
  },
  '41-50': {
    shape: 'circle',
    color: 'black',
    size: 121
  },
  '51-60': {
    shape: 'circle',
    color: 'black',
    size: 132
  },
  '61-70': {
    shape: 'circle',
    color: 'black',
    size: 143
  },
  '70+': {
    shape: 'circle',
    color: 'black',
    size: 155
  }
}, {
    shape: 'circle',
    color: 'black',
    size: 100
  });

// Handedness
export const handednessMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  right: {
    shape: 'triangle-right',
    color: 'gold'
  },
  left: {
    shape: 'triangle-left',
    color: 'brown'
  }
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
  '1': {
    shape: 'triangle-up',
    color: '#e84949'
  },
  '2': {
    shape: 'triangle-down',
    color: '#00ff00'
  }
}, {
    shape: 'circle',
    color: 'black'
  });

// False Start
export const falseStartMapping: Mapping<ShapeProp & ColorProp> = new MappingImpl({
  'true': {
    shape: 'cross',
    color: 'red'
  },
  'false': {
    shape: 'square',
    color: 'green'
  }
}, {
    shape: 'circle',
    color: 'black'
  });
