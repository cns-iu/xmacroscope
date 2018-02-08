export const PersonaSchema = `
enum GENDER {
  male
  female
  other
}

enum HANDEDNESS {
  left
  right
}

type Persona {
  id: ID!
  name: String
  icon: String
  color: String
  gender: GENDER
  age_group: String
  handedness: HANDEDNESS
  zipcode: String
  state: String
  latitude: Float
  longitude: Float
}

input NewPersona {
  name: String
  icon: String
  color: String
  gender: GENDER
  age_group: String
  handedness: HANDEDNESS
  zipcode: String
  state: String
  latitude: Float
  longitude: Float
}
`;
