import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';


//0a1f44
class NewCardForm extends Component {
  constructor(props){
      super(props);
      this.state = {};
      this.errorValidator = this.errorValidator.bind(this);
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
      .newCardFrom.newCardFrom {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 60px;
        padding: 10px 0px;
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
      .newCardSubmit.newCardSubmit {
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
        background:  #3d78d8;
        :hover {
          background: #2c5fb3;
        }
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <NewCardDiv>
      <h2> Add New Card </h2>
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
      <Form
        onSubmit={submittedValues => this.props.onFormSubmit( submittedValues )}
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
            <button className="newCardSubmit" type="submit"> Next </button>
          </form>
        )}
      </Form>
      </NewCardDiv>
    );
  }
}

export default NewCardForm;
