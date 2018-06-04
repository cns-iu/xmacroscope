import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import OpponentSelectButton from './OpponentSelectButton';

const OpponentSelect = () => {
  const opponents = [
    { name: 'fast animal' },
    { name: 'slow animal' },
    { name: 'fast person' },
    { name: 'slow person' },
    { name: 'cartoon character' },
  ];
  return (

    <Row>
      <Col>
        <Row>
          <Col>
            <h1>Select an opponent</h1>
          </Col>
        </Row>
        <Row>
          {
            opponents.map(item => (
              <Col key={item.name} md={6} lg={6} className="mb-3">
                <OpponentSelectButton opponentName={item.name} />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );
};

export default OpponentSelect;
