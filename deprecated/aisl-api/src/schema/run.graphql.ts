export const RunSchema = `
type Run {
  avatar: Avatar!
  persona: Persona!

  timestamp: String
  lane: Int
  started: Boolean
  falseStart: Boolean
  timeMillis: Int
}

type RunRecord {
  avatar: ID!
  persona: ID!

  timestamp: String
  lane: Int
  started: Boolean
  falseStart: Boolean
  timeMillis: Int

  asRun: Run
}

input NewRunRecord {
  avatar: ID!
  persona: ID!

  timestamp: String
  lane: Int
  started: Boolean
  falseStart: Boolean
  timeMillis: Int
}
`;
