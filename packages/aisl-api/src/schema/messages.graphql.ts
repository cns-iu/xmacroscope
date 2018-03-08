export const MessagesSchema = `
interface Message {
  type: String
  timestamp: String
}

type RunSelectedMessage implements Message {
  type: String
  timestamp: String
  avatar: Avatar
}

type RaceInitiatedMessage implements Message {
  type: String
  timestamp: String
  avatar: Avatar
}

type RaceResult {
  lane: Int
  persona: Persona
  started: Boolean
  falseStart: Boolean
  timeMillis: Int
}

type RaceCompletedMessage implements Message {
  type: String
  timestamp: String
  avatar: Avatar
  results: [RaceResult]!
}

type AnyMessage implements Message {
  type: String!
  timestamp: String!
  avatar: Avatar
  results: [RaceResult]
}

input NewRaceResult {
  lane: Int
  persona: NewPersona
  started: Boolean
  falseStart: Boolean
  timeMillis: Int
}

input NewAnyMessage {
  type: String!
  timestamp: String!
  avatar: NewAvatar
  results: [NewRaceResult]
}

`;
