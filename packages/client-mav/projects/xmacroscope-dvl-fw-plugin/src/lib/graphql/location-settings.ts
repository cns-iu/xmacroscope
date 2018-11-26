import { GraphqlClient } from './graphql-client';
import { GET_SETTINGS } from './graphql-queries';


export class LocationSettings {
  location: string;
  usState: string;
  latitude: number;
  longitude: number;
  preRunDelay: number;
  postRunDelay: number;
  startLineTimeout: number;
  runTimeout: number;
  attractDelay: number;

  constructor(data: any = {}) {
    Object.assign(this, data);
  }

  static async getSettings(endpoint: string, location: string): Promise<LocationSettings> {
    const client = new GraphqlClient(endpoint).client;
    const results = await client.query<{Settings: any}>({
      query: GET_SETTINGS, variables: {location}
    });
    return new LocationSettings(results.data.Settings);
  }
}
