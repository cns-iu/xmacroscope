export const AvatarSchema = `
type Avatar {
  id: ID!
  name: String
  runMillis: Int
}

input NewAvatar {
  name: String
  runMillis: Int
}
`;
