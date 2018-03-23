import React from 'react';
import { Button } from 'reactstrap';
import Mousetrap from 'mousetrap';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind('s', () => {
      console.log('Pressing S');
      this.props.handleClick();
    });
  }

  handleStartClick() {
    // Do mutation
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <h1>Start screen</h1>
        <Button onClick={this.handleStartClick} color="primary">Start</Button>
      </div>
    );
  }
}

Start.propTypes = {};
Start.defaultProps = {};

export default Start;
