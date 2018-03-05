export const AvatarSchema = `
type Avatar {
  id: ID!
  name: String
  runMillis: Int
}

input NewAvatar {
  id: ID
  name: String
  runMillis: Int
}
`;
