# xMacroscope naming conventions

This document is an attempt to develop some consensus around naming various aspects of the xMacroscope system. This includes project nomenclature, software variable names, database models, and GraphQL schema.

_This a draft, and still needs to be reviewed by the entire project team._

## Software

### Overall rules
Try to use a word once and then don’t vary from that. Try to avoid using similar words to differentiate between two different concepts.
Examples:

| Good           | Bad |
|----------------|-----|
| type Run       | type Race |
| input RunInput | input RaceInput |

Run and Race mean the same thing, so don’t vary the name for no reason.

### GraphQL

GraphQL Types, Inputs, and Mutations should be in PascalCase

GraphQL fields and db model fields should be in camelCase.

#### Types

##### Types should be single nouns

_Examples:_
 - Run
 - Person
 - Message
 
##### Use highest level data model in the name first

_Examples:_

For types that are a subset or a combination of two models, use the highest order data object first in the name.

| Good           | Bad |
|----------------|-----|
| type Run | type Run |
| type RunMessageSelected | type SelectedMessageRun |

This makes an alphabetical list of types easy to read and understand.

##### Match types to db models when possible

If a type mirrors a database model, the names should be the same.

_Examples:_
The db model for the Run type should be called Run, with a database table called Runs.

#### Inputs
##### Name inputs with Type + `Input`
Inputs should be named to match the Type that they align with followed by the word `Input`

_Examples:_
 - RunInput
 - RunFinishInput
 - PersonInput

This is based upon the naming patterns seen in the GraphQL.org documentation and other articles mentioned below.

#### Subscriptions
##### Name subscriptions with descriptor + `Subscription`
This prevents name collisions with similarly named descriptors.

_Examples:_
 - runSelectedSubscription
 - runInitiatedSubscription

This is based upon the [ naming patterns seen in the GraphQL.org documentation. ](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)

#### Mutations
Mutations should be named VerbNoun

_Examples:_

| Good           | Bad |
|----------------|-----|
| CompleteRun | runCompleted |
| SendMessage | MessageFinish |

This is based on the advice in the [Designing GraphQL Mutations](https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97) article.

##### Mutations should be specific
Don’t write catch all mutations that can be used for multiple purposes. Write specific mutations for each situation.

_Examples:_

Don’t write a single updateRun mutation. Instead, write a mutation for each run change:
 - StartRun
 - FinishRun

This paragraph especially highlights the importance of this approach:
> “Don’t be afraid of super specific mutations that correspond exactly to an update that your UI can make. Specific mutations that correspond to semantic user actions are more powerful than general mutations. This is because specific mutations are easier for a UI developer to write, they can be optimized by a backend developer, and only providing a specific subset of mutations makes it much harder for an attacker to exploit your API.”

#### Sequelize Models
Models should be singular, DB tables are plural

_Example:_
For the Run DB model, the file should be called:

    run.js

Within this file, the model should be defined with (note the case):

    const Run = sequelize.define('Run', ...

This will generate a plural database table called `Runs`.

### Reading on GraphQL naming
 - https://graphql.org/graphql-js/mutations-and-input-types/
 - https://blog.apollographql.com/designing-graphql-mutations-e09de826ed97
 - https://medium.com/graphql-mastery/json-as-an-argument-for-graphql-mutations-and-queries-3cd06d252a04
 - https://www.graphql.com/articles/4-years-of-graphql-lee-byron

# Exhibit nomenclature
## Exhibit component:
An exhibit component is single unit of an exhibit experience. The Run exhibit experience is an exhibit component. An exhibit is a collection of various exhibit components.

## Exhibit furniture:
Desks, cabinets, armatures, scaffolding, and holders for graphics in an exhibit experience.

## Media hardware:
Media harware is any technology device in an exhibit component.

Examples:
 - Computers
 - Touchscreens
 - Cables (HDMI, DVI, Power, etc)
 - Power Supplies
 - Micro-controllers (Arduino, Raspberry PI, custom electronics)
