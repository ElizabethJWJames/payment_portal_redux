import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';

//0a1f44
class SuccessMsg extends Component {
  constructor(props){
      super(props);
      this.state = {
        displayError: false
      };
  }

  static propTypes = {
    onFormSubmit: PropTypes.func
  }

  static defaultProps = {
    onFormSubmit: (x)=>{console.log(x)}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  render() {
    const RegistrationDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      > h2 {
        background: #0a1f44;
        color: #fff;
        width: calc(100% - 20px);
        margin: 0px;
        padding: 15px 10px;
      }
      .error.error {
        font-size: 1em;
        padding: 20px 10px;
        color: #ED1C24;
        display: ${this.state.displayError ? 'block' : 'none'}
      }
      .instructions.instructions {
        font-size: 1em;
        padding: 20px 10px;
      }
      .registrationFrom.registrationFrom {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: calc(100% - 20px);
        padding: 10px
      }
      .registrationInput.registrationInput {
        width: calc(100% - 20px);
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }
      .registerSubmit.registerSubmit {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
        margin-top: 10px;
        border-radius: 5px;
        padding: 10px;
        height: 48px;
        width: 250px;
        font-size: 1.5em;
        color: #fff;
        border: none;
        background: #0a1f44;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <RegistrationDiv>
        <h2> Success </h2>
        <p>Your Request Has Been Processed. </p>
      </RegistrationDiv>
    );
  }
}

export default SuccessMsg;
