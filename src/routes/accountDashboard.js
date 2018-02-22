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
        {`Account: ${accountItem.AccountText}`}
        </h2>
        <p>
          This is the current information that we have on-file. If this information is not correct please contact Training Solutions CAC/EFI at (941) 219-4344
          </p>
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
            <p><b>Name:</b>{accountItem.personal_details.B_First + " " + accountItem.personal_details.B_Last }</p>
            <p><b>Home:</b> {accountItem.personal_details.B_HPhone}</p>
            <p><b>Cell:</b> {accountItem.personal_details.B_Cphone}</p>
          </div>
          <div className='Address'>
            <h4>My Address</h4>
            <p>{accountItem.personal_details.B_addr}</p>
            <p>{`${accountItem.personal_details.B_city} ${accountItem.personal_details.B_State}, ${accountItem.personal_details.B_zip}`}</p>
          </div>
        </div>
        <div className = "changePassword">
        </div>
      </div>
    )
  }

  renderTable(accountItem){

    return (
      <AutoSizer disableHeight>
      {({width})=>{
        return (
          <Table
            rowGetter = {({ index }) => accountItem.credit_cards[index]}
            width = {width-17}
            rowHeight = {48}
            height = {350}
            rowCount = {accountItem.credit_cards.length}
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
            dataKey="LAST4"
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
          {this.renderTable(accountItem)}
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
          <p><b>Stock:</b> {accountItem.vehicle_info.STOCKNUM}</p>
          <p><b>Vin:</b> {accountItem.vehicle_info.VIN}</p>
          <p><b>Year:</b> {accountItem.vehicle_info.YEAR}</p>
          <p><b>Make:</b> {accountItem.vehicle_info.MAKE}</p>
          <p><b>Model:</b> {accountItem.vehicle_info.MODEL}</p>
          <p><b>Trim:</b> {accountItem.vehicle_info.TRIM}</p>
          <p><b>Type:</b> {accountItem.vehicle_info.BodyStyle}</p>
          <p><b>Color:</b> {accountItem.vehicle_info.COLOR}</p>
          <p><b>Miles:</b> {accountItem.vehicle_info.MILESOUT}</p>
        </div>
        <div className = "insurance">
          <h4>Insurance Information</h4>
          <p><b>Company: </b> {accountItem.vehicle_insurnce.InsCName}</p>
          <p><b>Street: </b> {accountItem.vehicle_insurnce.InsCAddr}</p>
          <p><b>City: </b> {accountItem.vehicle_insurnce.InsCCity}</p>
          <p><b>State: </b> {accountItem.vehicle_insurnce.InsCState}</p>
          <p><b>Zip: </b> {accountItem.vehicle_insurnce.InsCZip}</p>
          <p><b>Phone: </b> {accountItem.vehicle_insurnce.InsPhone}</p>
          <p><b>Fax: </b> {accountItem.vehicle_insurnce.InsFax}</p>
          <p><b>Contact: </b> {accountItem.vehicle_insurnce.InsCPerson}</p>
          <p><b>Contact Phone: </b> {accountItem.vehicle_insurnce.InsCPhone}</p>
          <p><b>Contact Fax: </b> {accountItem.vehicle_insurnce.InsCFax}</p>
          <p><b>Email: </b> {accountItem.vehicle_insurnce.InsEmail}</p>
          <p><b>Required: </b> {accountItem.vehicle_insurnce.Insreq}</p>
          <p><b>Policy No: </b> {accountItem.vehicle_insurnce.inspolicynum}</p>
          <p><b>Expiration Date: </b> {accountItem.vehicle_insurnce.InsExpire}</p>
          <p><b>Canceled: </b> {accountItem.vehicle_insurnce.InsCancelled}</p>
          <p><b>Cancellation Date: </b> {accountItem.vehicle_insurnce.InsCanDate}</p>
          <p><b>Coverage: </b> {accountItem.vehicle_insurnce.InsCoverage}</p>
          <p><b>Comp Deduction: </b> {accountItem.vehicle_insurnce.InsCompDed}</p>
          <p><b>Fire Theft: </b> {accountItem.vehicle_insurnce.InsFireDed}</p>
          <p><b>CPI Option: </b> {accountItem.vehicle_insurnce.OnCPI}</p>
          <p><b>CPI Status: </b> {accountItem.vehicle_insurnce.CPIStatus}</p>
        </div>
        <div>
          <p>Please provide the following information to your insurance company to list us as a Loss Payee on your policy:</p>
          <div>
            <p><b>Loss Payee:</b></p>
            <p>{
              'Training Solutions CAC/EFI'
              // accountItem.company_info.LegalName
            }</p>
            <p>{
              '123 Main Street'
              // accountItem.company_info.Address
            }</p>
            <p>{
              'Bradenton, FL 34205'
              // `${accountItem.company_info.City} ${accountItem.company_info.State}, ${accountItem.company_info.Zip}`
            }</p>
            <p>Phone: {
              '(941) 219-4344'
              // accountItem.company_info.ContactPhone
            }</p>
            <p>Fax: {
              '(941) 219-4344'
              // accountItem.company_info.Fax
            }</p>
            <p>Email: {
              'virginia@mycarafc.com'
              // accountItem.company_info.ContactEmail
            }</p>
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
          <p><b>Sold: </b> {accountItem.account_info.SALEDATE}</p>
          <p><b>Amount: </b> {accountItem.account_info.loanAmount}</p>
          <p><b>Interest: </b> {accountItem.account_info.loanInterest}</p>
        </div>
        <div className = "loanRepaymentSchedule">
          <h4>Repayment Schedule:</h4>
          <p>{accountItem.account_info.plan1}</p>
          <div className = "balance">
            <p><b>Sidenote Balance: </b> {accountItem.account_info.snBalance}</p>
            <p><b>Principle Balance: </b> {accountItem.account_info.prinbal}</p>
            <p><b>Accrued Intrest: </b> {accountItem.account_info.ACCRUEDINT}</p>
          </div>
          <div className = "lastPayment">
            <p><b>Last Payment: </b> {accountItem.account_info.lastpmtamt + " on " + accountItem.account_info.LastPmtPaid}</p>
          </div>
          <div className = "due">
            <p><b>Loan Payment: </b> {accountItem.account_info.pmtdue}</p>
            <p><b>CP: </b> {accountItem.account_info.cpduenow}</p>
            <p><b>Sidenote: </b> {accountItem.account_info.snDueNow}</p>
            <p><b>NSF Fee: </b> {accountItem.account_info.nsfdue}</p>
            <p><b>Late Fee: </b> {accountItem.account_info.LCDue}</p>
            <p><b>Total Due: </b> <b>{accountItem.account_info.total}</b></p>
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
