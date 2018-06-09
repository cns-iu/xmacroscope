//
// Opponent select view
//
import React from 'react';
import { Row, Col } from 'reactstrap';
import OpponentSelectButton from './OpponentSelectButton';

const OpponentSelect = () => {
  const opponents = [
    { name: 'fast animal', raceTime: 1500 },
    { name: 'slow animal', raceTime: 4500 },
    { name: 'fast person', raceTime: 2500 },
    { name: 'slow person', raceTime: 4000 },
    { name: 'cartoon character', raceTime: 5000 },
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
              <Col key={item.name} xs={6} className="mb-3">
                <OpponentSelectButton
                  opponentName={item.name}
                  opponentTime={item.raceTime}
                />
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );
};

export default OpponentSelect;
