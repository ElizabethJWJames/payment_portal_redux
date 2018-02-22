import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fromJS } from 'immutable';

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !fromJS(nextProps.navigationList).equals(this.props.defaultCompStyle) || !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  // }
  componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps)
    }


  render() {
    const AppDiv = styled.div`
      padding: 10px;
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    const HeaderDiv = styled.div`
      padding: 48px 25px 0px;
      background: #0a1f44;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    console.log(this.props)
    return (
        <div className="App">
          <NavigationBar
              location = {this.props.location}
              navigationList = {this.props.navigationList}
            />
          <HeaderDiv>
            <h1>
              AutoStart Payment Portal
            </h1>
            <div>
              Login placeholder
            </div>
          </HeaderDiv>
          <AppDiv>
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
          </AppDiv>
        </div>
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
