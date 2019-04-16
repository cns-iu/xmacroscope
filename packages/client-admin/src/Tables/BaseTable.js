import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

const Table = ({
  columns, formatFunction, query, queryVariables,
}) => (
  <Query
    query={query}
    variables={queryVariables}
  >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const TableData = formatFunction(data);

      return (
        <Row className="mx-auto">
          <Col className="mb-3" xs={12}>
            <Card body>
              <ReactTable
                data={TableData}
                columns={columns}
                className="-striped -highlight"
                defaultSorted={[
                  {
                    id: 'age',
                    desc: true,
                  },
                ]}
                defaultFilterMethod={(filter, row) => String(row.org).startsWith(filter.value)}
                defaultPageSize={10}
                filterable
              />
            </Card>
          </Col>
        </Row>
      );
    }}
  </Query>
);

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  formatFunction: PropTypes.func.isRequired,
  query: PropTypes.objectOf(PropTypes.any).isRequired,
  queryVariables: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Table;
