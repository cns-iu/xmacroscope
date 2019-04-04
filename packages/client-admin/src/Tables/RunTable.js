import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { Container } from 'reactstrap';
import raw from '../data.json';

function RunTable() {
  const selectOptions = {
    0: 'CNS',
    1: 'UCI',
    2: 'COSI',
    3: 'SMM',
  };

  const columns = [
    {
      dataField: 'id',
      sort: true,
      text: 'Id',
    },
    {
      dataField: 'uuid',
      formatter: cell => selectOptions[cell],
      filter: selectFilter(
        {
          options: selectOptions,
        },
      ),
      sort: true,
      text: 'Organization',
    },
    {
      dataField: 'start',
      sort: true,
      text: 'Start',
    },
    {
      dataField: 'end',
      sort: true,
      text: 'End',
    },
    {
      dataField: 'icon',
      sort: true,
      text: 'Icon',
    },
    {
      dataField: 'color',
      sort: true,
      text: 'Color',
    },
    {
      dataField: 'ageGroup',
      sort: true,
      text: 'Age Group',
    },
    {
      dataField: 'favoriteActivity',
      sort: true,
      text: 'Favorite Activity',
    },
    {
      dataField: 'height',
      sort: true,
      text: 'Height',
    },
    {
      dataField: 'zipCode',
      sort: true,
      text: 'Zip Code',
    },
    {
      dataField: 'state',
      sort: true,
      text: 'State',
    },
    {
      dataField: 'longitude',
      sort: true,
      text: 'Longitude',
    },
    {
      dataField: 'latitude',
      sort: true,
      text: 'Latitude',
    },
  ];

  const sortingDefault = [{
    dataField: 'name',
    order: 'desc',
  }];

  const runs = [];
  raw.data.Runs.map(run => (
    runs.push(
      {
        id: run.id,
        uuid: run.uuid,
        start: run.start,
        end: run.end,
        icon: run.person.icon,
        color: run.person.color,
        ageGroup: run.person.ageGroup,
        favoriteActivity: run.person.favoriteActivity,
        height: run.person.height,
        zipCode: run.person.zipCode,
        state: run.person.state,
        latitude: run.person.latitude,
        longitude: run.person.longitude,
      },
    )
  ));

  return (
    <Container className="table-container">
      <h1>Runs</h1>
      <BootstrapTable
        keyField="id"
        filter={filterFactory()}
        data={runs}
        columns={columns}
        defaultSorted={sortingDefault}
        striped
      />
    </Container>
  );
}

export default RunTable;
