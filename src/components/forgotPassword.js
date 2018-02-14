import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';

//0a1f44
class ForgotPasswordForm extends Component {
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
    const ForgotPasswordDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      .forgotPasswordFrom.forgotPasswordFrom {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }
      .forgotPasswordInput.forgotPasswordInput {
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
      <ForgotPasswordDiv>
      <h2> Retrieve Your Password </h2>
      <div>
        Please enter your email address below. You will receive a link to reset your password.
      </div>
      <Form
        onSubmit={submittedValues => this.props.onFormSubmit( { submittedValues } )}
      >
        { formApi => (
          <form className = 'forgotPasswordFrom' onSubmit={formApi.submitForm} id="forgotPassForm">

            <Text
                className = 'forgotPasswordInput'
                type = 'text'
                field="email"
                id="email"
                placeholder = "Email"
              />

            <button className="newCardSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </ForgotPasswordDiv>
    );
  }
}

export default ForgotPasswordForm;
