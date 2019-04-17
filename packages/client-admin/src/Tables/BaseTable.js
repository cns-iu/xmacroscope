import React, { Component } from 'react';
import {
  Row, Col, Card, Nav, Button,
} from 'reactstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns,
      defaultSort: props.defaultSort,
      filtered: [],
      formatForTable: props.formatForTable,
      query: props.query,
      queryVariables: props.queryVariables,
    };
  }

  render() {
    const {
      columns, defaultSort, filtered, formatForTable, query, queryVariables,
    } = this.state;
    return (
      <Query
        query={query}
        variables={queryVariables}
      >
        {
          ({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const FilterMethod = (filter, row) => (
              String(row[filter.id].toLowerCase()).startsWith(filter.value.toLowerCase())
            );

            const onFilteredChanged = (value, accessor) => {
              /* eslint no-param-reassign: 0 */
              let insertNewFilter = 1;

              if (filtered.length) {
                filtered.forEach((filter, i) => {
                  if (filter.id === accessor) {
                    if (value === '' || !value.length) filtered.splice(i, 1);
                    else filter.value = value;
                    insertNewFilter = 0;
                  }
                });
              }

              if (insertNewFilter) {
                filtered.push({ id: accessor, value });
              }

              this.setState({ filtered });
            };

            return (
              <Row className="mx-auto">
                <Col className="mb-4">
                  <Nav className="justify-content-center">
                    <Button className="nav-button" onClick={() => onFilteredChanged('', 'org')}>All</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('cns', 'org')}>CNS</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('uci', 'org')}>UCI</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('cosi', 'org')}>COSI</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('smm', 'org')}>SMM</Button>
                  </Nav>
                </Col>
                <Col className="mb-3" xs={12}>
                  <Card body>
                    <ReactTable
                      data={formatForTable(data)}
                      columns={columns}
                      className="-striped -highlight"
                      defaultSorted={defaultSort}
                      defaultFilterMethod={FilterMethod}
                      defaultPageSize={10}
                      filterable
                      filtered={filtered}
                      onFilteredChange={(filter, column, value) => {
                        onFilteredChanged(value, column.id || column.accessor);
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            );
          }
        }
      </Query>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultSort: PropTypes.arrayOf(PropTypes.object).isRequired,
  formatForTable: PropTypes.func.isRequired,
  query: PropTypes.objectOf(PropTypes.any).isRequired,
  queryVariables: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Table;
