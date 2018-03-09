export const AvatarSchema: any = {
  'title': 'avatar schema',
  'description': 'describes an avatar a user races against',
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
    'runMillis': {
      'type': 'number',
      'min': 0,
      'max': 100000,
      'default': 3000
    }
  }
};
