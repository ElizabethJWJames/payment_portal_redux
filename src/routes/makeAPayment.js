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

//0a1f44
class PayMeRoute extends Component {
  constructor(props){
      super(props);
      this.state = {
        activeAccount: 0
      };
      this.changeIndex = this.changeIndex.bind(this);
      this.cardOptions = this.cardOptions.bind(this);
      this.renderAccountSelect = this.renderAccountSelect.bind(this);
      this.renderPaymentDetails = this.renderPaymentDetails.bind(this);
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
    return currentAccount.credit_cards.map((item, index)=>{
      return {
        label: item.LAST4,
        value: item.LAST4
      }
    })
  }

  renderPaymentDetails(){
    const accountItem = this.props.accountInformation[this.state.activeAccount];
    const accountPaymentInfo = accountItem.payment_info
    return (
      <Accordion>
          <AccordionItem>
             <AccordionItemTitle>
                 <h3>Payment Details</h3>
             </AccordionItemTitle>
             <AccordionItemBody>
              <p><b>Last Amount Paid:</b> {accountPaymentInfo.vlastPmtAmt}</p>
              <p><b>Last Date Paid:</b> {accountPaymentInfo.vLastPmtPaid}</p>
              <p><b>Car Payment:</b> {accountPaymentInfo.vPMTDUE}</p>
              <p><b>Late Charges:</b> {accountPaymentInfo.vLCDUE}</p>
              <p><b>NFS Due:</b> {accountPaymentInfo.vNSFDue}</p>
              <p><b>Side Notes:</b> {accountPaymentInfo.vMISCDUE}</p>
              <p><b>CPI Premium:</b> {accountPaymentInfo.CPIDueNow}</p>
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
        background: #0a1f44;
      }
      > h2 {
        color: #0a1f44;
        text-align: left;
      }
      > h3 {
        text-align: left;
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
      .accordion__item {
        margin-bottom: 10px
      }
      .accordion__title > h3 {
        margin: 0px
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
    console.log(currentAccount)
    return (
      <PaymentDiv>
        <h2>Make A Payment</h2>
        <h3>Choose an Account</h3>
          {this.renderAccountSelect()}
        <div className = "alerts">
        </div>
        <h3>Payment Information</h3>
        <div className="currentPayment">
          <div className = "dueDate">Due Date: {currentAccount.payment_info.vNextDueDat}</div>
          <div className="amountDue">Amount Due: ${currentAccount.payment_info.vPMTDUE}</div>
        </div>
          <div className="paymentForm">
            <Form>
              { formApi => (
                <form className = "payform" onSubmit={formApi.submitForm} id="form1">
                  <label className = "paymentLabel" htmlFor="amtToPay">
                      Payment Amount
                    </label>
                  <input
                      className = "paymentInput"
                      type = 'number'
                      field="amtToPay"
                      id="amtToPay"
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
                  <button className = 'paymentSubmit' type="submit">Submit</button>
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
