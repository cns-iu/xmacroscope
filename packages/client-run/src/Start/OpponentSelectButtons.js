//
// Opponent select view
//
import React from 'react';
import { Row, Col } from 'reactstrap';
import mouseTrap from 'react-mousetrap';
import OpponentSelectButton from './OpponentSelectButton';

class OpponentSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.bindShortcut('s', this.props.keypress);
  }

  render() {
    // TODO - Load these from settings
    const opponents = [
      { id: 'fast-animal', name: 'Fast animal', runTime: 1500 },
      { id: 'slow-animal', name: 'Slow animal', runTime: 4500 },
      { id: 'fast-person', name: 'Fast person', runTime: 2500 },
      { id: 'slow-person', name: 'Slow person', runTime: 4000 },
      { id: 'cartoon-character', name: 'Cartoon character', runTime: 5000 },
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
                <Col
                  key={item.name}
                  xs={6}
                  className="mb-3"
                >
                  <OpponentSelectButton
                    opponent={item.id}
                    opponentName={item.name}
                    opponentTime={item.runTime}
                  />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    );
  }
}

export default mouseTrap(OpponentSelect);
