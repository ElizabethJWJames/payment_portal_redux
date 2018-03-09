import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea, Select } from 'react-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import actions from '../redux-auto/index.js';

// import Modal from 'react-modal';
// import NewCardForm from './../components/newCard.js';

//0a1f44
class PayMeRoute extends Component {
  constructor(props){
      super(props);
      this.state = {
        activeAccount: 0,
        // modalIsOpen: false,
        // displayInModal: 'div',
      };
      this.changeIndex = this.changeIndex.bind(this);
      this.cardOptions = this.cardOptions.bind(this);
      this.renderAccountSelect = this.renderAccountSelect.bind(this);
      this.renderPaymentDetails = this.renderPaymentDetails.bind(this);
      this.openModal = this.openModal.bind(this);
      // this.closeModal = this.closeModal.bind(this);
      // this.renderModalContent = this.renderModalContent.bind(this);
  }

  static propTypes = {
    cardsOnFile: PropTypes.array
  }

  static defaultProps = {
    cardsOnFile: []
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  changeIndex(event){
    const newIndex = event.target.value;
    if(newIndex !== this.state.activeAccount){
      this.setState((prevState)=>{
        return {...prevState, activeAccount: newIndex}
     });
    }
  }

  cardOptions(currentAccount){
    const creditCards = currentAccount.credit_cards ? currentAccount.credit_cards : []
    return creditCards.map((item, index)=>{
      return {
        label: item.LAST4,
        value: item.LAST4
      }
    })
  }

  onNewCardSubmit(values){
    //actions.main.signIn(values)
    //actions.main.auth(values)
    console.log(values)
  }

  openModal(displayComponent){
    return actions.main.updateModalContent({displayComponent: displayComponent})
        //return {...prevState, modalIsOpen: true, displayInModal: displayComponent}
  }

  renderPaymentDetails(){
    const accountItem = this.props.accountInformation[this.state.activeAccount];
    const accountInfo = accountItem && accountItem.account_info ? accountItem.account_info : {};
    return (
      <Accordion>
          <AccordionItem>
             <AccordionItemTitle
              hideBodyClassName = "accordion__title--hidden"
             >
                 <h3> <div className="accordion__arrow" role="presentation" /> Payment Details</h3>
             </AccordionItemTitle>
             <AccordionItemBody>
             <p><b>Loan Payment: </b> {accountInfo.pmtdue}</p>
             <p><b>CP: </b> {accountInfo.cpduenow}</p>
             <p><b>Sidenote: </b> {accountInfo.snDueNow}</p>
             <p><b>NSF Fee: </b> {accountInfo.nsfdue}</p>
             <p><b>Late Fee: </b> {accountInfo.LCDue}</p>
             <p><b>Total Due: </b> <b>{accountInfo.total}</b></p>
             </AccordionItemBody>
           </AccordionItem>
      </Accordion>
    )
  }

  renderAccountSelect(){
    return (
      <div className = "accountSelect">
          <select className="changeAccount" value={this.state.activeAccount} onChange = {this.changeIndex}>
            {
              this.props.accountInformation.map((item, index)=>{
                return (
                  <option value= {index} key = {index}>
                    {`${item.AccountText}`}
                  </option>
                )
              })
            }
          </select>
      </div>
    )
  }

  formatMoney(value){
    console.log('value', value)
    const num = Number(value).toFixed(2);
    console.log('num', num)
    return num;
  }

  formatValues(formState, formApi){
    console.log('formatValues',formState, formApi)
     if(formState.id === 'amtToPay'){
       console.log('HELLO',formState, formApi)
       const newValue = this.formatMoney(formState.value)
       return formApi.setValue('amtToPay', newValue);
     }
  }

  render() {
    const PaymentDiv = styled.div`
      .changeAccount.changeAccount {
        padding: 5px;
        display: flex;
        width: 100%;
        height: 48px;
        font-size: 1em;
      }
      .changeCard.changeCard {
        width: 90%;
        padding: 5px;
        justify-content: center;
        height: 48px;
        font-size: 1em;
        border-radius: 5px;
        display: flex;
      }
      .paymentSubmit.paymentSubmit {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
        margin: 10px;
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
      > h2 {
        color: #0a1f44;
        text-align: left;
      }
      > h3 {
        text-align: left;
      }
      .modal.modal {
        position: absolute;
        display: block;
        top: 40px;
        left: 40px;
        right: 40px;
        bottom: 40px;
        border: 1px solid rgb(204, 204, 204);
        background: rgb(255, 255, 255);
        overflow: auto;
        border-radius: 4px;
        outline: none;
        padding: 0px;
      }
      .overlay.overlay {
        position: fixed;
        display: block;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: rgba(255, 255, 255, 0.75);
      }
      .currentPayment.currentPayment {
        display: flex;
        justify-content: space-around;
        padding: 10px 0px;
        font-size: 1em;
        font-weight: 600;
      }
      .paymentForm.paymentForm {
        display: flex;
        flex-direction: column;
        justify: space-around;
        flex-wrap: wrap;
        text-align: left;
      }
      .payform.payform {
        border: 1px solid #0a1f44;
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .paymentInput.paymentInput {
        width: 90%;
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
      }
      .paymentLabel.paymentLabel {
        width: 90%;
        height: 48px;
        justify-content: center;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
      }
      .accordion__title {
        color: #fff;
        background: #0a1f44;
        padding: 5px;
        display: flex;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin-top: 10px;
      }
      .accordion__title--hidden {
        background: #808080;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        > h3 > .accordion__arrow {
          transform: rotate(0deg);
        }
      }
      .accordion__arrow.accordion__arrow {
          display: inline-block;
          position: absolute;
          width: 24px;
          height: 12px;
          top: 15px;
          left: 10px;
          transform: rotate(-180deg);
          &:after {
              display: block;
              position: absolute;
              top: 50%;
              width: 10px;
              height: 2px;
              background-color: currentColor;
              content: '';
          }
          &:before {
              display: block;
              position: absolute;
              top: 50%;
              width: 10px;
              height: 2px;
              background-color: currentColor;
              content: '';
          }
          &:after {
              right: 4px;
              transform: rotate(-45deg);
          }
          &:before {
              left: 4px;
              transform: rotate(45deg);
          }
      }
      .accordion__item {
        margin-bottom: 10px
      }
      .accordion__title > h3 {
        padding: 10px 0px 10px 40px;
        margin: 0px;
        position: relative;
      }
      .accordion__body {
          display: block;
          animation: fadein .35s ease-in;
          border: 1px solid #0a1f44;
          padding: 10px
      }
      .accordion__body--hidden {
          display: none;
          opacity: 0;
          animation: fadein .35s ease-in;
      }
      .buttonDiv.buttonDiv{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 100%
      }

      @keyframes fadein {
          0% {
              opacity: 0;
          }

          100% {
              opacity: 1;
          }
      }

      @-webkit-keyframes fadein {
          0% {
              opacity: 0;
          }

          100% {
              opacity: 1;
          }
      }

      @-moz-keyframes fadein {
          0% {
              opacity: 0;
          }

          100% {
              opacity: 1;
          }
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    const currentAccount = this.props.accountInformation[this.state.activeAccount];
    const companyInfo = currentAccount.company_info ? currentAccount.company_info : {};
    const paymentInfo = currentAccount.payment_info ? currentAccount.payment_info : {};
    const accountInfo = currentAccount && currentAccount.account_info ? currentAccount.account_info : {};

    return (
      <PaymentDiv>

        <h2>Make A Payment</h2>
        <h3>Choose an Account</h3>
          {this.renderAccountSelect()}
        <div className = "alerts">
        </div>
        <h3>Payment Information</h3>
        <div className="currentPayment">
          <div className = "dueDate">Due Date: {paymentInfo.vNextDueDat}</div>
          <div className="amountDue">Amount Due: ${accountInfo.pmtdue}</div>
        </div>
          <div className="paymentForm">
            <Form
              defaultValues = { {amtToPay: accountInfo.pmtdue} }
            >
              { (formApi) => (
                <form
                    className = "payform"
                    onSubmit={formApi.submitForm}
                    onBlur={(formState)=>{this.formatValues(formState.target, formApi)}}
                    id="form1"
                  >
                  <label className = "paymentLabel" htmlFor="amtToPay">
                      Payment Amount
                    </label>
                  <Text
                      className = "paymentInput"
                      type = 'number'
                      field="amtToPay"
                      id="amtToPay"
                      step = "0.01"
                    />
                  <label className = "paymentLabel" htmlFor="cardOnFile">
                      Cards On File
                    </label>
                  <Select
                      className = "changeCard"
                      field="cardOnFile"
                      id="cardOnFile"
                      options={this.cardOptions(currentAccount)}
                    />
                  <div className='buttonDiv'>
                    <button
                     className = 'paymentSubmit'
                     onClick = {()=>{this.openModal('NewCard')}}
                     >
                      New Card
                    </button>
                    <button className = 'paymentSubmit' type="submit">Submit</button>
                  </div>
                </form>
              )}
            </Form>
            {this.renderPaymentDetails()}
          </div>
      </PaymentDiv>
    );
  }
}

const hocComponent = compose( connect((state, props)=>{
  console.log(state.main)
    return ({
      accountInformation: state.main.accountInformation,
      cardsOnFile: state.main.cardsOnFile
    });
}));

export default hocComponent(PayMeRoute);


// <iframe
//     src="<?= $response['actionUrl'].$response['sealedSetupParameters'] ?>"
//     style="height:500px; width:98%; border:0;"
//     id="saving_card_iframe"
//   >
// </iframe>
