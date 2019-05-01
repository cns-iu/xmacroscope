import { Query } from 'react-apollo';
import { Row, Col, Card } from 'reactstrap';
import gql from 'graphql-tag';
import React from 'react';
import ReactTable from 'react-table';
import moment from 'moment';
import 'react-table/react-table.css';
import '../Styles/Runs.css';

const GET_RUNS = gql`
  query Runs($lastX: Int!) {
    Runs(lastX: $lastX){
      id
      start
      end
    }
  }
`;

function Runs() {
  const dateFormat = 'dddd, MMMM Do YYYY, h:mm:ss a';
  return (
    <Query
      query={GET_RUNS}
      variables={{ lastX: parseInt('10', 10) }}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Row>

            <Col xs={12}>
              <Card body>
                <ReactTable
                  data={data.runs}
                  columns={[
                    {
                      Header: 'Run ID',
                      accessor: 'id',
                    },
                    {
                      Header: 'Start',
                      accessor: 'startTime',
                      className: 'wordwrap',
                      Cell: row => (
                        <div>{moment(row.row.startTime).format(dateFormat)}</div>
                      ),
                    },
                    {
                      Header: 'End',
                      accessor: 'endTime',
                      className: 'wordwrap',
                      Cell: row => (
                        <div>
                          {
                                  row.row.endTime
                                    ? moment(row.row.endTime).format(dateFormat)
                                    : '-'
                                }
                        </div>
                      ),
                    },
                    {
                      Header: 'Duration',
                      accessor: 'duration',
                      Cell: (row) => {
                        const completed = !!(row.row.startTime && row.row.endTime);
                        const startDate = moment(row.row.startTime).valueOf();
                        const endDate = moment(row.row.endTime).valueOf();
                        const runDuration = endDate - startDate;
                        return (
                          <div>
                            {completed
                              ? <div>{runDuration}</div>
                              : <div>-</div>
                                  }
                          </div>);
                      },
                    },
                  ]}
                />
              </Card>
            </Col>
          </Row>
        );
      }}
    </Query>
  );
}

export default Runs;
