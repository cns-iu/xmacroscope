import React, { Component } from 'react';
import ShapeWrapper from '../Primatives/ShapePrimatives';

export class shapePicker extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      selectedShape: '',
    };
  }

  render() {
    return (
      <ShapeWrapper>
        hi
      </ShapeWrapper>
    );
  }
}

export default shapePicker;
