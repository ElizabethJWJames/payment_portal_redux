import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { AutoSizer, Table, Column } from 'react-virtualized';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

//0a1f44
class DashboardRoute extends Component {
  constructor(props){
      super(props);
      this.state = {
        activeAccount: 0
      };
      this.changeIndex = this.changeIndex.bind(this);
      this.renderAccountSummery = this.renderAccountSummery.bind(this);
      this.renderMyInformation = this.renderMyInformation.bind(this);
      this.renderCardInformation = this.renderCardInformation.bind(this);
      this.renderVehicleInsurance = this.renderVehicleInsurance.bind(this);
      this.renderLoanInfo = this.renderLoanInfo.bind(this);
      this.renderAccordians = this.renderAccordians.bind(this);
      this.renderTable = this.renderTable.bind(this);
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

  renderAccountSummery(accountItem){
    return (
      <div className = "accountSummery">
        <h2 className = "currentAccount">
        {`Account: ${accountItem.accountNumber} ${accountItem.carYear} ${accountItem.carMake} ${accountItem.carModel}`}
        </h2>
        <p>
          This is the current information that we have on-file. If this information is not correct please contact Training Solutions CAC/EFI at (941) 219-4344
          </p>
          <select className="changeAccount" value={this.state.activeAccount} onChange = {this.changeIndex}>
            {
              this.props.accountInformation.map((item, index)=>{
                return (
                  <option value= {index} key = {index}>
                    {`${item.accountNumber} ${item.carYear} ${item.carMake} ${item.carModel}`}
                  </option>
                )
              })
            }
          </select>
        <div className = "alerts">
        </div>
      </div>
    )
  }

  renderMyInformation(accountItem){
    return (
      <div className = "myInformation">
        <div className = "myDetails">
          <div className = "contactInfo">
            <h4>My Details</h4>
            <p><b>Name:</b>{accountItem.customerName}</p>
            <p><b>Home:</b> {accountItem.customerHomePhone}</p>
            <p><b>Cell:</b> {accountItem.customerCellPhone}</p>
          </div>
          <div className='Address'>
            <h4>My Address</h4>
            <p>{accountItem.customerStreet}</p>
            <p>{`${accountItem.customerCity} ${accountItem.customerState}, ${accountItem.customerZip}`}</p>
          </div>
        </div>
        <div className = "changePassword">
        </div>
      </div>
    )
  }

  renderTable(){

    return (
      <AutoSizer disableHeight>
      {({width})=>{
        return (
          <Table
            rowGetter = {({ index }) => this.props.cardsOnFile[index]}
            width = {width-17}
            rowHeight = {48}
            height = {350}
            rowCount = {this.props.cardsOnFile.length}
            className = "cardsOnFileTable"
            headerClassName = "tHeader"
            headerHeight = {48}
            rowClassName = 'tRow'
            headerStyle = {{
              overflow: '',
              paddingRight: '',
              flex: ''
            }}
            gridStyle = {{
              paddingRight: '',
            }}
          >
          <Column
            label="Name On Card"
            dataKey="name"
            className="tColumn"
            width = {width/3}
          />
          <Column
            label="Last Four"
            dataKey="last4"
            className="tColumn"
            width = {width/3}
          />
          <Column
            label="Edit"
            dataKey="edit"
            className="tColumn"
            width = {width/6}
          />
          <Column
            label="Delete"
            dataKey="delete"
            className="tColumn"
            width = {width/6}
          />
          </Table>
        )
      }}

      </AutoSizer >
    )
  }

  renderCardInformation(accountItem){
    return (
      <div className = "cardInformation">
        <div className = "cardsOnFile">
          {this.renderTable()}
        </div>
        <div className = "newCard">
        </div>
      </div>
    )
  }

  renderVehicleInsurance(accountItem){
    return (
      <div className = "vehicleInformation">
        <div className = "vehicle">
          <h4>Vehicle Information</h4>
          <p><b>Stock:</b> {accountItem.carStock}</p>
          <p><b>Vin:</b> {accountItem.carVin}</p>
          <p><b>Year:</b> {accountItem.carYear}</p>
          <p><b>Make:</b> {accountItem.carMake}</p>
          <p><b>Model:</b> {accountItem.carModel}</p>
          <p><b>Trim:</b> {accountItem.carTrim}</p>
          <p><b>Type:</b> {accountItem.carType}</p>
          <p><b>Color:</b> {accountItem.carColor}</p>
          <p><b>Miles:</b> {accountItem.carMiles}</p>
        </div>
        <div className = "insurance">
          <h4>Insurance Information</h4>
          <p><b>Company: </b> {accountItem.insuranceCompany}</p>
          <p><b>Street: </b> {accountItem.insuranceStreet}</p>
          <p><b>City: </b> {accountItem.insuranceCity}</p>
          <p><b>State: </b> {accountItem.insuranceState}</p>
          <p><b>Zip: </b> {accountItem.insuranceZip}</p>
          <p><b>Phone: </b> {accountItem.insurancePhone}</p>
          <p><b>Fax: </b> {accountItem.insuranceFax}</p>
          <p><b>Contact: </b> {accountItem.insuranceContact}</p>
          <p><b>Contact Phone: </b> {accountItem.insuranceContactPhone}</p>
          <p><b>Contact Fax: </b> {accountItem.insuranceContactFax}</p>
          <p><b>Email: </b> {accountItem.insuranceEmail}</p>
          <p><b>Required: </b> {accountItem.insuranceRequired}</p>
          <p><b>Policy No: </b> {accountItem.insurancePolicyNo}</p>
          <p><b>Expiration Date: </b> {accountItem.insuranceExpirationDate}</p>
          <p><b>Canceled: </b> {accountItem.insuranceCanceled}</p>
          <p><b>Cancellation Date: </b> {accountItem.insuranceCancellationDate}</p>
          <p><b>Coverage: </b> {accountItem.insuranceCoverage}</p>
          <p><b>Comp Deduction: </b> {accountItem.insuranceCompDeduction}</p>
          <p><b>Fire Theft: </b> {accountItem.insuranceFireTheft}</p>
          <p><b>CPI Option: </b> {accountItem.insuranceCPIOption}</p>
          <p><b>CPI Status: </b> {accountItem.insuranceCPIStatus}</p>
        </div>
        <div>
          <p>Please provide the following information to your insurance company to list us as a Loss Payee on your policy:</p>
          <div>
            <p><b>Loss Payee:</b></p>
            <p>{accountItem.lossPayeeName}</p>
            <p>{accountItem.lossPayeeStreet}</p>
            <p>{`${accountItem.lossPayeeCity} ${accountItem.lossPayState}, ${accountItem.lossPayeeZip}`}</p>
            <p>Phone: {accountItem.lossPayeePhone}</p>
            <p>Fax: {accountItem.lossPayeeFax}</p>
            <p>Email: {accountItem.lossPayeeEmail}</p>
          </div>
        </div>
      </div>
    )
  }

  renderLoanInfo(accountItem){
    return (
      <div className = "loanInfo">
        <div className = "loan">
          <h4>Account Information (Loan)</h4>
          <p><b>Sold: </b> {accountItem.loanSold}</p>
          <p><b>Amount: </b> {accountItem.loanAmount}</p>
          <p><b>Interest: </b> {accountItem.loanInterest}</p>
        </div>
        <div className = "loanRepaymentSchedule">
          <h4>Repayment Schedule:</h4>
          <p>{accountItem.loanRepaymentSchedule}</p>
          <div className = "balance">
            <p><b>Sidenote Balance: </b> {accountItem.loanSidenoteBal}</p>
            <p><b>Principle Balance: </b> {accountItem.loanPrincipleBal}</p>
            <p><b>Accrued Intrest: </b> {accountItem.loanAccruedInterest}</p>
          </div>
          <div className = "lastPayment">
            <p><b>Last Payment: </b> {accountItem.loanLastPayment}</p>
          </div>
          <div className = "due">
            <p><b>Loan Payment: </b> {accountItem.loanPaymentAmtDue}</p>
            <p><b>CP: </b> {accountItem.loanCPAmtDue}</p>
            <p><b>Sidenote: </b> {accountItem.loanSidenoteAmtDue}</p>
            <p><b>NSF Fee: </b> {accountItem.loanNSFFeeAmtDue}</p>
            <p><b>Late Fee: </b> {accountItem.loanLateFeeAmtDue}</p>
            <p><b>Total Due: </b> <b>{accountItem.loanTotalAmountDue}</b></p>
          </div>
        </div>
      </div>
    )
  }

  renderAccordians(activeState, accountInfo){
    const account = accountInfo[activeState];
    const accountSections = [
      {
        title: (<h3> My Information </h3>),
        body: this.renderMyInformation(account)
      },
      {
        title: (<h3> Cards on File </h3>),
        body: this.renderCardInformation(account)
      },
      {
        title: (<h3> Vehicle and Insurance </h3>),
        body: this.renderVehicleInsurance(account)
      },
      {
        title: (<h3> Loan Information </h3>),
        body: this.renderLoanInfo(account)
      }
    ];
    return (
      <div className = "accordionDiv">
        {
          this.renderAccountSummery(account)
        }
        <Accordion>
         {accountSections.map((item, index)=>{
          return (
            <AccordionItem
              key = {index}
            >
               <AccordionItemTitle>
                   {item.title}
               </AccordionItemTitle>
               <AccordionItemBody>
                   {item.body}
               </AccordionItemBody>
             </AccordionItem>
           )
          })}
        </Accordion>
      </div>
    )
  }

  render() {
    const DashboardDiv = styled.div`
      display: flex;
      padding: 0px 25px;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      > h2 {
        color: #0a1f44
      }
      .currentAccount.currentAccount {
        color: #0a1f44
      }
      .changeAccount.changeAccount {
        padding: 5px;
        display: flex;
        width: 100%;
        height: 48px;
        font-size: 1em;
        margin-bottom: 10px;
      }
      .accordion__title {
        color: #fff;
        background: #0a1f44;
        padding: 5px;
        display: flex;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
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

      .tHeader.tHeader {
        background-color: #0a1f44;
        color: #fff;
        margin: 0px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        display: flex;
        flex: 1
      }
      .ReactVirtualized__Table__headerTruncatedText.ReactVirtualized__Table__headerTruncatedText {
        background-color: #0a1f44;
        color:  #fff;
        padding: 0px;
        font-weight: 600;
        margin: 0px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 48px;
      }
      .tColumn.tColumn {
        padding: 0px 10px
      }
      .tData.tData {
        margin: 0px;
        padding: 5px;
        border-bottom: 2px solid #0a1f44;
        border-left: 1px solid #0a1f44;
        border-right: 1px solid #0a1f44;
        display: flex;
        flex: 1;
      }
      .tRow.tRow {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding-right: 0px;
        justify-content: space-evenly;
        &:nth-of-type(even) {
          background-color: #ddf;
        }
      }
      .cardsOnFileTable.cardsOnFileTable {
        border-collapse: collapse;
        display: flex;
        justify-content: space-evenly;
        align-self: stretch;
        flex-direction: column;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    console.log(this);
    return (
      <DashboardDiv>
        {
          this.renderAccordians(this.state.activeAccount, this.props.accountInformation)
        }
      </DashboardDiv>
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

export default hocComponent(DashboardRoute);
