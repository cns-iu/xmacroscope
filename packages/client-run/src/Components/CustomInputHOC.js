import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// setInput function makes use of Formik setFieldValue Method
// setFiledValue Method adds value to Formik HOC
const CustomInputHOC = (FieldTitle, FieldControl, FieldError) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      };
      this.updateInputValue = this.updateInputValue.bind(this);
      this.updateInputValueConcat = this.updateInputValueConcat.bind(this);
      this.clearInput = this.clearInput.bind(this);
    }

    updateInputValue = (value) => {
      const { setInput, name } = this.props;
      this.setState({ value });
      setInput(`${name}`, value);
    };

    updateInputValueConcat = (value) => {
      const { setInput, name } = this.props;
      const { value: valueCurrent } = this.state;
      const updatedValue = valueCurrent + value;
      this.setState({ value: updatedValue });
      setInput(`${name}`, updatedValue);
    };

    clearInput = () => {
      const { setInput, name } = this.props;
      this.setState({ value: '' });
      setInput(`${name}`, '');
    };

    render() {
      const { value } = this.state;
      return (
        <Fragment>
          <FieldTitle
            value={value}
            {...this.props}
          />
          <FieldControl
            value={value}
            updateInputValueConcat={this.updateInputValueConcat}
            updateInputValue={this.updateInputValue}
            clearInput={this.clearInput}
            {...this.props}
          />
          <FieldError
            value={value}
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
