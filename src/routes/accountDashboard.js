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
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';
import NewPasswordForm from '../components/newPassword.js';
import Alert from '../components/alert.js';
import Modal from 'react-modal';

//0a1f44
class DashboardRoute extends Component {
  constructor(props){
      super(props);
      this.state = {
        activeAccount: 0,
        modalIsOpen: false,
        displayInModal: 'div',
      };
      this.changeIndex = this.changeIndex.bind(this);
      this.renderAccountSummery = this.renderAccountSummery.bind(this);
      this.renderMyInformation = this.renderMyInformation.bind(this);
      this.renderCardInformation = this.renderCardInformation.bind(this);
      this.renderVehicleInsurance = this.renderVehicleInsurance.bind(this);
      this.renderLoanInfo = this.renderLoanInfo.bind(this);
      this.renderAccordians = this.renderAccordians.bind(this);
      this.renderTable = this.renderTable.bind(this);
      this.renderEditCardButton = this.renderEditCardButton.bind(this)
      this.renderDeleteCardButton = this.renderDeleteCardButton.bind(this)
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.renderModalContent = this.renderModalContent.bind(this);
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

  renderAlerts(){
    let myReturn;

    if(this.props.alerts && this.props.alerts.length >= 1){
      return (
        <div>
          {
            this.props.alerts.map((alertObj, index)=>{
              console.log('AHHH', alertObj, index)
              return (
                <Alert
                  key = {index}
                  alertText = {alertObj.alertText}
                  alertType = {alertObj.alertType}
                  closeOnClick = {()=>{console.log('CLOSE')}}
                />
              )
            })
          }
        </div>
      )
    }

    return myReturn;
  }

  renderAccountSummery(accountItem){
    const companyInfo = accountItem && accountItem.company_info ? accountItem.company_info : {};
    return (
      <div className = "accountSummery">
        <h2 className = "currentAccount">
        {`Account: ${accountItem.AccountText}`}
        </h2>
        <p>
          This is the current information that we have on-file. If this information is not correct please contact {companyInfo.LegalName} at {companyInfo.ContactPhone}
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
          {this.renderAlerts()}
        </div>
      </div>
    )
  }

  renderMyInformation(accountItem){
    const personalDetails = accountItem && accountItem.personal_details ? accountItem.personal_details : {};
    return (
      <div className = "myInformation">
        <div className = "myDetails">
          <div className = "contactInfo">
            <h4>My Details</h4>
            <p><b>Name:</b>{personalDetails.B_First + " " + personalDetails.B_Last }</p>
            <p><b>Home:</b> {personalDetails.B_HPhone}</p>
            <p><b>Cell:</b> {personalDetails.B_Cphone}</p>
          </div>
          <div className='Address'>
            <h4>My Address</h4>
            <p>{personalDetails.B_addr}</p>
            <p>{`${personalDetails.B_city} ${personalDetails.B_State}, ${personalDetails.B_zip}`}</p>
          </div>
        </div>
        <div className = "changePassword">
          <div
           className='changePasswordButton'
           onClick= {()=>{this.openModal('NewPassword')}}
          >
            Change Password
          </div>
        </div>
      </div>
    )
  }

  renderEditCardButton(data){
    return (
      <div
       className='editCardButton'
       onClick= {()=>{console.log(data)}}
      >
      <SvgIcon
          iconName= 'pencil'
          iconSize= '24px'
          iconFill= "#000"
        />
      </div>
    )
  }

  renderDeleteCardButton(data){
    return (
      <div
       className='deleteCardButton'
       onClick= {()=>{console.log(data)}}
      >
      <SvgIcon
          iconName= 'trash'
          iconSize= '24px'
          iconFill= "#000"
        />
      </div>
    )
  }

  renderTable(accountItem){
    const creditCards = accountItem && accountItem.credit_cards ? accountItem.credit_cards : []
    return (
      <AutoSizer disableHeight>
      {({width})=>{
        return (
          <Table
            rowGetter = {({ index }) => creditCards[index]}
            width = {width-17}
            rowHeight = {48}
            height = {350}
            rowCount = {creditCards.length}
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
            cellRenderer={(cell) => (this.renderEditCardButton(cell.rowData))}
          />
          <Column
            label="Delete"
            dataKey="delete"
            className="tColumn"
            width = {width/6}
            cellRenderer={(cell) => (this.renderDeleteCardButton(cell.rowData))}
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
    const vehicleInfo = accountItem && accountItem.vehicle_info ? accountItem.vehicle_info : {};
    const vehicleInsurance = accountItem && accountItem.vehicle_insurnce ? accountItem.vehicle_insurnce : {};
    const companyInfo = accountItem && accountItem.company_info ? accountItem.company_info : {};
    return (
      <div className = "vehicleInformation">
        <div className = "vehicle">
          <h4>Vehicle Information</h4>
          <p><b>Stock:</b> {vehicleInfo.STOCKNUM}</p>
          <p><b>Vin:</b> {vehicleInfo.VIN}</p>
          <p><b>Year:</b> {vehicleInfo.YEAR}</p>
          <p><b>Make:</b> {vehicleInfo.MAKE}</p>
          <p><b>Model:</b> {vehicleInfo.MODEL}</p>
          <p><b>Trim:</b> {vehicleInfo.TRIM}</p>
          <p><b>Type:</b> {vehicleInfo.BodyStyle}</p>
          <p><b>Color:</b> {vehicleInfo.COLOR}</p>
          <p><b>Miles:</b> {vehicleInfo.MILESOUT}</p>
        </div>
        <div className = "insurance">
          <h4>Insurance Information</h4>
          <p><b>Company: </b> {vehicleInsurance.InsCName}</p>
          <p><b>Street: </b> {vehicleInsurance.InsCAddr}</p>
          <p><b>City: </b> {vehicleInsurance.InsCCity}</p>
          <p><b>State: </b> {vehicleInsurance.InsCState}</p>
          <p><b>Zip: </b> {vehicleInsurance.InsCZip}</p>
          <p><b>Phone: </b> {vehicleInsurance.InsPhone}</p>
          <p><b>Fax: </b> {vehicleInsurance.InsFax}</p>
          <p><b>Contact: </b> {vehicleInsurance.InsCPerson}</p>
          <p><b>Contact Phone: </b> {vehicleInsurance.InsCPhone}</p>
          <p><b>Contact Fax: </b> {vehicleInsurance.InsCFax}</p>
          <p><b>Email: </b> {vehicleInsurance.InsEmail}</p>
          <p><b>Required: </b> {vehicleInsurance.Insreq}</p>
          <p><b>Policy No: </b> {vehicleInsurance.inspolicynum}</p>
          <p><b>Expiration Date: </b> {vehicleInsurance.InsExpire}</p>
          <p><b>Canceled: </b> {vehicleInsurance.InsCancelled}</p>
          <p><b>Cancellation Date: </b> {vehicleInsurance.InsCanDate}</p>
          <p><b>Coverage: </b> {vehicleInsurance.InsCoverage}</p>
          <p><b>Comp Deduction: </b> {vehicleInsurance.InsCompDed}</p>
          <p><b>Fire Theft: </b> {vehicleInsurance.InsFireDed}</p>
          <p><b>CPI Option: </b> {vehicleInsurance.OnCPI}</p>
          <p><b>CPI Status: </b> {vehicleInsurance.CPIStatus}</p>
        </div>
        <div>
          <p>Please provide the following information to your insurance company to list us as a Loss Payee on your policy:</p>
          <div>
            <p><b>Loss Payee:</b></p>
            <p>{
               companyInfo.LegalName
            }</p>
            <p>{
               companyInfo.Address
            }</p>
            <p>{
               `${companyInfo.City} ${companyInfo.State}, ${companyInfo.Zip}`
            }</p>
            <p>Phone: {
               companyInfo.ContactPhone
            }</p>
            <p>Fax: {
               companyInfo.Fax
            }</p>
            <p>Email: {
               companyInfo.ContactEmail
            }</p>
          </div>
        </div>
      </div>
    )
  }

  renderLoanInfo(accountItem){
    const accountInfo = accountItem && accountItem.account_info ? accountItem.account_info : {};
    return (
      <div className = "loanInfo">
        <div className = "loan">
          <h4>Account Information (Loan)</h4>
          <p><b>Sold: </b> {accountInfo.SALEDATE}</p>
          <p><b>Amount: </b> {accountInfo.loanAmount}</p>
          <p><b>Interest: </b> {accountInfo.loanInterest}</p>
        </div>
        <div className = "loanRepaymentSchedule">
          <h4>Repayment Schedule:</h4>
          <p>{accountInfo.plan1}</p>
          <div className = "balance">
            <p><b>Sidenote Balance: </b> {accountInfo.snBalance}</p>
            <p><b>Principle Balance: </b> {accountInfo.prinbal}</p>
            <p><b>Accrued Intrest: </b> {accountInfo.ACCRUEDINT}</p>
          </div>
          <div className = "lastPayment">
            <p><b>Last Payment: </b> {accountInfo.lastpmtamt + " on " + accountInfo.LastPmtPaid}</p>
          </div>
          <div className = "due">
            <p><b>Loan Payment: </b> {accountInfo.pmtdue}</p>
            <p><b>CP: </b> {accountInfo.cpduenow}</p>
            <p><b>Sidenote: </b> {accountInfo.snDueNow}</p>
            <p><b>NSF Fee: </b> {accountInfo.nsfdue}</p>
            <p><b>Late Fee: </b> {accountInfo.LCDue}</p>
            <p><b>Total Due: </b> <b>{accountInfo.total}</b></p>
          </div>
        </div>
      </div>
    )
  }

  renderAccordians(activeState, accountInfo){
    const account = accountInfo[activeState];
    const accountSections = [
      {
        title: (<h3> <div className="accordion__arrow" role="presentation" /> My Information </h3>),
        body: this.renderMyInformation(account)
      },
      {
        title: (<h3> <div className="accordion__arrow" role="presentation" /> Cards on File </h3>),
        body: this.renderCardInformation(account)
      },
      {
        title: (<h3> <div className="accordion__arrow" role="presentation" /> Vehicle and Insurance </h3>),
        body: this.renderVehicleInsurance(account)
      },
      {
        title: (<h3> <div className="accordion__arrow" role="presentation" /> Loan Information </h3>),
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
               <AccordionItemTitle
                hideBodyClassName = "accordion__title--hidden"
               >
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

  openModal(displayComponent){
      this.setState((prevState)=>{
        return {...prevState, modalIsOpen: true, displayInModal: displayComponent}
     });
  }

  closeModal(){
      this.setState((prevState)=>{
        return {...prevState, modalIsOpen: false, displayInModal: 'div'}
     });
  }

  onNewPassSubmit(values){
    //actions.main.signIn(values)
    //actions.main.auth(values)
    console.log(values)
  }

  renderModalContent(){
    let display = (<div/>);
    switch(this.state.displayInModal) {
      case 'NewPassword': {
        display= (
          <NewPasswordForm
            onFormSubmit = {this.onNewPassSubmit}
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'NewCard': {
        display= (
          <div
          />
        )
        break;
      }
      default: {
        display = (
          <div/>
        )
      }
    }
    return display;
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
      > h3 {
        display: flex;
        align-self: flex-start;
        color: #0a1f44;
        background: #fff;
        margin: 0px 0px -1px 0px;
        border-top: 5px solid #0a1f44;
        border-left: 1px solid #0a1f44;
        border-right: 1px solid #0a1f44;
        padding: 5px 10px;
        z-index: 1
      }
      .changePasswordButton.changePasswordButton {
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
      .editCardButton.editCardButton{
        justify-content: center;
        display: flex;
        &:hover{
          .pencilPath.pencilPath{
            fill: #50D032
          }
        }
      }
      .deleteCardButton.deleteCardButton{
        justify-content: center;
        display: flex;
        &:hover{
          .trashPath.trashPath{
            fill: #ED1C24
          }
        }
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
        padding: 10px 0px 10px 40px;
        margin: 0px;
        position: relative;
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

    Modal.setAppElement('#root');

    const customStyles = {
      content : {
        top                   : '40px',
        left                  : '40px',
        right                 : '40px',
        bottom                : '40px',
        padding               : '0px',
      },
      overlay : {
        zIndex                : 10
      }
    };

    console.log(this);
    return (
      <DashboardDiv>
        <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel= {this.state.displayInModal}
              style = {customStyles}
            >
            {
              this.renderModalContent()
            }
          </Modal>
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
      alerts: state.main.alerts
    });
}));

export default hocComponent(DashboardRoute);
