import React, { Component } from 'react'
import { ShapeWrapper } from '../Primatives/ShapePrimatives';
import PropTypes from 'prop-types'

export class shapePicker extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
  
    this.state = {
       selectedShape: ''
    }
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
