import moment from 'moment';
import baseResolver from './baseResolver';
import db from '../../db/models/index';
import pubsub from './subscriptions';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

// Load x runs starting with the most recent
const runs = baseResolver
  .createResolver((root, args) => db.run.findAll({ limit: args.lastX }));

//------------------------------------------------------------------------------
// Mutations
//------------------------------------------------------------------------------

// Keeping extraneous console statements and return helpers in the code
// while in active DB development.

// Create a run, return the ID
const runStart = baseResolver
  .createResolver((root, args) => db.person.create({
    name: args.run.persona.name,
    icon: args.run.persona.icon,
    color: args.run.persona.color,
    gender: args.run.persona.gender,
    ageGroup: args.run.persona.age_group,
    handedness: args.run.persona.handedness,
    zipcode: args.run.persona.zipcode,
    state: args.run.persona.state,
    Runs: {
      start: args.run.start,
      opponent: args.run.opponent,
      opponentName: args.run.opponentName,
      opponentTime: args.run.opponentTime,
    },
  }, {
    include: [db.run],
  })
    .then((createdPerson) => {
      // Publish race initiation for MAV
      const publishPayload = {
        raceInitiated: {
          type: 'race-initiated',
          timestamp: args.run.start,
          avatar: {
            id: args.run.opponent,
            name: args.run.opponentName,
            runMillis: args.run.opponentTime,
          },
        },
      };
      pubsub.publish('race-initiated', publishPayload);
      return createdPerson.Runs[0].id;
    }));

// Update an existing run record with a finish time, return the ID
const runFinish = baseResolver
  .createResolver((root, args) => db.run.update(
    { end: args.run.finish },
    { where: { id: args.run.id } },
  ).then((updatedRuns) => {
    // We get the raw data object here instead of a Sequelize object
    // so that we can access the personId without worry about the association
    db.run.findOne({
      attributes: ['start', 'end', 'personId'],
      where: { id: args.run.id },
      raw: true,
    })
      .then((completedRun) => {
        // Pulling the raw data requires us to make a date object out of the
        // string before we pass it to moment
        const startTime = moment(new Date(completedRun.start));
        const endTime = moment(moment(new Date(completedRun.end)));

        db.person.findOne({ where: { id: completedRun.personId } })
          .then(runnerPerson => runnerPerson).then((runnerPerson) => {
            const publishPayload = {
              raceCompleted: {
                type: 'race-completed',
                avatar: {
                  id: args.run.opponent,
                  name: args.run.opponentName,
                  runMillis: args.run.opponentTime,
                },
                results: [
                  {
                    lane: 1,
                    persona: {
                      name: runnerPerson.name,
                      icon: runnerPerson.icon,
                      color: runnerPerson.color,
                      gender: runnerPerson.gender,
                      ageGroup: runnerPerson.ageGroup,
                      handedness: runnerPerson.handedness,
                      state: runnerPerson.state,
                    },
                    started: true,

                    // TODO: Step 1 - generate random false starts on client
                    // TODO: Step 2 - generate false start from sensor
                    falseStart: false,

                    timeMillis: endTime.diff(startTime),
                  },
                ],
              },
            };
            pubsub.publish('race-completed', publishPayload);
          });
      });
    // Publish race completion for MAV
    return updatedRuns;
  }));

const RunResolver = {
  Query: {
    runs,
  },
  Mutation: {
    runStart,
    runFinish,
  },
};

export default RunResolver;
