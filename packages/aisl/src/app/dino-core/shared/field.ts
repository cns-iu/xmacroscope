export interface IField<T> {
  name: string;
  label: string;
  datatype?: string;
  kind?: string;

  get(item: any): T;
}

export class Field<T> implements IField<T> {
  constructor(
    public name: string,
    public label: string,
    public accessor?: (item: any) => any | T,
    public transform?: (value: any | T) => T
  ) { }

  get(item: any): T {
    item = item || {};
    const value = this.accessor ? this.accessor(item) : item[this.name];
    return value != null && this.transform ? this.transform(value) : value as T;
  }
}
