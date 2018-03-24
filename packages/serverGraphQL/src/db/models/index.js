//------------------------------------------------------------------------------
// Define database models and their relationships
//
// This is the primary location where all the DB models are aggregated and
// stored in a single object for use in the sequelize cli as well as the
// graphql server.
//------------------------------------------------------------------------------
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import Message from './Message';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//------------------------------------------------------------------------------
// Models
//------------------------------------------------------------------------------
db.message = Message;

//------------------------------------------------------------------------------
// Associations
//
// Defining these inside of the model files does not work well. The models
// need to be defined within the Sequelize object before we can assign
// associations.
//------------------------------------------------------------------------------

// TODO: Assign associations here.

export default db;