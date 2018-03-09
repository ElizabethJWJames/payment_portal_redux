import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';
import moment from 'moment';

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
    onFormSubmit: PropTypes.func,
    closeModalCB: PropTypes.func

  }

  static defaultProps = {
    onFormSubmit: (x)=>{console.log(x)},
    closeModalCB: (x)=>{console.log(x)}

  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  passwordsMatchCheck(values){
    console.log('CHECK',values)
    if(values.password === values.confirmPassword){
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

  formatSSNNumber(value){
    const s = value;
    const s2 = (""+s).replace(/\D/g, '');
    const m = s2.match(/^(\d{3})(\d{2})(\d{4})$/);
    console.log('formatPhoneNumber', s, s2, m, (!m) ? s : m[1] + "-" + m[2] + "-" + m[3])
    return (!m) ? s :  m[1] + "-" + m[2] + "-" + m[3];
  }

  formatValues(formState, formApi){
     if(formState.id === 'SSN'){
       const newValue = this.formatSSNNumber(formState.value)
       return formApi.setValue('SSN', newValue);
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
        width: calc(100% - 101px);
        margin: 0px;
        padding: 15px 10px;
        position: fixed;
      }
      .closeModal.closeModal {
        position: fixed;
        padding: 15px 10px;
        right: 40px;
        background: #0a1f44;
        color: #fff;
        &:hover {
          background: #ED1C24
        }
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
        margin-top: 60px;
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
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex: 3;
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
        background: #3d78d8;
        :hover {
          background: #2c5fb3;
        }
      }
      .registrationInputDiv.registrationInputDiv {
        width: calc(100% - 20px);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      .registrationLabel.registrationLabel {
        height: 48px;
        display: flex;
        align-items: center;
        margin-right: 10px;
        flex: 1;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <RegistrationDiv>
      <h2> Register </h2>
      <div
       className = 'closeModal'
       onClick = {this.props.closeModalCB}
       >
       <SvgIcon
           iconName= 'x'
           iconSize= '24px'
           iconFill= "#fff"
         />
      </div>
      <div className = "instructions">
        Please enter your infomation below. You will receive a link to verify your account.
      </div>
      <div className = "error">
        Passwords Do Not Match
      </div>
      <Form
        onSubmit={submittedValues => this.passwordsMatchCheck( submittedValues )}
      >
        { formApi => (
          <form
              className = 'registrationFrom'
              onChange={(formState)=>{this.formatValues(formState.target, formApi)}}
              onSubmit={formApi.submitForm}
              id="newAccountForm"
            >
            <div className = 'registrationInputDiv'>
              <label className = 'registrationLabel' htmlFor="name">Full Name:</label>
              <Text
                  className = 'registrationInput'
                  type = 'text'
                  field="name"
                  id="name"
                  placeholder = "Full Name"
                  required
                  autoComplete="name"
                />
            </div>
            <div className = 'registrationInputDiv'>
              <label className = 'registrationLabel' htmlFor="SSN">Social Security Number:</label>
              <Text
                className = 'registrationInput'
                field="SSN"
                id="SSN"
                placeholder = "Full SSN (123-45-6789)"
                required
                type="text"
                inputMode="number"
                minLength="9"
                maxLength="12"
                pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
                autoComplete="off"
              />
          </div>
          <div className = 'registrationInputDiv'>
            <label className = 'registrationLabel' htmlFor="DOB">Date of Birth:</label>
            <Text
                className = 'registrationInput'
                type = 'date'
                field="DOB"
                autoComplete = "bday"
                id="DOB"
                placeholder = "Enter Date of Birth (MM/DD/YYYY)"
                required
                pattern = "^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$"
                min="1900-12-31"
                max={moment(Date.now()).format('YYYY-MM-DD')}
              />
          </div>
          <div className = 'registrationInputDiv'>
            <label className = 'registrationLabel' htmlFor="regEmail">Email:</label>
            <Text
                className = 'registrationInput'
                type = 'text'
                field="email"
                id="regEmail"
                placeholder = "Email"
                required
                autoComplete = "email"
                pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$"
                title = "Please Input a Valid Email"
              />
          </div>
          <div className = 'registrationInputDiv'>
            <label className = 'registrationLabel' htmlFor="regPassword">Password:</label>
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
          </div>
          <div className = 'registrationInputDiv'>
            <label className = 'registrationLabel' htmlFor="confirmPassword">Confirm Password:</label>
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
          </div>

            <button className="registerSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </RegistrationDiv>
    );
  }
}

export default NewAccountForm;
