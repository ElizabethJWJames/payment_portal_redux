import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fromJS } from 'immutable';

import SvgIcon from './../components/openIconicSvgs/svgIcon.js';
import NavigationBar from './../components/navigation/navigationBar.js';
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
      this.state = {};
      this.renderHeaderButtons = this.renderHeaderButtons.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps)
    }

  renderHeaderButtons(){
    let myReturn;
    if(this.props.location.pathname !== "/home" && this.props.navigationList.length === 3){
      myReturn = (
        <div className='buttonArea'>
          <div
             className='loginButton'
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
               className='loginButton'
               onClick= {(item)=>{this.props.history.push('/home');}}
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
         className='loginButton'
         onClick= {(item)=>{this.props.history.push('/home');}}
        >
        <SvgIcon
            iconName= 'accountLogout'
            iconSize= '24px'
          />
          <p>
              Logout
            </p>
        </div>
      )
    } else {
      myReturn = (<div/>)
    }
    return myReturn;
  }

  render() {
    const AppDiv = styled.div`
      .loginButton.loginButton{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1em;
        padding: 10px;
        &:hover {
          background: #ED1C24
        }
      }
      .buttonArea.buttonArea {
        display: flex;
        flex-direction: row;
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
      .appContent.appContent {
        padding: 10px;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    console.log(this.props)
    return (
        <AppDiv className="App">
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
        </AppDiv>
    );
  }
}
const hocComponent = compose( connect((state, props)=>{
    return ({
      navigationList: state.main.navigation,
      authToken: state.main.authtoken
    });
}));

export default hocComponent(Main);
