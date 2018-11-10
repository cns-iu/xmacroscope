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
  favoriteActivity: String
  height: Int
  siblings: Int
  zipcode: String
  state: String
  latitude: Float
  longitude: Float
}

input NewPersona {
  id: ID
  name: String
  icon: String
  color: String
  gender: GENDER
  age_group: String
  handedness: HANDEDNESS
  height: Int
  siblings: Int
  zipcode: String
  state: String
  latitude: Float
  longitude: Float
}
`;
