import gql from 'graphql-tag';
import React from 'react';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD, h:mm:ss a';

export const RunColumns = [
  {
    accessor: 'id',
    Header: 'Id',
  },
  {
    accessor: 'org',
    Header: 'Organization',
  },
  {
    accessor: 'start',
    Header: 'Start',
    className: 'wordwrap',
    Cell: row => (
      <span>{moment(row.start).format(dateFormat)}</span>
    ),
  },
  {
    accessor: 'end',
    Header: 'End',
    className: 'wordwrap',
    Cell: row => (
      <span>{moment(row.end).format(dateFormat)}</span>
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
  },
  {
    accessor: 'latitude',
    Header: 'Latitude',
  },
];

export const RunDefaultSort = [
  {
    id: 'start',
    desc: true,
  },
];

export const RunFormat = function formatRuns(data) {
  const results = [];

  data.Runs.map(row => (
    results.push(
      {
        id: row.id,
        org: row.org,
        start: row.start,
        end: row.end,
        icon: row.person.icon,
        color: row.person.color,
        ageGroup: row.person.ageGroup,
        favoriteActivity: row.person.favoriteActivity,
        height: row.person.height,
        zipCode: row.person.zipCode,
        state: row.person.state,
        latitude: row.person.latitude,
        longitude: row.person.longitude,
      },
    )
  ));

  return results;
};

export const RunQuery = gql`
  query Runs($lastX: Int!) {
    Runs(lastX: $lastX){
      id
      start
      end
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

export const RunVariables = { lastX: parseInt('10', 10) };
