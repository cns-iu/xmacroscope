import gql from 'graphql-tag';
import React from 'react';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD hh:mm:ss';

export const RunColumns = [
  {
    accessor: 'id',
    Header: 'Id',
    show: false,
  },
  {
    accessor: 'org',
    Header: 'Organization',
  },
  {
    accessor: 'startTime',
    Header: 'Start',
    className: 'wordwrap',
    Cell: row => (
      <span>{moment(row.value).format(dateFormat)}</span>
    ),
  },
  {
    accessor: 'endTime',
    Header: 'End',
    className: 'wordwrap',
    Cell: row => (
      <span>{moment(row.value).format(dateFormat)}</span>
    ),
  },
  {
    accessor: 'duration',
    Header: 'Duration',
    Cell: row => (
      <span>
        { row.value }
        s
      </span>
    ),
  },
  {
    accessor: 'icon',
    Header: 'Icon',
  },
  {
    accessor: 'color',
    Header: 'Color',
    Cell: row => (
      <span style={{ color: row.value }}>
        { row.value }
      </span>
    ),
  },
  {
    accessor: 'ageGroup',
    Header: 'Age Group',
  },
  {
    accessor: 'favoriteActivity',
    Header: 'Favorite Activity',
  },
  {
    accessor: 'height',
    Header: 'Height',
    Cell: row => (
      <span>
        { row.value }
        &quot;
      </span>
    ),
  },
  {
    accessor: 'zipCode',
    Header: 'Zip Code',
  },
  {
    accessor: 'state',
    Header: 'State',
  },
  {
    accessor: 'longitude',
    Header: 'Longitude',
    show: false,
  },
  {
    accessor: 'latitude',
    Header: 'Latitude',
    show: false,
  },
];

export const RunDefaultSort = [
  {
    id: 'startTime',
    desc: true,
  },
];

export const RunFormat = function formatRuns(data) {
  const results = [];

  data.AllRuns.map((row) => {
    /* eslint array-callback-return: 0 */
    const runDuration = Math.abs(moment(row.startTime).diff(row.endTime)) / 1000;
    results.push(
      {
        id: row.id,
        org: row.org,
        startTime: row.startTime,
        endTime: row.endTime,
        duration: runDuration,
        icon: row.person.icon,
        color: row.person.color,
        ageGroup: row.person.ageGroup,
        favoriteActivity: row.person.favoriteActivity,
        height: row.person.height,
        zipCode: row.person.zipCode,
        state: row.person.state,
        longitude: row.person.longitude,
        latitude: row.person.latitude,
      },
    );
  });
  return results;
};

export const RunQuery = gql`
  query AllRuns {
    AllRuns {
      id
      startTime
      endTime
      org
      person {
        icon
        color
        ageGroup
        favoriteActivity
        height
        zipCode
        state
        longitude
        latitude
      }
    }
  }
`;

export const RunTitle = 'People/Runs';
