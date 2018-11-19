import { GraphqlClient } from './graphql-client';
import { GET_SETTINGS } from './graphql-queries';


export class LocationSettings {
  constructor(private endpoint: string, private location: string) {
  }

  async getSettings(): Promise<any> {
    const client = new GraphqlClient(this.endpoint).client;
    const results = await client.query<{Settings: any}>({
      query: GET_SETTINGS, variables: {location: this.location}
    });
    return results.data.Settings;
  }
}
