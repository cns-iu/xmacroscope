//------------------------------------------------------------------------------
// Define database models and their relationships
//
// This is the primary location where all the DB models are aggregated and
// stored in a single object for use in the sequelize cli as well as the
// graphql server.
//------------------------------------------------------------------------------
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import Message from './message';
import Person from './person';
import Setting from './setting';
import Run from './run';
import Performance from './performance';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//------------------------------------------------------------------------------
// Models
//------------------------------------------------------------------------------
db.message = Message;
db.person = Person;
db.setting = Setting;
db.run = Run;
db.performance = Performance;

//------------------------------------------------------------------------------
// Associations
//
// Defining these inside of the model files does not work well. The models
// need to be defined within the Sequelize object before we can assign
// associations.
//------------------------------------------------------------------------------
db.person.hasMany(db.run);
db.run.belongsTo(db.person, { as: 'person' });

export default db;
