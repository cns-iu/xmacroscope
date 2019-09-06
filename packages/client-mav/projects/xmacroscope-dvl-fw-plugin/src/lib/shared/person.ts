import { areaSizeScale } from '@dvl-fw/core';
import { access, chain, lookup, map, Operand, Operator } from '@ngx-dino/core';
import { assignIn, transform } from 'lodash';


export const allShapes: string[] = [
  'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'
];

export const images = {
  'turtle': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpgoAjRqiVKeCis1qAcyt91s1gsdjIvkMBqLXaR777dXB51sc/Z41QSX4fliUx+A3KBXylUCYyAWi2Fj24Rh56CFZqUVpmbnXodmJ2WnJCZopOipZahr5merIwRqa8XqqIasaWwsagcvqsPsq6Mt7FSyMEBdAXGlcN5U82Yy2HCjtvLmwRl2I6MxHlm09XLtxTA3hJ8N8RfF3QD6DhZJes7d4cmk14Y7/oL/f0O8v3LSA/9gR5FfvoMKFDBs6fAgxosSJFCtavIgxo8YPjRw7evwIMqTIkSRLjiwAADs=',
  'squirrel': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Nopzg2YuzPrT7uIXiaHymSaaqcrboCofu/MW2RefezbP6T+n1gESJkFdMHmPJ5nLVdD5H0ehUVJVeNVnt9tL1fh1h5fhRFp8TafN60Xa/EfHi3Ff/3dl54J7Tp/dXEpgzSFg4cxiQaHhoh5i1CAlYtcjohyeXAYIkqEmE1WkTyrCJMeGpg5a5EXTzCRHL+Uq6ikMj2qGqiNqiW8N0S7sr42LrODZLMrxFmdK8ZKkSPRQGnWxd6Jur3Thqmi38XQv6i0y+wyeOnX5CV03lngc1T99uH4ef38bMXyfvH0BjAgdyKWiQGMJ+BxcydLXD4SlqEpfBqMgOHcaDYNI2cnzisRjIkOUIkoyn8GQ3YCpXmmzZiyXMd/5mHttXoVKugs5+IVwjkuckoY+I/vk5VOAlo4OYHv13KZK9qFLTUa367apOclqxbkvKD2zYokrFzutKx2satOsCsVX7EC3Xt1nfYvpqt5HdrTTvutwLNycZdYDhMCJU+IjgxIzPFAAAOw==',
  'cheetah': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAALpjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Afgis1WEdmut+u51r7kMvYClpnX7HYZ5o7L2QetaY7Pp70kvT9fl/bxRzjHxddRqBiX8JWxCOmm8GYVaSm3cKmp6bAYuOkJoZcJiplpsSZaSqez6vjjKibkSoSJV+RIZmBam8vHmAQJ9VfFuxXAevz5qnyo27yMCI1MOZ16fEtVnczEPFm9dDbhHSw7fY6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAs2KQAAOw==',
};

interface GVData {
  id: string;
  label: string;
  color: string;
  shape: string;
  icon: string;
  areaSize: number;
  axis: string | number;
}

export const icons: string[] = [
  'ico-brat', 'ico-cool', 'ico-happy', 'ico-silly', 'ico-surprise', 'ico-updsidedown'
];
export const opponents = [
  { label: 'Turtle', color: '#4527a0', shape: 'circle', icon: images['turtle'] },
  { label: 'Squirrel', color: '#f7d97b', shape: 'triangle', icon: images['squirrel'] },
  { label: 'Cheetah', color: '#f44336', shape: 'square', icon: images['cheetah'] },
];
export const shoes = [
  { label: 'Paws', color: '#4527a0', shape: 'circle' },
  { label: 'Wheels', color: '#1e88e5', shape: 'triangle' },
  { label: 'Sneakers', color: '#81c784', shape: 'square' },
  { label: 'Casual', color: '#fff9c4', shape: 'diamond' },
  { label: 'Dress', color: '#f7d97b', shape: 'wye' },
  { label: 'Heels', color: '#f44336', shape: 'cross' },
];

const unknownGVData: Partial<GVData> = {label: 'Unknown', color: '#000000', shape: 'square'};
function createLookup(data: Partial<GVData>[], unknown = unknownGVData): Operator<any, Partial<GVData>> {
  return lookup(transform(data, (result, d) => {
    if (d.label) {
      result[d.label] = d;
      result[d.label.toLowerCase()] = d;
    }
    if (d.id) { result[d.id] = d; }
  }, {}), unknown);
}


// @dynamic
export class Person {
  id: string;
  icon: string;
  age: number;
  height: number;
  opponent: string;
  shoes: string;
  zipCode: string;

  state: string; // Derived from zipCode
  latitude: number;
  longitude: number;

  constructor(data: any = {}) {
    Object.assign(this, data);
  }

  @Operand(map<Person, string>(s => `${s.icon}`))
  label: string;

  @Operand(chain(access('icon'), lookup(images, images['turtle'])))
  iconShape: string;

  @Operand(chain(access('age'), areaSizeScale.quantitative([0, 120])))
  ageAreaSize: number;

  @Operand(chain(access('height'), areaSizeScale.quantitative([12, 96])))
  heightAreaSize: number;

  @Operand(chain(access('opponent'), createLookup(opponents)))
  Opponent: Partial<GVData>;

  @Operand(chain(access('shoes'), createLookup(shoes)))
  Shoe: Partial<GVData>;

  toJSON(): any {
    return assignIn({}, this);
  }
}
