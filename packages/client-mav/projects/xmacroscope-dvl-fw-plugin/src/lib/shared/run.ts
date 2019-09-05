import { assignIn, get, pick } from 'lodash';
import { Operand, map, constant, chain, access, combine, Operator } from '@ngx-dino/core';
import { areaSizeScale } from '@dvl-fw/core';

import { Person } from './person';


const images = {
  'cheetah': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAALpjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Afgis1WEdmut+u51r7kMvYClpnX7HYZ5o7L2QetaY7Pp70kvT9fl/bxRzjHxddRqBiX8JWxCOmm8GYVaSm3cKmp6bAYuOkJoZcJiplpsSZaSqez6vjjKibkSoSJV+RIZmBam8vHmAQJ9VfFuxXAevz5qnyo27yMCI1MOZ16fEtVnczEPFm9dDbhHSw7fY6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAs2KQAAOw==',
  'turtle': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpgoAjRqiVKeCis1qAcyt91s1gsdjIvkMBqLXaR777dXB51sc/Z41QSX4fliUx+A3KBXylUCYyAWi2Fj24Rh56CFZqUVpmbnXodmJ2WnJCZopOipZahr5merIwRqa8XqqIasaWwsagcvqsPsq6Mt7FSyMEBdAXGlcN5U82Yy2HCjtvLmwRl2I6MxHlm09XLtxTA3hJ8N8RfF3QD6DhZJes7d4cmk14Y7/oL/f0O8v3LSA/9gR5FfvoMKFDBs6fAgxosSJFCtavIgxo8YPjRw7evwIMqTIkSRLjiwAADs=',
  'squirrel': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Nopzg2YuzPrT7uIXiaHymSaaqcrboCofu/MW2RefezbP6T+n1gESJkFdMHmPJ5nLVdD5H0ehUVJVeNVnt9tL1fh1h5fhRFp8TafN60Xa/EfHi3Ff/3dl54J7Tp/dXEpgzSFg4cxiQaHhoh5i1CAlYtcjohyeXAYIkqEmE1WkTyrCJMeGpg5a5EXTzCRHL+Uq6ikMj2qGqiNqiW8N0S7sr42LrODZLMrxFmdK8ZKkSPRQGnWxd6Jur3Thqmi38XQv6i0y+wyeOnX5CV03lngc1T99uH4ef38bMXyfvH0BjAgdyKWiQGMJ+BxcydLXD4SlqEpfBqMgOHcaDYNI2cnzisRjIkOUIkoyn8GQ3YCpXmmzZiyXMd/5mHttXoVKugs5+IVwjkuckoY+I/vk5VOAlo4OYHv13KZK9qFLTUa367apOclqxbkvKD2zYokrFzutKx2satOsCsVX7EC3Xt1nfYvpqt5HdrTTvutwLNycZdYDhMCJU+IjgxIzPFAAAOw=='
};

function ifShowPersona<T>(trueAttr: string, falseAttr: string): Operator<any, T> {
  return map(s => s.showPersona ? get(s, trueAttr) : get(s, falseAttr));
}

// @dynamic
export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;
  showPersona = false;
  selected = false;

  constructor(data: {
    id?: string, start?: Date, end?: Date, person?: any, showPersona?: boolean, selected?: boolean
  } = {}) {
    if (!(data.person instanceof Person)) {
      data.person = new Person(data.person || {});
    }
    Object.assign(this, pick(data, ['id', 'start', 'end', 'person', 'showPersona', 'selected']));
  }

  @Operand(map(s => s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined))
  timeMillis: number;
  @Operand(chain(access<number>('timeMillis'), map(t => t ? t / 1000 : undefined)))
  timeSeconds: number;
  @Operand(chain(access<number>('timeSeconds'), map(t => t ? Number(t).toFixed(2) : '')))
  timeLabel: string;
  @Operand(chain(access<number>('timeSeconds'), areaSizeScale.quantitative([1, 10])))
  timeAreaSize: number;

  @Operand(ifShowPersona('fixed.areaSize', 'timeAreaSize'), false)
  showPersonaTimeAreaSize: number;
  @Operand(ifShowPersona('fixed.areaSize', 'person.heightAreaSize'), false)
  showPersonaHeightAreaSize: number;
  @Operand(ifShowPersona('fixed.areaSize', 'person.ageGroupAreaSize'), false)
  showPersonaAgeGroupAreaSize: number;
  @Operand(ifShowPersona('persona.color', 'person.favoriteActivityColor'), false)
  showPersonaFavoriteActivityColor: number;

  @Operand(ifShowPersona('persona.color', 'fixed.color'), false)
  showPersonaFixedColor: number;
  @Operand(ifShowPersona('persona.shape', 'fixed.shape'), false)
  showPersonaFixedShape: number;
  @Operand(ifShowPersona('fixed.areaSize', 'fixed.areaSize'), false)
  showPersonaFixedAreaSize: number;
  @Operand(ifShowPersona('fixed.strokeTransparency', 'fixed.transparency'), false)
  showPersonaFixedTransparency: number;

  @Operand(constant({
    areaSize: 250,
    color: '#000000',
    pulse: true,
    transparency: 0.6,
    strokeTransparency: 0.2,
    strokeWidth: 1,
    text: 'Fixed',
    shape: 'circle'
  }))
  fixed: any;

  @Operand(combine({shape: access('person.icon'), color: access('person.color')}))
  persona: {shape: string, color: string};

  toJSON(): any {
    return Object.assign(assignIn({}, this), {
      id: this.id,
      start: this.start ? this.start.toISOString() : undefined,
      end: this.end ? this.end.toISOString() : undefined,
      person: this.person.toJSON(),
    });
  }
}
