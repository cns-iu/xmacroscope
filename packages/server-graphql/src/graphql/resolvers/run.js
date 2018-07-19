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

// Send a run selection message
// No database operations
const runSelect = baseResolver
  .createResolver((root, args) => {
    const publishPayload = {
      runSelected: {
        type: 'run-selected',
        timestamp: new Date(),
        avatar: {
          id: args.run.opponent,
          name: args.run.opponentName,
          runMillis: args.run.opponentTime,
        },
      },
    };
    const message = pubsub.publish('run-selected', publishPayload);
    if (message) {
      console.log('Run selected - Message sent');
    } else {
      console.log('Run selected - Message failed');
    }
    return message;
  });

const runStart = baseResolver
  .createResolver((root, args) => db.person.create({
    ...args.run.persona,
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
      const message = pubsub.publish('race-initiated', publishPayload);
      if (message) {
        console.log('Run initiated - Message sent');
      } else {
        console.log('Run initiated - Message failed');
      }
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
      attributes: [
        'opponent',
        'opponentName',
        'opponentTime',
        'start',
        'end',
        'personId',
      ],
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
                timestamp: endTime,
                type: 'race-completed',
                avatar: {
                  id: completedRun.opponent,
                  name: completedRun.opponentName,
                  runMillis: completedRun.opponentTime,
                },
                results: [
                  {
                    lane: 1,
                    persona: runnerPerson,
                    started: true,

                    // TODO: Step 1 - generate random false starts on client
                    // TODO: Step 2 - generate false start from sensor
                    falseStart: false,

                    timeMillis: endTime.diff(startTime),
                  },
                ],
              },
            };
            const message = pubsub.publish('race-completed', publishPayload);
            if (message) {
              console.log('Run completed - Message sent');
            } else {
              console.log('Run completed - Message failed');
            }
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
    runSelect,
    runStart,
    runFinish,
  },
};

export default RunResolver;
