import { GraphqlClient } from './graphql-client';
import { GET_SETTINGS } from './graphql-queries';


export class LocationSettings {
  static async getSettings(endpoint: string, location: string): Promise<LocationSettings> {
    const client = new GraphqlClient(endpoint).client;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const results = await client.query<{ Settings: unknown }>({
      query: GET_SETTINGS, variables: { location }
    });
    return new LocationSettings(results.data.Settings);
  }

  location!: string;
  usState!: string;
  latitude!: number;
  longitude!: number;
  preRunDelay!: number;
  postRunDelay!: number;
  startLineTimeout!: number;
  runTimeout!: number;
  attractDelay!: number;

  constructor(data: unknown = {}) {
    Object.assign(this, data);
  }
}
