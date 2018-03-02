import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';

//0a1f44
class NewAccountForm extends Component {
  constructor(props){
      super(props);
      this.state = {
        displayError: false
      };
      this.passwordsMatchCheck=this.passwordsMatchCheck.bind(this);
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

  passwordsMatchCheck(values){
    console.log('CHECK',values)
    if(values.submittedValues.password === values.submittedValues.confirmPassword){
      this.props.onFormSubmit(values);
      this.setState((prevState)=>{
        return {...prevState, displayError: false}
     });
    }else{
      this.setState((prevState)=>{
        return {...prevState, displayError: true}
     });
    }
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
      <h2> Register </h2>
      <div className = "instructions">
        Please enter your infomation below. You will receive a link to verify your account.
      </div>
      <div className = "error">
        Passwords Do Not Match
      </div>
      <Form
        onSubmit={submittedValues => this.passwordsMatchCheck( { submittedValues } )}
      >
        { formApi => (
          <form className = 'registrationFrom' onSubmit={formApi.submitForm} id="newAccountForm">

            <Text
                className = 'registrationInput'
                type = 'text'
                field="name"
                id="name"
                placeholder = "Full Name"
                required
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="SSN"
                id="SSN"
                placeholder = "Full SSN (123-45-6789)"
                required
                pattern = "^(?!000|666)(?:[0-6][0-9]{2}|7(?:[0-6][0-9]|7[0-2]))-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="DOB"
                id="DOB"
                placeholder = "Enter Date of Birth (MM/DD/YYYY)"
                required
                pattern = "^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="email"
                id="regEmail"
                placeholder = "Email"
                required
                pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$"
                title = "Please Input a Valid Email"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="password"
                id="regPassword"
                placeholder = "Password"
                required
                pattern = ".{6,}"
                title = "Please Input Password of 6 or more Characters"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="confirmPassword"
                id="confirmPassword"
                placeholder = "Confirm Password"
                required
                pattern = ".{6,}"
                title = "Please Input Password of 6 or more Characters"
              />

            <button className="registerSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </RegistrationDiv>
    );
  }
}

export default NewAccountForm;
