import { areaSizeScale } from '@dvl-fw/core';
import { access, chain, lookup, map, Operand, Operator } from '@ngx-dino/core';
import { assignIn } from 'lodash';


export interface GVData {
  id: string;
  label: string;
  color: string;
  shape: string;
  icon: string;
  areaSize: number;
  axis: string | number;
}

export interface PersonOptions {
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
}


const unknownGVData: Partial<GVData> = {
  label: 'Unknown',
  color: '#000000',
  shape: 'square'
};


export const shapes = [
  'circle',
  'cross',
  'diamond',
  'square',
  'star',
  'triangle',
  'wye'
];

export const allShapes = shapes;

export const icons = [
  'brat',
  'cool',
  'happy',
  'grimace',
  'alien',
  'laughing',
  'crown',
  'sleep'
];

export const images = {
  'penguin': 'data:image/gif;base64,R0lGODlhZABkAMZ0AAAAAAEBAQICAgQEBAUFBQcHBwgICAoKCgsLCwwMDA0NDQ8PDxAQEBERERMTExQUFBUVFRYWFhkZGRoaGhsbGxwcHB8fHyAgICEhISIiIiQkJCgoKCkpKSoqKi4uLjIyMjQ0NDU1NTc3Nzg4ODs7Ozw8PD09PUVFRUZGRkxMTE1NTVBQUFhYWFpaWltbW11dXV5eXl9fX2VlZWdnZ2pqamtra21tbW5ubnFxcXNzc3Z2dnh4eHl5eX19fYCAgISEhIaGhoqKiouLi42NjZKSkpOTk5WVlZiYmJmZmZubm5ycnJ2dnaCgoKWlpaioqKurq62tra6urrGxsbS0tLe3t7m5uby8vL29vb6+vsHBwcPDw8jIyNDQ0NfX19jY2NnZ2dvb293d3d7e3t/f3+Dg4Obm5ujo6Onp6erq6uvr6+/v7/Ly8vX19fb29vf39/j4+Pn5+fr6+vz8/P7+/v///////////////////////////////////////////////yH5BAEKAH8ALAAAAABkAGQAAAf+gH+Cg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4uYMAvAC6pL3BvL+fwsbEnMbKyJnKzr7MlM/T0ZHT18PVjNjc2oncwYXH3uLBAxcWBuPkj8IiZnTxaGFobjHs1sFU8fz8axT4HBnb0q/gjoCNjAEp2E8MNISIlElow5BfB4jflPWoGM8GxkPPCnjh+OSjoWkoOHZ5aPLPtSwV5RxouWvaC44gaLq8VoFjCprcGHCU0RJcCY4+inIjwrGISXAW3HBc8hGcgCsc6TTBCA4Aj6x0okDsGiIOWCkIuyb4ApaOk4D+XQEoaUuHCb64IubQPcIuLoAndOkEIec3wJrAOLz5BQAhMB0W2hYDeODYRLVnO50tcHwhGmZBzw4ETsNSlzNC0wgEtuJ5HehnAfS2HcJsWblnZtvCQGb7tjOpbTEQ6+1bGUWwDoe7Rj2NTdslpW0RL24MeNYWysNldFag7RsGv5affBah7ZTotYRte3YU7L3wvRI+owGWTYPs6Mc7WwI2SX5a8cnnzBhgfcDbf/oZkwFYWiA4i4PU9UJfVifolJkxWGSVBYSEKROBHBzNUYKFFwYzQ1ZIkFhiL1Xw45wacJRBBgQqKuNAblp0gcUZOqyhgoorAnADPy504YITK9RmAGSQXCQxRhoGQDGBAhwsuWIIYCTwgxAAkJDNksYYMQIAG2gQIJjCIJCDeCQa4wEBbFpoTACfASnZl0+FI1me8S2m1JenWaldkINaWdM1hh5KTaKMNuroo5BGKumklFZq6aWYthIIADs=',
  'squirrel': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMagDMJlNpcUql0Mj0Sq0usFynNtENA74HsZhsPmvTaijb7H63kfK5sR6O47H6/VT5BsZX8VTDtvVHWEgD15A44WWY55gFWSkzyXBluTnT9fAIaucySBkpmsZ4qnmJ4Lf401n2usojSytr+4hbqsNbp/sb6CssR1w8jINsrLycbOMc6hNdG0s9RnQNC6Tdm9Od+w3e2swbcBhsfo59J7zm3odbVfyuHv/6ZV+/RzarDwjvnp98ePoJ4mdw3cCECxNC8ObQQbWIFCtavIgxo8YRjRw7evwIMqTIkSRLmjzpogAAOw==',
  'cheetah': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvOJAgCgE6n1eqUmsNyulOoNd1Xhj/jMHaHPlbXbCnrLv9v522PP6+edvf8vtgE4SEiHUYj4l5HImKfRCJmGALcYaUliCVmS2WjCmXjySZgiOkhaqhiKmuq56hflugdrGpA5C1gnWyvZSqugZzCm6rbr9SA3yYtJXCxcZZyMNcwWDE1hHU25iZYr3aacrS2y9ussYV6etRyYrn4N3j61jt1t+Oze4K1Wlq9/Dr/Anxl+DAAeE9hP3EB69eS9w3fQHh6CBRFCsOgAIgeEdgkVRsDYMQ4cg+EsaPzo8ZA6kAdYBjyJ0qEgbTDbfUsZU6ZKezVt3tN585FAnC8lRgT6EGlOoz27/ZypNCPAptmeCjXakWixn1GdQtXaDCzYhhepHsVasizaomvDdY25z+zOHy612L2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbRygAADs=',
  'brat': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dInhETrf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSluUrBWPr7ZJsRMzFrW3t6RoFp++qMA1FcPEp6qyJMLKysy6xxSX0MSbzXEUvdfEuR0W3t6rexXW43XJYdnTGLTpbJM36GLg78jxYvMW9XflhLjpY1eNTpkba+4VobBO3yZ/TiZ0+3dhIcKBgCZAzCL+cYzCgBMaxtO4RpVIaRYnYiRzMQuPJopUNvmo4NzKmQD65OoTMlHFRhUQ4TmSSRWTXD1hAdi4ZBW8P0hJRhrVTZpAJTE9/jyQz0/UalNbEmgXNKLMVFvL2iHb6hDVJWwncDzL5OdTO1By7PBRhu6YtxEdwRWL5Z5NPycjyV0SlQ4UpoNldb15dGlliTxzlqyolnJkQJ+ybpZMwbOVjn+Trrlw13RgyARU+cUpxzVM1FY2zaZtyXYTZnOcZNt9u5Dv31/B/olr+fjvg5ghMRfpHJRVhtWjhaCePSwI7t2FhoAdXvr48raYk0e//At7V8mJv68DrvN8TJxL3y+aX/X+fvGkSfUfIu3UdNWAhyhkH4J1pIUdXgKAd8sTiDmImzzcRCghJDxAtyEBH4njBwp69eBWDzokB8Af5Rymjg0wxvhgHQWCRFhCMuaognyMbQWUf2zoKOR3FWrDQGsYDqnkhyD6+COQazCnJAzroeXkkzz2aMMRJj0BY5ZKGWmjZlCRqCFHK2ahgxFuAWQjmFid99tivPGCCE0WNddeb3OmWadye4qZJ5OiIAWRUVY0BqCgECDpRzuH0nmZgAleaQ6gBFIa2BVbVIkFWc5MlmmkflZGKJqMZvCMeaRySuai7oQq6qN6ounqqbEZQ41+hyjSaqKvsujmrjey4WtGpfaheCpSQ7RFY62bAksos1Os+uJGONxapKUtOJsanJKOxq0X/dgR7rdr6VqKnWxAseFj8kTFiIHlopuksYvMS6+1hUHbL3n8AKDvmNG1oSlyxWbx1cB5crOObMnoJklyDF/Ky0aB6JUipkxAN2zFTzoyTMA3jKyiwCB7YMSZau6VipcppEwsiRr3wBcQJ48rMz5TRrHzLj3n+/O6Sg7NsBA7JwAAOw==',
  'cool': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2oA97jzoou/zTd4Z5k/eMUfOiD5lNrQduTYBQ8CDEwTA88ODIEIZ5R5KVDjGh0SJES9KnNP+xKJGjEU+brw0SeTBkCZTqjxJaKXLl1wYwJz5Up9MCkFo6nyYs2AjCiV33tChT6jCCz8nEHC4k44yoQAMIT0wi8DTpk2Y0kRijyoFQ1dpnltSdCYZpM2SQAXQZq0otBSUlHU5lsnclbSeKgi3VKiYsC+pXaj6VmfdelhvfVmycw3glWRDnLsr8rAVyh/PaY26ZLPIbRW3dpacZWY/K54/MtncB/NDy2Fg9nk8++Whxxo78sm68nSY1Ag/0Uad0rcY1zGOPbYcNCBHTMBVwN4M22p0C89DXZ9VvW8hxwC/UKz1BAWO8YkWM3yHjt6fuaDjySdgj+98+XCV3pev1+v+BOP7vdLfNAGiQ9BeOBUoTlf+saVgNVM1COCDmPSHIDsUdhOhBRn2Eg2BHb5yYEsYhogKgzf9ZyI02KR4w4qhoOgiABOmIk6NpUVI4ouHnIejHfkgIuOONPqDk0I/plKeirep42J8fmjlozvy9ABEWd0dpyNKnEWynQ1Zprcll0l2hJx5Yf7lJEpQ+hPePuhhMqRBICbzJndl/rZmRkzaspCfe+6RFoySBCrooITqZuihcSXaBDHMJOioXIt6YMykkLIQjIlhdXIpp5nOYEmITFWCHYVBMXJhnfdppWpSn8bT3KtEapOnP2XRyiVOt9bR3De68smdLXe2GOw6cvQomgVlx2Yj3p+OLRlTsxzYcN4OVhJ1JrWaCsUtKzN96+lH4uoqBLcJAAA7',
  'happy': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExiz8u4X5c348+oH9/742CFsoDMx74pMOIjF2w2GkBzO8UNP4Q2KKCD+yej+JyGDaX5UoHIYr861bx/DmVRxLhI9OSH1KQhYh+SHUCdDdJQJkIJGJjFC2SzJpmIjChthCFUas95MCttqqogaKSeIPwlBYkzREtJLR39OPl14aOiEkSkOGVWZFMRPO0PfptLHFqsFqqdyTkR0gaZXAXL/8sA0FG8/bkO7Hq5mdYLixcgaA3gMuZfkwJVBfSWbmdtmAJg7u+QjutpnyqVRSUadGmcI1q0zSTYc+1Th2rze1cV9ii5S3q7W+gSOSrhj4nl9s0MOyuNu5od48oPuVTpU6hGt/8be1unR49ztiCV0PbxUbN9B1xm8GPB6nimXs8EROpQW2lc8kh8uda/waSj4AfJPT/KtoYx/1uASmH7rcFaUOfVJUsZ0D8LXYID5OeIeIjwMZRd6Fk324Rc5ANbDiQNNiAKGVuSUjYPv2SBjMDGCuEd5Yc04I2wZ2ngjBTxqoiNLkLhYA4VqmRUDggINaA+SHKo41YajWcgBjZqhyB40TsJjAXbEMIMjcQ4NgWVsYbJwpmhfdUJUaW3CYUlqVlVyV2eTeDdIIZA1xkh8b4qTp55/jjVLhBzaVOg+jiC63lCLPqmhLVJaGel+cjiahZKXXmmEiXbwUGmanf44VYkmiqpDEDGU2sKQQ7pqJqwyyOomrYTaametriYAADs=',
  'grimace': 'data:image/gif;base64,R0lGODlhZABkAOfvACIeICMeICQeICIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjIycjJCgkJSklJiolJiomJysnKCwoKSwpKi0pKy4qKy8rLDArLTAsLTEtLjIuLzMvMDMvMTMwMTQxMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0I/P0M/QERAQUVBQkZCQ0ZDREdERUhFRklGRkpHR0tHSExJSk1KS1BNTVFOTlJOT1JPUFNQUVRRUlVSUlVSU1ZTVFhUVVhVVVhVVllWV1pXV1pXWFtYWVxZWl1aWl1aW15bW19cXF9cXWBdXmFeX2JfYGNgYWRhYmViYmZkZGdkZWhlZmlmaGpnaGtpaW9sbW9tbXBtbnFub3NxcXVyc3ZzdHd0dXh1dnd2dnh2d3l3d3p4eHt5eXx5en57fH58fX99foB+foF/f4KAgIOBgYSBgoSCg4WDg4WDhIaEhYeFhYiGhoqIiIuIiYuJioyKi46MjI+NjZGPj5GPkJKQkZORkpSSk5WTk5aUlJeVlZeWlpiWl5mXmJqYmZ2bm5+dnqCen6GfoKKgoaSjo6WkpKalpaimp6mnqKqoqKqpqauqqqyrq62srK6srbCur7Cvr7GwsLKxsbe1tre2tri3t7m4uLq5ubu6ury6u727vL28vb69vb++vsC+v8C/v8HAwMLBwcPCwsPCw8TDxMXExMbFxcfGxsjHx8nIyMrJycrJysvKy8zLy83MzM7Nzc/OztDPz9DQ0NLR0tPS0tXU1NbV1dbW1tfX19jX2NnY2drZ2dva2tzb29zc3N3d3eHg4OLh4ePj4+Tk5OXl5ebm5ufm5+jn5+no6Ovr6+zs7O3t7e/u7u/v7/Dw8PHx8fLy8vT09Pb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8uMGBAAcOHDRkuSEixosWLGC0qGACxo0ePCjKKHEnSIICPKFN6PFCypUuDDlXKnCngpU2RBWY6kJGFzh9HlTp1quToDx0sMhzMDHmzqUECKme4GeUs3bur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',
  'alien': 'data:image/gif;base64,R0lGODlhZABkAOfqACIeICMeICQeICIfHyIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi0qKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTQxMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0M/QERAQUVBQkZCQ0ZDREdERUlGRkpHR0tHSExISUxJSk1KS05LTFFOTlJOT1JPUFNQUVVSU1ZTVFdUVFhVVVhVVllWV1pXWFtYWV1aW15bW19cXF9cXWBdXmFeX2JfYGNgYWRhYmViYmVjY2ZkZGdkZWhlZmlmZ2pnaGtoaWxqam1ra25rbG9sbXBtbnFub3NxcXVyc3d0dXh1dnh2d3t5eXx5en16e357fH99foF/f4KAgIOBgYSBgoSCg4WDhIaEhYiGhoqIiIuIiYuJioyKi42LjI6MjI+NjZCOjpGPj5GPkJKQkZORkpSSk5WTk5aUlJeVlZeWlpiWl5qYmZuZmpyamp2bm56cnJ6dnZ+dnqCen6GfoKKgoaOhoaSjo6alpaelpqimp6mnqKqoqK2srK6sra+trrCur7Cvr7GwsLKxsbOysrSzs7WztLa0tbe1tri3t7m4uLq5uby6u727vL28vb++vsLBwcPCwsPCw8TDxMXExMbFxcfGxsjHx8nIyMrJysvKy8zLy83MzM7Nzc/OztDPz9DQ0NHQ0dLR0tPS0tTT09XU1NbV1dbW1tfX19jX2NrZ2dva2tzb29zc3N3d3d7e3t/e3+Hg4OLh4ePj4+Tk5OXl5ebm5ufm5+jn5+np6erq6uvr6+zs7O3t7e7t7u/u7u/v7/Dw8PHx8fLy8vPz8/T09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8aQIDggEOHAQIgAFAgocWLGDNqxLhAwMOPIEN+3EiypEmFIlOqBGngpMuXBlfKnPlwAcybGw0YWCnhBhU2iz6lerUL2K5WpzoVOrPERYOVDHBKPdgw5QcuiWqJU8e1q9evXLGZmjMEgsqpaFOqWOPqHNi3cL1eo9QkQkq0MEU+qIIKXdy/gNVZE4RCpAC8JXeCrACnWeDHgMtx4hHSJuKMCUBGMAMNsmfA6TSxCHn5YkgkyD6rBjyOkAXSpWN+3BAp3erbf5EJAYkg9kAAIIU8w0087jlCEj62jF0AZBlyxaPDnTUCZOnmDyFEks797TIc1hH+f4wAqrv5r92IhJ/6UYKo8/C7gkPysbfUzA4dvI/P/1uRjxXdBNxDg/BnoDrZxDDSTR+BceCBxnSwoEsf1bDVgwam4sBDy5n0EQS6YPhgGxOW9BEeIj4oTg0laqTYAS1Al+KBtWzokIcPXTIjhl+0aNpDNvi144HJJOeQfRl99MmQGKbhI0IvklAOkw8288BDGn1EB5UYQvEQkhY91IAyXD5IypOyHaBDmQ+eIwKWPzokB5sPgoHmQB+1QueBnDyUQJwTjLOngdhceWOYDuHwGTbA+LINk9TMsks0n8kAJ0JVHdAFZLYQYegBLsQBDIa2pFGCmEDMAhkWD0WF0Ef+fDz2iVkhNVBFMPzhskRKD3jyWB53fpRJYNJssBIEeUzZnThw2JgSB9QEtgmHCb1oSmCN0PSDNNw5A95MkASWSrAPwRKYFzTBeEx0wZyQbhiB2XInfgfwElgU6R4wApm4EeNBvlgERsydBDwkzLn5HvBCtKtFM1q+YwS2DLkO9RKYHwkfsIRtn50zRMaEBFYMxQfIEtgsGR/giGqDpGwvYLzcucBDoQSGTgoZXzCNZ85QkDEMj53yUAAJBfBQI48BkrIbnpmRsiKPTXIndge88Zg3IGRcwaOBWWNkvidcCFgdfiJ6gBOQSZJyJY9FkrImkFVx6asOnQBZOl4mnMX+Y1NkrIVnLsx90EeOPSbNw+nO8FgLCceADWTT3CmQ0Q5t4pm/+WLwmF3pisDvY6NI/g/lB8Dr2S1Z0xTCY8bSVIIvnzntkGVme2DOZ8cEPlMQj/1AEw3LfIbOqYde9KK5n12zxUyIPFbITGJwo5q8giM0s0NMr9YJ4ynlIGhg4+igEg2l3DbHQwRk6ZALHKtWjiQ+hPQEt5BR0/dHDhyRiVu3zVB9Qh9hRXGUwQk91EERB1vNMRjxh0CIglLEiYXoCFIwh1xhUOZBl0PSt5GHPIAZGJRONSbwP7Md4A4hjA7GSpiQ6+krHCnEDTlwNjscOeQQMbyNIyZ4EAU8JAT+3sjhZ8JhAh4O7iGAEKJnDGHEg9CLA9lQYmC+8SaHKAAmL4qDFAFzhyYihF4QGNUW34IMn1kRJxU8gBHaN8au7IqFJspRG73SJzjG0SEjiOIcuVFEiODlI3ubo53saJIXHQATn5mF2HBTDTFCJhQfoV1aHrKB4EHGFCiwBBs9Y45IiACEkIHGvxzSIfE8ZAj8C8w5LKUDRTDsMc3oQ+Cs4Bl0JMGLifkICiGjiodE4Al7GIUlvZIOZYDCDkewkQTWBZk+RNI3/3BhA5YEGTKkZAMd0EAHWheSWEEmFZ86ADQF8pEMDAMy5ThCyg5QBSEFBhkcwOVLPgIDbUAmG//+SRgUwAEZb9hAni8xJBOUBb4xpKsBaCAoYMxxP1KOsyAg8YI7A4MK/61EBqvwTDqsCdCbkO4AcBAeKaZwAZBYAAqimGhg7LCeh0L0I4ZYzThqkQlDYIIWi4TMI1rq0pc6pAGMYBIlnCXOnlZLTFCbkSSIatQ4HaABOBSRI55CyKaCJIkPMgRVi9dUpx5gDAo1zznUwNOumvAASuCaeb7RUK6aFSOGzMEwpdMMynTUqh/RADWjY4oPfISDb73jQ55DHHPogahFDawNH7KDEK3mFz0AiSQVWxIX5qcM3fBMOPTwNYdSNi8gSQEkZBSXclBiBbD57E08ElpH6PEr24AxBOLuqto0tUcKksCFMnJBiSqQECSArS171gkm4U4yXQAwLjQHsJKdKLen9NrJZM0aEAA7',
  'laughing': 'data:image/gif;base64,R0lGODlhZABkAOfxACIeICMeICQeICIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi0qKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTQxMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0I/P0M/QERAQUVBQkZCQ0ZDREdERUhFRklGRkpHR0tHSExJSk1KS09MTVBNTVJOT1JPUFNQUVRRUlVSU1ZTVFdUVFhVVVhVVlpXWFtYWVxZWl1aW15bW19cXGBdXmFeX2JfYGNgYWRhYmViYmZkZGdkZWhlZmlmZ2pnaGtoaWtpaWxqam5rbG9sbXJwcHNxcXRycnVyc3ZzdHd0dXh1dnh2d3l3d3p4eHx5en57fH58fX99foB+foF/f4KAgIOBgYSBgoSCg4WDhIaEhYeFhYiGhomHh4qIiIuJioyKi42LjI6MjI+NjZCOjpGPj5KQkZORkpSSk5WTk5aUlJeVlZeWlpiWl5mXmJqYmZuZmpyamp2bm56dnZ+dnqCen6GfoKKgoaOhoaSioqSjo6WkpKalpaelpqimp6mnqKqoqKqpqauqqqyrq62srK6sra+trrCur7Cvr7GwsLKxsbWztLa0tbe1tre2tri3t7m4uLq5uby6u727vL28vb69vb++vsC/v8HAwMLBwcPCwsTDxMXExMbFxcfGxsjHx8nIyMrJycrJysvKy8zLy83MzM7Nzc/OztDPz9PS0tTT09XU1NbW1tfX19jX2NnY2drZ2dva2tzb29zc3N7e3t/e3+Df4OHg4OLh4ePi4uPj4+Tk5OXl5ebm5ufm5+jn5+no6Onp6erq6uvr6+zs7O3t7e7t7u/u7u/v7/Dw8PHx8fLy8vT09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8uMGBAAcOHDRkuSEixosWLGC0qGACxo0ePCjKKHEnSIICPKFN6PFCypUuDDlXKnCngpU2RBWY6cAFljZ1CjzRpelTIzponLhzMDHmzqUECKl+YCZVsXbyr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',
  'crown': 'data:image/gif;base64,R0lGODlhZABkAOfVACIeICMeICQeICIfHyIfICIfISMfHyMfICMfISQfHyQfICQfISIgICMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi0qKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTQwMjQxMjUxMjYyMzg0NTk1Njk2Nzo3ODs4ODw4OT05Oj88PUA9PkE+P0I/P0M/QERAQUZCQ0ZDREdERUhFRkpHR0tHSExISUxJSk1KS05LTE9MTVBNTVFOTlJOT1JPUFNQUVRRUlZTVFdUVFhVVVlWV1tYWVxZWl1aW15bW19cXF9cXWFeX2ViYmVjY2ZkZGdkZWlmZ2pnaGtpaWxqam1ra25rbG9sbXBtbnFub3JvcHJwcHNxcXZzdHh1dnl3d3p4eHt5eXx5en16e357fH58fX99foB+foF/f4KAgIOBgYSBgoSCg4aEhYeFhYmHh4qIiIuJioyKi42LjI+NjZCOjpGPkJKQkZSSk5WTk5aUlJeVlZeWlpiWl5mXmJqYmZ2bm56cnJ6dnaKgoaSioqelpqqoqKqpqayrq62srK6sra+trrCur7Cvr7OysrWztLa0tbe1tre2tri3t7m4uLu6ur27vL28vb69vb++vsC/v8HAwMPCwsTDxMXExMbFxcrJysvKy8zLy83MzM7NzdDQ0NHQ0dLR0tPS0tTT09XU1NfX19jX2NrZ2dzb29zc3N7e3t/e3+Df4OHg4OLh4ePi4uPj4+Xl5ebm5ufm5+jn5+no6Onp6erq6uvr6+zs7O3t7e7t7u/u7u/v7/Dw8PHx8fT09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCBP+I3DggAKFECNKnEixIsGGGA9Y3MixI8eMGT2KhAjSwMiEIDGejIggo0mFKTWuLGggpsyZCFO+zBkT58WePg3WTAkTaNChIIMatFmUqE+bGRsoFcgUZUoEOBlCdfrU6MGWXjki3Qp15QCbOxNqjSm1Itm3GQl8hJqW5NsBCQvA3VsVIQIHby0q4Eu4MF8DY+FaZGC4sePHISvqhUy5cmCLljNrxvgQ8+bPlOtKBE3asVyLa0urVix4tWuyCzYmfk27YduIDnI7aFC7N8YGuh009U2c68HiyJNaTZ58OHPizp/3Vph6xJDr2LNr3869u/fv4MP+i4irUABGDb2qqV/Pvr379/Djy59Pn5cGjKd5NoxDv7///wDKF0dkX2GEATABJqjggu4BcwFGWB2HURsMVmghgGsQSBBYB0Bwy4UghvgeLhBAuBRGS4io4opLaEgVRpCsKCOIkLhoXkMdODPjjgw24wFGAhC0VhY8FqlgFhpm9MiCxxDyhA9J0DHLjsYM8mSUtCzoSJINSWCMgpaAANIEdkyzYphj3kFNgsNEoJJAAWC0g4KVlBiTGipSYmdKbCjIA2cvNnRGgsT8CNUnIRLTwVahJFgGRi9ltEiCfpDVRIh9kOVEgolElpErCSpBFgXQgJjEqNEE6IqnDT2wTIL+NLyV3oUzvPVLgMw88CZGKSgIxFvKgPjDW8wkaIJKcTZkhIJpkGVDiGiQdYOCQmA0WUNUKLiKrlAJEqIq3NpEiIJVYLRARmAsGK1NO+gY4hlQ8eBugF/Y5MaC0GwRUw67qAiNFjHpwIu6GAGwVh0MUjOJEHa+8EexK1IjCcMNwQBIMwwO2BACSMlxITK0BGNkNSALcyEdnGX0xsgsB9iGSxit0fLM/Y0BYUZe0KxzfF1gxMBgDaW489DsMfEbh88SrbQMkP6DkQdKE03Ngw0FekC/UevsC6sNdZK1zptwfUAgX9OcR9P/8NbQFGXPDAVGAQh04wEfSNP2yNKIufH+QBmpcreRpnDZEB9/F2mH4AfkUDiPf77JN0awLC7jKy46jZEdkq8IB9oEIYXCM//50vas/UVz7N4nNrSkf4owkvU0hSTy3yOVWw3Ef9McwYQsRJPSwxFm9kcNDrVbjah/xLgAgRWx0DzKEwewILJ/nBRvtQ9r+sfKohFIcUmpPA5TiA8NcbDKf9T82pBoBKndkCQArkICRiWw4cmrIuqiSBQTYBRCKgDaEn4gghQYQMw/sVABSCqAhD2AYmAJckYrIEGGGKTkBK8AEDNWwLmEAAYjHgOQL5AAlQ34gAt5MIQkPlEKVbhQFaDIxCIE0QYntGBPKSkC1v4zB+sVJCP+EjgfgKQRCAys5gJ8SBWAUCEBuFEkIznAWIBugQUcZuYBVMhSgJxRAx+mriFkWFArtECBzEzgCkJMELy8+MUDNIJBwQBEEMJVmAf8oA+3WpAiXDKXhmTAbxXqxSLMsIP+kWUCOiiDIiDIIFRYgI0ISQ0JeAciaehCFI84hCD60AdBHOIRosiF3UBUi9M1JD+yyYgLEJS59/SiBXwUCUhukMdWrgcYNlDOSEDSAlvYUj24sGAHd5kRFmSwla44gS5nMpYNWCJzlNhALIMCkgfcYZRtk4Yc6HgTpaSECLVoGy2MUJKpbAgkGTBE8Ig2DUIYMSMRMudAZuMDUhBNFMOYAkln5FmQ1BzgAVmgZMtkQYWw8PMnIIHAE04xslV4oYnGOaiEUnKERQRrRclgBDl1IlGJXAskG/hCJZBxoWRgogsZQEtHKZIAqFBgCXnoRDEANIxP6OEIhuzLSp/4lhYkIQx8OEQkOPGJT2hCEojAgxicoECysG+nE/ngap4KVYvMpjJUrapIkuWYrGo1KAFwn00GEM+dBgQAOw==',
  'sleep': 'data:image/gif;base64,R0lGODlhZABkAOfVACIeICMeICQeICIfICIfISMfHyMfICMfISQfICQfISMgICQgICQgISUhIiYiIyYjIycjJCgkJSklJiomJysnKCwoKSwpKi4qKy8rLDAsLTEtLjIuLzMvMDMwMTUxMjYyMzczNDg0NTk1Njk2Nzo3ODs4ODw4OT05Oj46Oz87PD88PUA9PkE+P0I/P0M/QERAQUVBQkZCQ0ZDREdERUhFRklGRkxISUxJSk1KS05LTFBNTVFOTlJOT1JPUFNQUVRRUlVSU1ZTVFhVVVhVVlpXWFtYWVxZWl1aW19cXGBdXmFeX2JfYGNgYWRhYmViYmVjY2hlZm1ra29sbXNwcHNxcXVyc3ZzdHd0dXh1dnh2d3l3d3p4eH16e357fH58fX99foB+foOBgYSBgoiGhoqIiIuIiYuJioyKi46MjI+NjZGPkJSSk5WTk5aUlJeVlZeWlpiWlpiWl5mXmJqYmZuZmp2bm56cnJ6dnZ+dnqCen6GfoKKgoaKhoaSjo6WkpKalpaimp6mnqKqoqKqpqauqqqyrq62srK6sra+trrCur7Cvr7GwsLKxsbOysrWztLe1tri3t7q5uby6u727vL28vb69vb++vsC/v8HAwMLBwcPCwsTDxMXExMbFxcfGxsjHx8nIyMrJycrJysvKy8zLy83MzM7Nzc/OztLR0tPS0tTT09bW1tfX19jX2NnY2drZ2dva2tzb29zc3N3d3d/e3+Hg4OLh4ePj4+Tk5OXl5ebm5ufm5+jn5+no6Onp6evr6+zs7O3t7e7t7u/u7vDw8PHx8fLy8vPz8/T09PX09fb19fb29vf39/j4+Pn5+fr6+vv7+/z7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAABkAGQAAAj+AP8JHEiwoMGDCA8uMGBAAcOHDRkuSEixosWLGC0qGACxo0ePCjKKHEnSIICPKFN6PFCypUuDDlXKnCngpU2RBWY6YMEEDJk4ewgR2hOHDJglLBzMDHmzqUECKltsWQTrWbWrWLNmffZqkZYVKgs4daogp0cHSAbl0sq2LVtcgYw0+FhgwNiXKGnI4eW2b9ZPMz/eJYlSSCa/iLHekdngx8eJgy9+RBIqseVqVmTOqPbpiEcEkSku7Fji0eXLmxKpVo2HAsQpgR+GFiigowQ0zE7rxspLBkQ5amIznO2xBqzdyGmheNgAUDUowg2E9khFGfLdq0A8jODoqgrhkO/+dqyQ6PpuUhkeVjhcjZqcN/Djv1mjwWOAwR03kDKv+1KFhxqUglgzTqQ0VkcisMLfaY1A8FAICvp1zBAyNdURDGstaJkfczGkQi2IBZNDRxDw4QJEYr0UE0MlZKjhVaigBAdEEdTRyI04LpOVLjCMd0k1uJDQkUsrGpBBhC9eNchHH/QgUwTQYDWLCR1lsN9Vr3AAEUslQVSBKUnuOMqYezzAUBsWyHQDVqp40BEIq2g1imuyEQbRIWG2NUp6DOhBy0xWXAUKBh2hQEtbhAwpUkdY5MmWJa49gIhukkzQkQx8uVUFios+RIOOjmLVoAETSKIbImZCpMMwfikzA0T+GUEkwXGhXtXHXBd4opseDHRUBDKJvRIBrBpBlEatV9HBUAN3jDmKK4kJ4pEFasgnn4BZmbGlRRCpkBuyJXxURWLQCceIVsssx1CKCSEA0STIVkMMSnckBpZwsrAVCUT3JQQREvEumEyvsVUwTVtFEHuQWQxVFrB5pkTXg1udQFTTQRAJ8fDGlgGhcEEQscfxyG1Z8vFAK9JA8spsUeMbQ3aB/JAcLNeMlRsnn7TsLjbbzItS6xL0b889G/ExRIQQbXMgRz+Ei9I146Kwuwy1ALXN3wX9D0RbXF1zFsRCdK7XKysS9kOxkL2yK2cb4IAzapPsDNDSjWaA1XGTnLX+AQdA1ETeJC+B0hfIPUMMYsCEmbhfxFi1mxcPHcDwGchJQ0IiUbKlDB5rJmlDHqBqBQ0iJUiDHBkouXHdDgaMAAYjoqQCCiFXaClFmFEYsAEWhnySiiiNfCHkxMix8dAAVBuwx3V/yLRJmJrI5BxyeTzEsAGFXBeNYyjdnmfuKAERzXWJfpT9db/w8NEToSe5TIEe9bA4cuUzlPzy5jljxwsP5XDIwaGaRiFw8BAY3MFx16neuiCiOg0JgxbF4FgxaCGMFxkPZpMD3MhQ9xHCaXBjXYgcRJjwwY0pASJ2Y0EJH5aCyG2NIW9bIbKaQTeBQIRWMnRUK9pmgEXkMFT+ieChFn7oqCsQK3kqJGKYWqi1FzLkaUrUUC2axhBBRFFDzauTQJJ3hCsuiAgf69uydOHF6+SiQwYIjw0fEocyFu9k/6gNQzZDMlzsIQxiAIQvSEaNGMDRiQbABMeYwYVUMUQCZRjfxijxR0AGYWPM8NhHnGC6h/ngeAgpEigeBgaVtOFhm4BIzDD2kC7GqxcOSgkG2hcqMGpxYRAxFbKYJpNKxAsSEAENRRiGAlaGSVsyyQOylHGCRhKEIw+hXK3SMJM+IIuDDGFKRWgErVA1YiabDFUrhtVEbj3kBcBylDEIlRISKDJPrjKmQiASqFDNQSXlCRUV+DWSjhgiVNT+2NRHxlAraanTXw+hgCjw6QftPAQFY3NUKCz1SpFA5SEZiFOoojE7Q5wCgI5yxQYgIk07PYQEUFTiLUawrZdczwUhzeEtWqAomyBIojJ8Rbj+2SkADXSFp+hAS53SEQrc84OCYGhDedqR6uSNGVrwyGz+EYCOzOAVamuFH3c6nY5E4Ay+ZJkyyJBKmjbFbh/FU88moS6OLvUgyXuIEXS1Mk64kqpnJcj1HgIES2yMGpXgXkf6FVeAekQGbyBjqHLRhql2hF19pchDPdIAIwTiFi+yBSCIgMbDJjYjTU2JCrCgiFbAzTLOaEUisMBElPD1shkpEkoasAIldIEMb9A1g1D04AYydCEJKqjsRwYwStR2KTrAHY5vmzLX4D5muKFRLXA7ity4nuQA7qJadA+QAAA0NyAAOw==',
  'unknown': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExiz8u4X5c348+oH9/ohe1dkgjOBqOgVvIEwHzYF0xoiu/aNgQWJz1YFxNj+TR9ECgc5hlLYiILIccs2nrRFMOLKdLn4vbRFMtzMWjVN3rR1QeVOVN58/gwVlMK5oaEoukR6SqlRpqicGoQKDURIqnboycSKSStIrpm8TjgK9o9UAGTL2jmbVi2bs9vc+inKTu6fdzbt1tGXV++YnFP9rgGMVvAaih/rGg5DEKDOxVg8Og4MuQnJxAwrN2k8eYLmJtGWfkZMiEJczZxLUq58ubTiyqlVrzasdY9p1JLXzdZb297txbF1FxasNNvusr2Nn1Yb3PZTucVrbAWbXPpX6v88xMPqtcUHrsSY/WYadEiwneFZnF/Zvct6ju07mVvptJKF5f0m1WPU+blZQKn8yTadOPrtF6CA2lzlSoEVHejafQqGRVeDDgpnWluZlLFIhb6lMdKEBnLY4RcC8JDVE1GICA4MOPzQgw86BBGDiurZYGN6NFp344w5urcjjj36KAONCQAAOw=='
};

export const opponents: Partial<GVData>[] = [
  { label: 'Penguin', color: '#4527a0', shape: 'circle', icon: images['penguin'] },
  { label: 'Squirrel', color: '#f7d97b', shape: 'triangle', icon: images['squirrel'] },
  { label: 'Cheetah', color: '#f44336', shape: 'square', icon: images['cheetah'] },
  { id: 'real-penguin', label: 'Visitor', color: '#000000', shape: images['penguin'], icon: images['penguin'] },
  { id: 'real-squirrel', label: 'Visitor', color: '#000000', shape: images['squirrel'], icon: images['squirrel'] },
  { id: 'real-cheetah', label: 'Visitor', color: '#000000', shape: images['cheetah'], icon: images['cheetah'] }
];

export const shoes: Partial<GVData>[] = [
  { label: 'Boots', color: '#1e88e5', shape: 'triangle' },
  { label: 'Wheels', color: '#81c784', shape: 'circle' },
  { label: 'Athletic', color: '#fff9c4', shape: 'diamond' },
  { label: 'Casual', color: '#f7d97b', shape: 'wye' },
  { id: 'penguin-feet', label: 'Barefoot', color: '#000000', shape: images['penguin'] },
  { id: 'squirrel-feet', label: 'Barefoot', color: '#000000', shape: images['squirrel'] },
  { id: 'cheetah-feet', label: 'Barefoot', color: '#000000', shape: images['cheetah'] }
];


function createLookup(data: Partial<GVData>[], defaultValue = unknownGVData): Operator<string, Partial<GVData>> {
  const table = data.reduce<{ [key: string]: Partial<GVData> }>((result, item) => {
    if (item.label) {
      result[item.label] = item;
      result[item.label.toLowerCase()] = item;
    }

    if (item.id) {
      result[item.id] = item;
    }

    return result;
  }, {});

  return lookup(table, defaultValue);
}


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

  @Operand(map<Person, string>(s => `${s.icon}`))
  label!: string;

  @Operand(chain(access('icon'), lookup(images, images['unknown'])))
  iconShape!: string;

  @Operand(chain(access('age'), areaSizeScale.quantitative([0, 100])))
  ageAreaSize!: number;

  @Operand(chain(access('height'), areaSizeScale.quantitative([0, 89])))
  heightAreaSize!: number;

  @Operand(chain(access('opponent'), createLookup(opponents)))
  Opponent!: Partial<GVData>; // eslint-disable-line @typescript-eslint/naming-convention

  @Operand(chain(access('shoes'), createLookup(shoes)))
  Shoe!: Partial<GVData>; // eslint-disable-line @typescript-eslint/naming-convention

  constructor(options: PersonOptions) {
    ({
      id: this.id,
      icon: this.icon,
      age: this.age,
      height: this.height,
      opponent: this.opponent,
      shoes: this.shoes,
      zipCode: this.zipCode,
      state: this.state,
      latitude: this.latitude,
      longitude: this.longitude
    } = options);
  }

  toJSON(): unknown {
    return assignIn({}, this);
  }
}
