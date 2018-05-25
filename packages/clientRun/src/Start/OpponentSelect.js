import React from 'react';
import { Row, Col } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import OpponentSelectButton from './OpponentSelectButton';
import RaceStart from './RaceStart';

// Local state
// Store selected opponent
const GET_OPPONENT = gql`
  {
    opponent @client
  }
`;

function OpponentSelect() {
  const opponents = [
    { name: 'fast animal' },
    { name: 'slow animal' },
    { name: 'fast person' },
    { name: 'slow person' },
    { name: 'cartoon character' },
  ];
  return (
    <Query query={GET_OPPONENT}>
      {({ data: { opponent } }) => (
          opponent
          ? <RaceStart opponentName={opponent} />
          :
          <Row>
            {
              opponents.map(item => (
                <Col key={item.name} md={6} lg={6} className="mb-3">
                  <OpponentSelectButton opponentName={item.name} />
                </Col>
              ))
            }
          </Row>
        )}
    </Query>
  );
}

export default OpponentSelect;
