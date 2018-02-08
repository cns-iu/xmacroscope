import { vega } from './vega';

// FIXME: Need a more generic/angular way to see if in production mode
import { environment } from './../../shared';

const developmentLogLevel = vega.Warn;
export const defaultLogLevel = environment.production ? vega.None : developmentLogLevel;
