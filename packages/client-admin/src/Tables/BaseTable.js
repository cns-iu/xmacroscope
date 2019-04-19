import React, { Component } from 'react';
import {
  Row, Col, Card, Nav, Button,
} from 'reactstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import './BaseTable.css';

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
      tableRef: null,
      title: props.title,
    };
  }

  render() {
    const {
      columns, defaultSort, filtered, formatForTable, query, queryVariables, title,
    } = this.state;

    let { tableRef } = this.state;
    return (
      <Query
        query={query}
        variables={queryVariables}
        pollInterval={300000}
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
              /* eslint prefer-template: 0 */
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

            const exportData = (allData) => {
              /* eslint max-len: 0 */
              const tableData = allData === true ? tableRef.getResolvedState().sortedData : tableRef.props.data;

              // Get header from first object and filter extra fields beginning with _ from sortedData objec
              const header = Object.keys(tableData[0]).filter(f => f.indexOf('_') === -1);

              // Convert object array into a simple csv string
              const csvArray = [header].concat(tableData.map(obj => header.map(field => obj[field])));
              const csvContent = csvArray.map(row => row.join(',')).join('\n') + '\n';

              // Trigger CSV download
              const anchor = document.getElementById('csvDownload');

              // Using encodeURIComponent because we need to escape '#' in color
              anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
              anchor.target = '_blank';
              anchor.download = `${title}.csv`;
              anchor.click();
            };

            return (
              <Row className="mx-auto">
                <Col>
                  <h2 className="text-center">{title}</h2>
                  <Nav className="justify-content-center mb-3">
                    <Button className="nav-button" onClick={() => onFilteredChanged('', 'org')}>All</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('cns', 'org')}>CNS</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('uci', 'org')}>UCI</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('cosi', 'org')}>COSI</Button>
                    <Button className="nav-button" onClick={() => onFilteredChanged('smm', 'org')}>SMM</Button>
                  </Nav>
                  <Col className="mb-2 pr-0 text-right">
                    <Button className="mr-2" onClick={() => exportData(true)}>Export Current Data</Button>
                    <Button className="mr-0" onClick={() => exportData(false)}>Export All Data</Button>
                    <a id="csvDownload" href="/">&nbsp;</a>
                  </Col>
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
                      ref={(r) => {
                        tableRef = r;
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
  title: PropTypes.string.isRequired,
};

export default Table;
