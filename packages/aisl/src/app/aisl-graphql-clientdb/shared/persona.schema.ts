export const PersonaSchema: any = {
  'title': 'persona schema',
  'description': 'describes a persona who is the runner',
  'version': 0,
  'disableKeyCompression': true,
  'properties': {
    'id': {
      'type': 'string',
      'primary': true
    },
    'name': {
      'type': 'string',
      'default': ''
    },
    'icon': {
      'type': 'string',
      'default': ''
    },
    'color': {
      'type': 'string',
      'default': ''
    },
    'gender': {
      'type': 'string',
      'default': ''
    },
    'age_group': {
      'type': 'string',
      'default': ''
    },
    'handedness': {
      'type': 'string',
      'default': ''
    },
    'zipcode': {
      'type': 'string',
      'default': ''
    },
    'state': {
      'type': 'string',
      'default': ''
    },
    'latitude': {
      'type': 'number',
      'default': ''
    },
    'longitude': {
      'type': 'number',
      'default': ''
    }
  }
};
