//
// Settings query
//
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import AppRoutes from './AppRoutes';

const GET_SETTINGS = gql`
  query GetSettings($location: String!) {
    Settings(location: $location){
      activityName
      postRunDelay
      location
    }
  }
`;

// const UPDATE_RUN_LOCAL = gql`
//   mutation updateRun(
//   $activityName: String!
//   ) {
//     updateRun(
//       activityName: $activityName,
//     ) @client
//   }
// `;

class AppSettings extends React.Component {
  render() {
    return (
      <Query
        query={GET_SETTINGS}
        variables={{ location: process.env.REACT_APP_LOCATION }}
      >
        {({ loading, error, data: { Settings } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          console.log('fffff', Settings);
          return (
            <AppRoutes settings={Settings} />
          );
        }}
      </Query>
    );
  }
}

export default AppSettings;
