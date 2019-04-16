import moment from 'moment';
import baseResolver from './baseResolver';
import db from '../../db/models/index';
import pubsub from './pubsub';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

// Load n runs starting with the most recent
const Runs = baseResolver
  .createResolver((root, args) => db.run.findAll({
    where: {
      end: { [db.Sequelize.Op.ne]: null },
    },
    limit: args.lastX,
    order: [
      ['start', 'DESC'],
    ],
    include: [
      { model: db.person, as: 'person' },
    ],
  }));

//------------------------------------------------------------------------------
// Mutations
//------------------------------------------------------------------------------

// Keeping extraneous console statements and return helpers in the code
// while in active DB development.

// Send a signup message
// No database operations
const StartSignup = baseResolver
  .createResolver(() => {
    const publishPayload = {
      runMessageSubscription: {
        type: 'signup-started',
        timestamp: new Date(),
      },
    };
    const message = pubsub.publish('run-message', publishPayload);
    if (message) {
      console.log('Signup started - Message sent');
    } else {
      console.log('Signup started - Message failed');
    }
    return message;
  });

// Send a run selection message
// No database operations
// This is no longer used.
// We'll rename this for the singup form start message
const SelectRun = baseResolver
  .createResolver((root, args) => {
    const publishPayload = {
      runMessageSubscription: {
        type: 'run-selected',
        timestamp: new Date(),
      },
    };
    const message = pubsub.publish('run-message', publishPayload);
    if (message) {
      console.log('Run selected - Message sent');
    } else {
      console.log('Run selected - Message failed');
    }
    return message;
  });

//
// Create a person and run record
// Send a signup-finished message
//
const FinishSignup = baseResolver
  .createResolver((root, args) => db.person.create({
    ...args.run.person,
    // Start is null until the race begins this is updated in another mutation
    Runs: {
      org: args.run.org,
      start: null
    },
  }, {
    include: [db.run],
  })
    .then((createdPerson) => {
      // Reshape data object to match message schema
      const runWithPerson = Object.assign(
        { person: createdPerson },
        createdPerson.toJSON().Runs[0],
      );
      // Publish run initiation for MAV
      const publishPayload = {
        runMessageSubscription: {
          type: 'signup-finished',
          timestamp: new Date(),
          run: runWithPerson,
        },
      };
      const message = pubsub.publish('run-message', publishPayload);
      if (message) {
        console.log('Signup finished - Message sent');
      } else {
        console.log('Signup finished - Message failed');
      }
      return runWithPerson;
    }));

// Update an existing run record with a start time, return the ID
const StartRun = baseResolver
  .createResolver((root, args) => db.run.update(
    { start: args.run.start },
    { where: { id: args.run.id } },
  ).then((updatedRuns) => {
    // We get the raw data object here instead of a Sequelize object
    // so that we can access the personId without worry about the association
    db.run.findOne({
      attributes: [
        'id',
        'start',
        'PersonId',
      ],
      where: { id: args.run.id },
      raw: true,
    })
      .then((startedRun) => {
        const runId = startedRun.id;
        const runStart = startedRun.start;
        db.person.findOne({ where: { id: startedRun.PersonId } })
          .then(runnerPerson => runnerPerson).then((runnerPerson) => {
            const runWithPerson = Object.assign(
              { person: runnerPerson },
              { id: runId, start: new Date(startedRun.start) },
            );

            const publishPayload = {
              runMessageSubscription: {
                timestamp: new Date(),
                type: 'run-started',
                run: runWithPerson,
              },
            };
            const message = pubsub.publish('run-message', publishPayload);
            if (message) {
              console.log('Run started - Message sent');
            } else {
              console.log('Run started - Message failed');
            }
          });
      });
    // Publish run completion for MAV
    return updatedRuns;
  }));

// Update an existing run record with a finish time, return the ID
const FinishRun = baseResolver
  .createResolver((root, args) => db.run.update(
    { end: args.run.finish },
    { where: { id: args.run.id } },
  ).then((updatedRuns) => {
    // We get the raw data object here instead of a Sequelize object
    // so that we can access the personId without worry about the association
    db.run.findOne({
      attributes: [
        'id',
        'start',
        'end',
        'PersonId',
      ],
      where: { id: args.run.id },
      raw: true,
    })
      .then((completedRun) => {
        // Pulling the raw data requires us to make a date object out of the
        // string before we pass it to moment
        const startTime = moment(new Date(completedRun.start));
        const endTime = moment(moment(new Date(completedRun.end)));
        const runId = completedRun.id;

        db.person.findOne({ where: { id: completedRun.PersonId } })
          .then(runnerPerson => runnerPerson).then((runnerPerson) => {
          // Milliseconds that the run took
          // TODO: Figure out if this is needed for MAV
            const timeMillis = endTime.diff(startTime);

            const runWithPerson = Object.assign(
              { person: runnerPerson },
              { id: runId, start: new Date(completedRun.start), end: new Date(completedRun.end) },
            );

            const publishPayload = {
              runMessageSubscription: {
                timestamp: endTime,
                type: 'run-finished',
                run: runWithPerson,
              },
            };
            const message = pubsub.publish('run-message', publishPayload);
            if (message) {
              console.log('Run finished - Message sent');
            } else {
              console.log('Run finished - Message failed');
            }
          });
      });
    // Publish run completion for MAV
    return updatedRuns;
  }));

const RunResolver = {
  Query: {
    Runs,
  },
  Mutation: {
    // SelectRun,
    StartSignup,
    FinishSignup,
    StartRun,
    FinishRun,
  },
};

export default RunResolver;
