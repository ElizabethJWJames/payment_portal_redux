import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';

//0a1f44
class NewAccountForm extends Component {
  constructor(props){
      super(props);
      this.state = {};
      this.errorValidator = this.errorValidator.bind(this);
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

  errorValidator(values={}) {
      return {
        name: !values.name || (values.name && values.name.trim() === '') ? (<p>Name is a required field</p>) : (<div/>),
        email: !values.email || (values.email && values.email.trim() === '') ? (<p>Email is a required field</p>) : (<div/>),
        phone: !values.phone || (values.phone && values.phone.trim() === '') ? (<p>Phone Number is a required field</p>) : (<div/>),
        msg: !values.msg || (values.msg && values.msg.trim() === '') ? (<p>A Message is a required field</p>) : (<div/>),
      };
    }
    // {this.errorValidator().name}
    // {this.errorValidator().email}
    // {this.errorValidator().phone}
    // {this.errorValidator().msg}

  render() {
    const RegistrationDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      .registrationFrom.registrationFrom {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }
      .registrationInput.registrationInput {
        width: calc(100% - 20px);
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }
      .contactTextArea.contactTextArea {
        width: calc(100% - 20px);
        height: 96px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
      }
      .contactSubmit.contactSubmit {
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
      <Form
        onSubmit={submittedValues => this.props.onFormSubmit( { submittedValues } )}
      >
        { formApi => (
          <form className = 'registrationFrom' onSubmit={formApi.submitForm} id="newAccountForm">

            <Text
                className = 'registrationInput'
                type = 'text'
                field="name"
                id="name"
                placeholder = "Full Name on Card"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="SSN"
                id="SSN"
                placeholder = "Full SSN (123-45-6789)"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="DOB"
                id="DOB"
                placeholder = "Enter Date of Birth (MM/DD/YYYY)"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="email"
                id="email"
                placeholder = "Email"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="password"
                id="password"
                placeholder = "Password"
              />
            <Text
                className = 'registrationInput'
                type = 'text'
                field="confirmPassword"
                id="confirmPassword"
                placeholder = "Confirm Password"
              />

            <button className="newCardSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </RegistrationDiv>
    );
  }
}

export default NewAccountForm;
