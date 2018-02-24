import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea, Select } from 'react-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

//0a1f44
class PayMeRoute extends Component {
  constructor(props){
      super(props);
      this.state = {
        activeAccount: 0
      };
      // this.changeIndex = this.changeIndex.bind(this);
      // this.cardOptions = this.cardOptions.bind(this);
      // this.renderAccountSelect = this.renderAccountSelect.bind(this);
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

  // changeIndex(event){
  //   const newIndex = event.target.value;
  //   if(newIndex !== this.state.activeAccount){
  //     this.setState((prevState)=>{
  //       return {...prevState, activeAccount: newIndex}
  //    });
  //   }
  // }
  //
  // cardOptions(){
  //   return this.props.accountInformation[this.state.activeAccount].credit_cards.map((item, index)=>{
  //     return {
  //       label: item.LAST4,
  //       value: item.LAST4
  //     }
  //   })
  // }

  // renderAccountSelect(){
  //   return (
  //     <div className = "accountSelect">
  //         <select className="changeAccount" value={this.state.activeAccount} onChange = {this.changeIndex}>
  //           {
  //             this.props.accountInformation.map((item, index)=>{
  //               return (
  //                 <option value= {index} key = {index}>
  //                   {`${item.AccountText}`}
  //                 </option>
  //               )
  //             })
  //           }
  //         </select>
  //     </div>
  //   )
  // }

  render() {
    // const PaymentDiv = styled.div`
    //   .changeAccount.changeAccount {
    //     padding: 5px;
    //     display: flex;
    //     width: 100%;
    //     height: 48px;
    //     font-size: 1em;
    //   }
    //   .changeCard.changeCard {
    //     width: 90%;
    //     padding: 5px;
    //     justify-content: center;
    //     height: 48px;
    //     font-size: 1em;
    //     border-radius: 5px;
    //     display: flex;
    //   }
    //   > h2 {
    //     color: #0a1f44;
    //     text-align: left;
    //   }
    //   > h3 {
    //     text-align: left;
    //   }
    //   .currentPayment.currentPayment {
    //     display: flex;
    //     justify-content: space-around;
    //     padding: 10px 0px;
    //     font-size: 1em;
    //     font-weight: 600;
    //   }
    //   ${props => css`${this.props.defaultCompStyle}`}
    // `;
    //
    // const PaymentFormDiv = styled.div`
    //   display: flex;
    //   flex-direction: column;
    //   justify: space-around;
    //   flex-wrap: wrap;
    //   text-align: left;
    //
    //   ${props => css`${this.props.defaultCompStyle}`}
    // `;
    // const PaymentForm = styled.form`
    //   border: 1px solid #0a1f44;
    //   width: 100%;
    //   height: 250px;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-around;
    //   align-items: center;
    //   ${props => css`${this.props.defaultCompStyle}`}
    // `;
    // const PaymentInput = styled.input`
    //   width: 90%;
    //   height: 48px;
    //   border-radius: 5px;
    //   display: flex;
    //   flex-direction: column;
    //   ${props => css`${this.props.defaultCompStyle}`}
    // `;
    // const PaymentLabel = styled.label`
    //   width: 90%;
    //   height: 48px;
    //   justify-content: center;
    //   border-radius: 5px;
    //   display: flex;
    //   flex-direction: column;
    //   ${props => css`${this.props.defaultCompStyle}`}
    // `;

    return (
      // <PaymentDiv>
      //   <h2>Make A Payment</h2>
      //   // <iframe
      //   //     src="<?= $response['actionUrl'].$response['sealedSetupParameters'] ?>"
      //   //     style="height:500px; width:98%; border:0;"
      //   //     id="saving_card_iframe"
      //   //   >
      //   // </iframe>
      //   // <h3>Choose an Account</h3>
      //   //   {this.renderAccountSelect()}
      //   // <div className = "alerts">
      //   // </div>
      //   // <h3>Payment Information</h3>
      //   // <div className="currentPayment">
      //   //   <div className = "dueDate">Due Date: {'enter date here'}</div>
      //   //   <div className="amountDue">Amount Due: {this.props.accountInformation[this.state.activeAccount].loanPaymentAmtDue}</div>
      //   // </div>
      //   //   <PaymentFormDiv>
      //   //     <Form>
      //   //       { formApi => (
      //   //         <PaymentForm onSubmit={formApi.submitForm} id="form1">
      //   //           <PaymentLabel htmlFor="amtToPay">Payment Amount</PaymentLabel>
      //   //           <PaymentInput
      //   //               type = 'number'
      //   //               field="amtToPay"
      //   //               id="amtToPay"
      //   //             />
      //   //           <PaymentLabel htmlFor="cardOnFile">Cards On File</PaymentLabel>
      //   //           <Select
      //   //               className = "changeCard"
      //   //               field="cardOnFile"
      //   //               id="cardOnFile"
      //   //               options={this.cardOptions()}
      //   //             />
      //   //           <button type="submit">Submit</button>
      //   //         </PaymentForm>
      //   //       )}
      //   //     </Form>
      //   //   </PaymentFormDiv>
      // </PaymentDiv>
      <div/>
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
