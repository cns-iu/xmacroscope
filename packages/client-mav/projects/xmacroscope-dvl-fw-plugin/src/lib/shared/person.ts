import { areaSizeScale } from '@dvl-fw/core';
import { access, chain, lookup, map, Operand, Operator } from '@ngx-dino/core';
import { assignIn, transform } from 'lodash';


export const allShapes: string[] = [
  'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'
];

export const images = {
  'turtle': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjaYAVCqiCpAmsNxuF+oNi7/HsfmcHaLXZiD7PfbB5+Id/e7N4ffcG/+P9VBlAlhopZBHYriINsL4GBcCORkmSXk5+IG5mdbBian5eRkqCklayuiBauq5ytrqungaCwhCKzt7i2epy8fbeycCvPs7TFZpa4xskMihXLdFpvG8HN23QX3dEOjcBitdvZ3VmeGt2jydm5ksXYNevG7TDh9Po634PnPvGK5fT8hN3otx5LQYPIgwocKFDBs6fAgxosSJFCtavIgxo8YKjRw7evwIMiSLAgA7',
  'squirrel': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMagDMJlNpcUql0Mj0Sq0usFynNtENA74HsZhsPmvTaijb7H63kfK5sR6O47H6/VT5BsZX8VTDtvVHWEgD15A44WWY55gFWSkzyXBluTnT9fAIaucySBkpmsZ4qnmJ4Lf401n2usojSytr+4hbqsNbp/sb6CssR1w8jINsrLycbOMc6hNdG0s9RnQNC6Tdm9Od+w3e2swbcBhsfo59J7zm3odbVfyuHv/6ZV+/RzarDwjvnp98ePoJ4mdw3cCECxNC8ObQQbWIFCtavIgxo8YRjRw7evwIMqTIkSRLmjzpogAAOw==',
  'cheetah': 'data:image/gif;base64,R0lGODlhZABkAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAABkAGQAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvOJAgCgE6n1eqUmsNyulOoNd1Xhj/jMHaHPlbXbCnrLv9v522PP6+edvf8vtgE4SEiHUYj4l5HImKfRCJmGALcYaUliCVmS2WjCmXjySZgiOkhaqhiKmuq56hflugdrGpA5C1gnWyvZSqugZzCm6rbr9SA3yYtJXCxcZZyMNcwWDE1hHU25iZYr3aacrS2y9ussYV6etRyYrn4N3j61jt1t+Oze4K1Wlq9/Dr/Anxl+DAAeE9hP3EB69eS9w3fQHh6CBRFCsOgAIgeEdgkVRsDYMQ4cg+EsaPzo8ZA6kAdYBjyJ0qEgbTDbfUsZU6ZKezVt3tN585FAnC8lRgT6EGlOoz27/ZypNCPAptmeCjXakWixn1GdQtXaDCzYhhepHsVasizaomvDdY25z+zOHy612L2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbRygAADs=',
  'brat': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dInhETrf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSluUrBWPr7ZJsRMzFrW3t6RoFp++qMA1FcPEp6qyJMLKysy6xxSX0MSbzXEUvdfEuR0W3t6rexXW43XJYdnTGLTpbJM36GLg78jxYvMW9XflhLjpY1eNTpkba+4VobBO3yZ/TiZ0+3dhIcKBgCZAzCL+cYzCgBMaxtO4RpVIaRYnYiRzMQuPJopUNvmo4NzKmQD65OoTMlHFRhUQ4TmSSRWTXD1hAdi4ZBW8P0hJRhrVTZpAJTE9/jyQz0/UalNbEmgXNKLMVFvL2iHb6hDVJWwncDzL5OdTO1By7PBRhu6YtxEdwRWL5Z5NPycjyV0SlQ4UpoNldb15dGlliTxzlqyolnJkQJ+ybpZMwbOVjn+Trrlw13RgyARU+cUpxzVM1FY2zaZtyXYTZnOcZNt9u5Dv31/B/olr+fjvg5ghMRfpHJRVhtWjhaCePSwI7t2FhoAdXvr48raYk0e//At7V8mJv68DrvN8TJxL3y+aX/X+fvGkSfUfIu3UdNWAhyhkH4J1pIUdXgKAd8sTiDmImzzcRCghJDxAtyEBH4njBwp69eBWDzokB8Af5Rymjg0wxvhgHQWCRFhCMuaognyMbQWUf2zoKOR3FWrDQGsYDqnkhyD6+COQazCnJAzroeXkkzz2aMMRJj0BY5ZKGWmjZlCRqCFHK2ahgxFuAWQjmFid99tivPGCCE0WNddeb3OmWadye4qZJ5OiIAWRUVY0BqCgECDpRzuH0nmZgAleaQ6gBFIa2BVbVIkFWc5MlmmkflZGKJqMZvCMeaRySuai7oQq6qN6ounqqbEZQ41+hyjSaqKvsujmrjey4WtGpfaheCpSQ7RFY62bAksos1Os+uJGONxapKUtOJsanJKOxq0X/dgR7rdr6VqKnWxAseFj8kTFiIHlopuksYvMS6+1hUHbL3n8AKDvmNG1oSlyxWbx1cB5crOObMnoJklyDF/Ky0aB6JUipkxAN2zFTzoyTMA3jKyiwCB7YMSZau6VipcppEwsiRr3wBcQJ48rMz5TRrHzLj3n+/O6Sg7NsBA7JwAAOw==',
  'cool': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2oA97jzoou/zTd4Z5k/eMUfOiD5lNrQduTYBQ8CDEwTA88ODIEIZ5R5KVDjGh0SJES9KnNP+xKJGjEU+brw0SeTBkCZTqjxJaKXLl1wYwJz5Up9MCkFo6nyYs2AjCiV33tChT6jCCz8nEHC4k44yoQAMIT0wi8DTpk2Y0kRijyoFQ1dpnltSdCYZpM2SQAXQZq0otBSUlHU5lsnclbSeKgi3VKiYsC+pXaj6VmfdelhvfVmycw3glWRDnLsr8rAVyh/PaY26ZLPIbRW3dpacZWY/K54/MtncB/NDy2Fg9nk8++Whxxo78sm68nSY1Ag/0Uad0rcY1zGOPbYcNCBHTMBVwN4M22p0C89DXZ9VvW8hxwC/UKz1BAWO8YkWM3yHjt6fuaDjySdgj+98+XCV3pev1+v+BOP7vdLfNAGiQ9BeOBUoTlf+saVgNVM1COCDmPSHIDsUdhOhBRn2Eg2BHb5yYEsYhogKgzf9ZyI02KR4w4qhoOgiABOmIk6NpUVI4ouHnIejHfkgIuOONPqDk0I/plKeirep42J8fmjlozvy9ABEWd0dpyNKnEWynQ1Zprcll0l2hJx5Yf7lJEpQ+hPePuhhMqRBICbzJndl/rZmRkzaspCfe+6RFoySBCrooITqZuihcSXaBDHMJOioXIt6YMykkLIQjIlhdXIpp5nOYEmITFWCHYVBMXJhnfdppWpSn8bT3KtEapOnP2XRyiVOt9bR3De68smdLXe2GOw6cvQomgVlx2Yj3p+OLRlTsxzYcN4OVhJ1JrWaCsUtKzN96+lH4uoqBLcJAAA7',
  'happy': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExiz8u4X5c348+oH9/742CFsoDMx74pMOIjF2w2GkBzO8UNP4Q2KKCD+yej+JyGDaX5UoHIYr861bx/DmVRxLhI9OSH1KQhYh+SHUCdDdJQJkIJGJjFC2SzJpmIjChthCFUas95MCttqqogaKSeIPwlBYkzREtJLR39OPl14aOiEkSkOGVWZFMRPO0PfptLHFqsFqqdyTkR0gaZXAXL/8sA0FG8/bkO7Hq5mdYLixcgaA3gMuZfkwJVBfSWbmdtmAJg7u+QjutpnyqVRSUadGmcI1q0zSTYc+1Th2rze1cV9ii5S3q7W+gSOSrhj4nl9s0MOyuNu5od48oPuVTpU6hGt/8be1unR49ztiCV0PbxUbN9B1xm8GPB6nimXs8EROpQW2lc8kh8uda/waSj4AfJPT/KtoYx/1uASmH7rcFaUOfVJUsZ0D8LXYID5OeIeIjwMZRd6Fk324Rc5ANbDiQNNiAKGVuSUjYPv2SBjMDGCuEd5Yc04I2wZ2ngjBTxqoiNLkLhYA4VqmRUDggINaA+SHKo41YajWcgBjZqhyB40TsJjAXbEMIMjcQ4NgWVsYbJwpmhfdUJUaW3CYUlqVlVyV2eTeDdIIZA1xkh8b4qTp55/jjVLhBzaVOg+jiC63lCLPqmhLVJaGel+cjiahZKXXmmEiXbwUGmanf44VYkmiqpDEDGU2sKQQ7pqJqwyyOomrYTaametriYAADs=',
  'silly': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTibM5h1xMeFNvokt4352LeGcbx8in1d+QMs/RhYUcBSZkba+6VaybQCsFwBFTB83ehiLaGTSQWcnL+0V7FFxPUSeoh0s+EgxbgqSqp7BtIhH4e3ig5RtGjeR2VbBqjECCFfutm4cA1BxIUgyA+hUz0UYEFO5uKMrlGE9AEWCmtQAHKZFVANpu43lrqZxQ8XFxt8mzKcM3KmlfLwswiaW4bthTqnGQDZeIYs3L9Wvn4FS6AOm8R212jdm2uaXwBiNUq2eRhO1sZV2w7Jq5iwWEy6wVQtaXTvG49p1Ot+bJm0Bk3o/7Lek3tzospVk1yobAYVYB2xHatuHLd3KG/jG7irR7gP1EH5oy8kQ3ZseaWKJp8fKaTa7ClV3/NEcSS638mWTok03hq0qL4kEFelqBU9vLr7IwYIj7+fIxWJeVHX0jIwR99ALbE2WiSPeTDdACmkt+A78zyU4R3jSdXGhiKtx4kTwwlwG4Ytcddh660Fx6Kv1FoIIsx/VfHPRDBaJiM1j02m40e3tadSwvy6AROKw7XzgGQCakTTui1dqRvMKr3wR891dihlBrmeORpTQr0hA1d/oYXhOJ8CeaFLm6JpJXImHnmU39EkyQvPKD05odQNcUlgunVaeedKBRJGTaNFEQloIjCuaGaPpFJW6KJkrhET4QE+R6kb0paHqGN8tmjNiOqMuKfd2qqBKUv4TiacJPiWCeTKZjqH6eVOorbFUc5BOZ9h9Ja616W4arqfDGcGJSeCxn3aoePuTbR3iyybsooBlDeStkxz3qHCar4zGkbca1iG8KIoBDEjLLfCivuO+SGoqAJ+aR7ra6CpvdPNuiGweywBGz3ioIuwauovuCeyq+/rhBzrq3nFTyWuMZidu/CYWKlrq4Ra+mrwJZarBWvOrmHCcCdxNuEj8lFK+HEuqDJRLPLZfJQJVlN5amE9baBEyN7uswbv1dUDNYiPPeM7n5r5ZwRk0X/+k4VfTkmK5ZNW5QSEltwpYypWAZcdarsEvUDSkqTAevX3X4BK8i/wTot2lZ/8cNur0YBNzgw4DB3Dz8EEcPdLGD6N+AzCP4G4aVginjVQgCeAAA7',
  'surprise': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExizf08CzqH5+1jv5Zr58XbDFsFtbOh9K8LODsGGqB4WdHiBIQB/Ta5ZQqX+0ZwdehYRrlGBiiRFbAqm2ekYDBNLj3U0EgpXR+I9UDYpiByz6mYdGDsRxRhYMSUFjE2GglJaB2QjCn+YYpLKpqjPnyqCHsoJlWgulV5RaP3DdeLKigL9vEybSeFGP05p+jEZiu5HtF3/rAVwLtPevljrXQ07GKccSDbHrukIOBTjSDYbf/yBNJKPHS5DSJbHbe1mzs/WVgZty+2E0aRfmb6YWt5q1K2hFYqNzjNtcbbRXcZc+wtuzeISV1vNVtg7ueliwIaEd8I8G6eFxT3aiziK5XCb8+0GXWcvmQcKn9qr4jMmgOHzvur+gVfR9NFVs48nH5v4TGWz1kIP3/n++vkWDPNef+bhAyB94w3Yn2KHkGdDgYRZhF0Y+QGFilPrmGXYgd6dwh8DCGbCYYD8qGMURCKOqN55CoJYXCQqrgiJQvB0mGKMoXxo0Xb4xcggGx1lEx9kPrZlYkh+xQihGDraA9aMMU64RJA1vBiVipjQiIaVZ3G45B1H1shlQiNKSYBbLbSH2IE/hkEMMzYaCKCZBA3RUpfdfZlUmHBSt1V3bQLypi5+kmVDoE2gCcdbhurX4KB2WoAoE+Tp6cRDjJz4pFregPEopF3wwdkkKGXan05mHkJqPabuiOo8NrXqpCOWxhSrrGLKkWoWXOHKQVb6wMZDGSn42qcROewa0MMPQcRgbJoxRvEsK9GCOi0LMV6LqxDTJgAAOw==',
  'upsidedown': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStoT3DPa6/HRaff082R5mqucAVynWTNrPUbNAT0hSXy5vXKt9/4dzIFLTl4uLkdrgA6BSH5uzX2WGrexXua/COOQQQI6YjCAp1dep5SOdnWzqB+CQxs4CQDbwMyew4nPP+ylrEVPoIMayW7mOmMhNMKrkIIWOdCRx7pYJSUYzDliMtxpQJCMe7C0VSVlPZSyDJaAxm8VwqhmVSb0yjWjEncp7Uq0tWKcXK1emBaVy5bns6IWxYoF9zmpXKkt9arFTTCn0rdaxcAHSv2t2VV+qFrX2Z/lMbWObgCf0K26oHVTFPxogdP+YjWaZDCkQrH7o8V3MtzgAye9YYIvHok6VPv4IMwLRqSKxrvo50+AYmHkYt56b91+rmf64jWZP9MhffZV9cgca7GSjYhkZQRUduvPHPFKKxsMa8rjrMPzCCXz/4x+nx4tMzxQCP9Lk2GMTZq4DenvCY8KHg+/FqYb/qiuya/OeHPm4dldwp6bERF1m2kRaCciiI5lUj3Gn0T3zCXUjdOS98B85utviwwyETUljhbAZy2GGDKFqEVlCdtShJSFWxKCMWJa7Y2o3a0agjgJLdxAFgPK704kLWFalQDe7dKGQ3MaL4JJRRqnZZCx/IeAyVGDr2zxDBeLYlC2E6dmUXZQZ2ZicWiMcVY5VQpOZgjChQCF2Q1WmiS1hZo6Ked5VU12GAwogNT37+WSiDs7iJCEpjLrqnI0A2kShSku5zEEQaTcRFpvKogMMPw/xgkAygmmCPPamysiqqrZbyKqaxDiJEqgkAADs=',
  'unknown': 'data:image/gif;base64,R0lGODlhZABkAMIFACQgH1ZRUIiDgrizsv3//P///////////yH5BAEKAAcALAAAAABkAGQAAAP+eLrc/vCBSWuNOOvNtf3g141k6YRoaplse6ow7M5jDASBoA/8oAs4G20oSeUGhKRyyVT6Aioi0YhsWq/LARQldYVy2LA4CQx1S9/qeI3Vms8bUEDNrl/dIngkRLf7rXgreg0gAn+HYgIggwsfAYiQYYEUjB+GkZhXioJnH32ZoEkDeVKeoadMo5w0pqiuSqReFY+vtUlblLIVtrwEsSStvbW/HRafwqequcAVx8jJq3EVl8+8m8vSE7TVvbgAxbvcyNEQFtTi1uQv2ujP3hnG7cjKExiz8u4X5c348+oH9/ohe1dkgjOBqOgVvIEwHzYF0xoiu/aNgQWJz1YFxNj+TR9ECgc5hlLYiILIccs2nrRFMOLKdLn4vbRFMtzMWjVN3rR1QeVOVN58/gwVlMK5oaEoukR6SqlRpqicGoQKDURIqnboycSKSStIrpm8TjgK9o9UAGTL2jmbVi2bs9vc+inKTu6fdzbt1tGXV++YnFP9rgGMVvAaih/rGg5DEKDOxVg8Og4MuQnJxAwrN2k8eYLmJtGWfkZMiEJczZxLUq58ubTiyqlVrzasdY9p1JLXzdZb297txbF1FxasNNvusr2Nn1Yb3PZTucVrbAWbXPpX6v88xMPqtcUHrsSY/WYadEiwneFZnF/Zvct6ju07mVvptJKF5f0m1WPU+blZQKn8yTadOPrtF6CA2lzlSoEVHejafQqGRVeDDgpnWluZlLFIhb6lMdKEBnLY4RcC8JDVE1GICA4MOPzQgw86BBGDiurZYGN6NFp344w5urcjjj36KAONCQAAOw=='
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
  'brat', 'cool', 'happy', 'silly', 'surprise', 'updsidedown'
];
export const opponents = [
  { label: 'Turtle', color: '#4527a0', shape: 'circle', icon: images['turtle'] },
  { label: 'Squirrel', color: '#f7d97b', shape: 'triangle', icon: images['squirrel'] },
  { label: 'Cheetah', color: '#f44336', shape: 'square', icon: images['cheetah'] },
  { id: 'real-turtle', label: 'Visitor', color: '#4527a0', shape: 'circle', icon: images['turtle'] },
  { id: 'real-squirrel', label: 'Visitor', color: '#f7d97b', shape: 'triangle', icon: images['squirrel'] },
  { id: 'real-cheetah', label: 'Visitor', color: '#f44336', shape: 'square', icon: images['cheetah'] },
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

  @Operand(chain(access('icon'), lookup(images, images['unknown'])))
  iconShape: string;

  @Operand(chain(access('age'), areaSizeScale.quantitative([0, 100])))
  ageAreaSize: number;

  @Operand(chain(access('height'), areaSizeScale.quantitative([0, 89])))
  heightAreaSize: number;

  @Operand(chain(access('opponent'), createLookup(opponents)))
  Opponent: Partial<GVData>;

  @Operand(chain(access('shoes'), createLookup(shoes)))
  Shoe: Partial<GVData>;

  toJSON(): any {
    return assignIn({}, this);
  }
}
