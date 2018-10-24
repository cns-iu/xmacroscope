import React, { Fragment } from 'react';

const CustomInputHOC = (WrappedComponentUno, WrappedComponentDoz) => {
  class HOC extends React.Component {
    state= {
      inputName: this.props.inputName,
      inputValue: '',
    }
    updateInputValue = (value) => {
      this.setState = ({ inputValue: value });
    }
    render() {
      const { inputName, inputValue } = this.state;
      return (
        <Fragment>
          <WrappedComponentUno
            inputName={inputName}
            inputValue={inputValue}
            {...this.props}
          />
          <WrappedComponentDoz
            inputName={inputName}
            inputValue={inputValue}
            updateInputValue={this.updateInputValue}
            {...this.props}
          />
        </Fragment>
      );
    }
  }

  return HOC;
};

export default CustomInputHOC;
