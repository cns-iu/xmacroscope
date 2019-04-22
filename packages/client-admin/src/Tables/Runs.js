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
    accessor: 'start',
    Header: 'Start',
    className: 'wordwrap',
    Cell: row => (
      <span>{moment(row.value).format(dateFormat)}</span>
    ),
  },
  {
    accessor: 'end',
    Header: 'End',
    className: 'wordwrap',
    Cell: row => (
      <span>{moment(row.value).format(dateFormat)}</span>
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
    id: 'start',
    desc: true,
  },
];

export const RunFormat = function formatRuns(data) {
  const results = [];

  data.AllRuns.map(row => (
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
        longitude: row.person.longitude,
        latitude: row.person.latitude,
      },
    )
  ));

  return results;
};

export const RunQuery = gql`
  query AllRuns {
    AllRuns {
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

export const RunTitle = 'People/Runs';
