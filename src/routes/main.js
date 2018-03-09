import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fromJS } from 'immutable';
import Modal from 'react-modal';
import ForgotPasswordForm from './../components/forgotPassword.js';
import NewAccountForm from './../components/register.js';
import NewCardForm from './../components/newCard.js';
import SuccessMsg from './../components/success.js';

import SvgIcon from './../components/openIconicSvgs/svgIcon.js';
import NavigationBar from './../components/navigation/navigationBar.js';
import TermsAndConditions from './../components/termsAndConditions.js';
import PrivacyPolicy from './../components/privacyPolicy.js';
import actions from '../redux-auto/index.js';
import HomeRoute from './homeRoute.js';
import ContactUsRoute from './contactUsRoute.js';
import DashboardRoute from './accountDashboard.js';
import PayMeRoute from './makeAPayment.js';
import PaymentHistoryRoute from './paymentHistory.js';
import FAQRoute from './faqRoute.js';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


class Main extends Component {
  constructor(props){
      super(props);
      this.state = {
        modalIsOpen: false,
        displayInModal: 'div',
      };
      this.renderHeaderButtons = this.renderHeaderButtons.bind(this);
      this.renderFooterButtons = this.renderFooterButtons.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.renderModalContent = this.renderModalContent.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps)
    }

  onRegisterSubmit(values){
    //actions.main.signIn(values)
    actions.main.initiateRegistration(values)
    console.log(values)
  }
  onForgotSubmit(values){
    //actions.main.signIn(values)
    //actions.main.auth(values)
    console.log(values)
  }

  openModal(displayComponent){
      return actions.main.updateModalContent({displayComponent: displayComponent})
  }

  closeModal(){
      // window.location.reload() //need better solution
      return actions.main.updateModalContent({displayComponent: 'div'})
  }

  renderModalContent(){
    let display = (<div/>);
    switch(this.props.modalContent) {
      case 'TermsandConditions': {
        display= (
          <TermsAndConditions
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'PrivacyPolicy': {
        display= (
          <PrivacyPolicy
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'ForgotPasswordForm': {
        display= (
          <ForgotPasswordForm
            onFormSubmit = {this.onForgotSubmit}
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'NewAccountForm': {
        display= (
          <NewAccountForm
            onFormSubmit = {this.onRegisterSubmit}
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'NewCard': {
        display= (
          <NewCardForm
            onFormSubmit = {(values)=>{console.log(values)}}
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'Payment': {
        display= (
          <div
            onFormSubmit = {(values)=>{console.log(values)}}
            closeModalCB = {this.closeModal}
          />
        )
        break;
      }
      case 'Success': {
        display= (
          <SuccessMsg
            closeModalCB = {this.closeModal}
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

  renderHeaderButtons(){
    let myReturn;
    console.log('PATHNAME', this.props.location.pathname)
    if(this.props.location.pathname !== "/home" && this.props.location.pathname !== "/" && this.props.location.pathname !== "" && this.props.navigationList.length === 3){
      myReturn = (
        <div className='buttonArea'>
          <div
             className='mainHeaderButton'
             onClick= {(item)=>{this.props.history.push('/home');}}
            >
            <SvgIcon
                iconName= 'accountLogin'
                iconSize= '24px'
              />
              <p>
                  Login
                </p>
            </div>
            <div
               className='mainHeaderButton'
               onClick= {(item)=>{actions.main.headerRegister(item);}}
              >
              <SvgIcon
                  iconName= 'circleCheck'
                  iconSize= '24px'
                />
                <p>
                    Register
                  </p>
              </div>
            </div>
      )
    } else if (this.props.navigationList.length !== 3){
      myReturn = (
        <div
         className='mainHeaderButton'
         onClick= {(item)=>{actions.main.logout(item)}}
        >
        <SvgIcon
            iconName= 'accountLogout'
            iconSize= '24px'
          />
          <p>
              Logout{this.props.creds && this.props.creds.email ? `(${this.props.creds.email})` : ''}
            </p>
        </div>
      )
    } else {
      myReturn = (<div/>)
    }
    return myReturn;
  }

  renderFooterButtons(){
    return (
     <div className='buttonFooterArea'>
       <div
          className='mainButton'
          onClick= {()=>{this.openModal('TermsandConditions');}}
         >
           <p>
               Terms and Conditions
             </p>
         </div>
         <div
            className='mainButton'
            onClick= {()=>{this.openModal('PrivacyPolicy');}}
           >
             <p>
                 Privacy Policy
               </p>
           </div>
         </div>
   )
  }

  render() {
    const AppDiv = styled.div`
    padding-bottom: 80px;
      .mainButton.mainButton{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1em;
        padding: 0px 10px;
        &:hover {
          background: #ED1C24
        }
      }
      .mainHeaderButton.mainHeaderButton{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1em;
        height: 80px;
        padding: 0px 10px;
        &:hover {
          background: #ED1C24
        }
      }
      .buttonArea.buttonArea {
        display: flex;
        flex-direction: row;
      }
      .buttonFooterArea.buttonFooterArea {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0px 10px;
        width: 100%;
      }
      .circleCheck.circleCheck {
        padding: 9px 5px 5px 5px;
      }
      .accountLogout.accountLogout {
        padding: 9px 5px 5px 5px;
      }
      .accountLogin.accountLogin {
        padding: 9px 5px 5px 5px;
      }
      .headerDiv.headerDiv {
        padding: 48px 25px 0px;
        background: #0a1f44;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .appFooter.appFooter {
        position: fixed;
        bottom: 0;
        height: 50px;
        background: #0a1f44;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        z-index: 9;
      }
      .appContent.appContent {
        padding: 10px;
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
        zIndex                : 100
      }
    };

    console.log(this.props)
    return (
        <AppDiv className="App">
        <Modal
            isOpen={this.props.modalContent !=='div'}
            onRequestClose={this.closeModal}
            contentLabel= {this.state.displayInModal}
            style = {customStyles}
          >
          {
            this.renderModalContent()
          }
          </Modal>
          <NavigationBar
              location = {this.props.location}
              navigationList = {this.props.navigationList}
            />
          <div className="headerDiv">
            <h1>
              AutoStart Payment Portal
            </h1>
            {this.renderHeaderButtons()}
          </div>
          <div className = "appContent">
            <BrowserRouter>
              <Switch>
                <Route path="/home" component={HomeRoute}/>
                <Route path="/contact" component={ContactUsRoute}/>
                <Route path="/faqs" component={FAQRoute}/>
                <Route path="/myAccount" component={DashboardRoute}/>
                <Route path="/makeAPayment" component={PayMeRoute}/>
                <Route path="/paymentHistory" component={PaymentHistoryRoute}/>
                <Redirect from="/" exact to="/home" />

              </Switch>
            </BrowserRouter>
          </div>
          <div className = "appFooter">
            <p> Copyright © 2018 AFS & C All Rights Reserved </p>
            {this.renderFooterButtons()}
          </div>
        </AppDiv>
    );
  }
}
const hocComponent = compose( connect((state, props)=>{
    return ({
      navigationList: state.main.navigation,
      authToken: state.main.authtoken,
      modalContent: state.main.modalContent,
      creds: state.main.creds
    });
}));

export default hocComponent(Main);
