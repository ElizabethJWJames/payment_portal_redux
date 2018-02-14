import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';

//0a1f44
class NewCardForm extends Component {
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
    const NewCardDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      .contactForm.contactForm {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }
      .newCardInput.newCardInput {
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
      <NewCardDiv>
      <h2> Add New Card </h2>
      <Form
        onSubmit={submittedValues => this.props.onFormSubmit( { submittedValues } )}
      >
        { formApi => (
          <form className = 'newCardFrom' onSubmit={formApi.submitForm} id="newCardForm">

            <Text
                className = 'newCardInput'
                type = 'text'
                field="name"
                id="name"
                placeholder = "Full Name on Card"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="billingAddress"
                id="billingAddress"
                placeholder = "billing Address"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="billingCity"
                id="billingCity"
                placeholder = "Billing City"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="billingState"
                id="billingState"
                placeholder = "Billing State"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="billingZip"
                id="billingZip"
                placeholder = "Billing Zip"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="cardNumber"
                id="cardNumber"
                placeholder = "card Number"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="cardExpirationDate"
                id="cardExpirationDate"
                placeholder = "card Expiration Date"
              />
            <Text
                className = 'newCardInput'
                type = 'text'
                field="cardCSV"
                id="cardCSV"
                placeholder = "card CSV"
              />
            <button className="newCardSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </NewCardDiv>
    );
  }
}

export default NewCardForm;
