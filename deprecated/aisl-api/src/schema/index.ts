import { AvatarSchema } from './avatar.graphql';
import { PersonaSchema } from './persona.graphql';
import { RunSchema } from './run.graphql';
import { MessagesSchema } from './messages.graphql';

export const schemaDef = `
scalar Date

${AvatarSchema}
${PersonaSchema}
${RunSchema}
${MessagesSchema}

type Query {
  avatar(id: ID): Avatar
  avatars(limit: Int = 20): [Avatar!]!
  persona(id: ID): Persona
  personas(limit: Int = 20): [Persona!]!

  runRecords(lastX: Int): [RunRecord!]!
  runs(lastX: Int): [RunRecord!]!

  messages(lastX: Int): AnyMessage
}

type Mutation {
  registerAvatar(avatar: NewAvatar): ID
  registerPersona(persona: NewPersona): ID
  raceCompleted(runs: [NewRunRecord!]!): [ID!]!

  sendMessage(message: NewAnyMessage): Boolean
}

type Subscription {
  messageStream: AnyMessage

  runSelected: RunSelectedMessage
  raceInitiated: RaceInitiatedMessage
  raceCompleted: RaceCompletedMessage
  runCompletedRecords: [RunRecord]!
  runCompleted: [Run]!
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`;
