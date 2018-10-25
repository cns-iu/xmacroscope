import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// setInput function makes use of Formik setFieldValue Method
// setFiledValue Method adds value to Formick HOC
const CustomInputHOC = (WrappedComponentUno, WrappedComponentDoz) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      };

      this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue = (value) => {
      this.setState({ value });
      this.props.setInput(`${this.props.name}`, value);
    }
    render() {
      const { value } = this.state;
      return (
        <Fragment>
          <WrappedComponentUno
            value={value}
            ref={this.textInput}
            {...this.props}
          />
          <WrappedComponentDoz
            value={value}
            updateInputValue={this.updateInputValue}
            {...this.props}
          />
        </Fragment>
      );
    }
  }

  HOC.propTypes = {
    setInput: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  return HOC;
};


export default CustomInputHOC;
