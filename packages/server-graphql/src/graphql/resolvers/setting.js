import baseResolver from './baseResolver';
import db from '../../db/models/index';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

//
// A setting for a specific location
//
const Settings = baseResolver
  .createResolver((root, args) => db.setting.findOne({
    where: {
      location: args.location === 'server' && process.env.LOCATION ? process.env.LOCATION : args.location,
    },
  }));

const SettingResolver = {
  Query: {
    Settings,
  },
};

export default SettingResolver;
