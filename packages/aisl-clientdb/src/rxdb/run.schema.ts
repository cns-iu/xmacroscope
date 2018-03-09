export const RunSchema: any = {
  'title': 'run schema',
  'description': 'describes an individual instance of a run for a persona vs an avatar',
  'version': 0,
  'disableKeyCompression': true,
  'properties': {
    'avatar': {
      'ref': 'avatar',
      'type': 'string',
      'index': true
    },
    'persona': {
      'ref': 'persona',
      'type': 'string',
      'index': true
    },
    'timestamp': {
      'description': 'UTC Milliseconds',
      'type': 'number',
      'min': 0
    },
    'lane': {
      'type': 'number',
      'min': 1
    },
    'started': {
      'type': 'boolean'
    },
    'falseStart': {
      'type': 'boolean'
    },
    'timeMillis': {
      'type': 'number',
      'min': 0
    }
  }
};
