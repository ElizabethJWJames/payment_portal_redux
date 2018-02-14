import React, { Component } from 'react';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import cppWomen from './../images/CPP_Women.jpg';
import Login from './../components/login.js';
import actions from '../redux-auto/index.js';

//0a1f44
class HomeRoute extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  onLoginSubmit(values){
    actions.main.signIn(values)
  }


  render() {
    const HomeDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .welcome.welcome {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex: 2;
        > div {
          padding: 10px;
        }
        > div > h2 {
          color: #0a1f44;
        }
        > div > h3 {
          color: #0a1f44;
        }
      }
      .login.login {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        align-self: center;
        margin: 10px auto;
      }
      .benefit.benefit {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        width: 100%;
        margin: 10px auto;
        > div {
          border: 1px solid #0a1f44;
          padding: 10px;
          width: calc(100% - 20px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        > div > ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <HomeDiv>
        <div className = 'welcome'>
          <img
              src={cppWomen}
              alt="Women making online payment"
            />
          <div>
            <h2>
              Welcome to MyCarPay.com
            </h2>
            <p>
              The exclusive online payment processor for AutoStart.
            </p>
            <p>
              Login if you already have an account, or if you are a new customer, register now.
            </p>
            <h3>
              Make your car payment anytime, anywhere.
            </h3>
          </div>
        </div>
        <div className = 'login'>
          <Login
          onLoginSubmit = {this.onLoginSubmit}
          />
        </div>
        <p id = 'myDiv'></p>

        <div className = 'benefit'>
          <h3> Benefits </h3>
          <div>
            <p> At mycarpay.com you can: </p>
            <ul>
              <li>Make a one-time payment</li>
              <li>Setup automatic payments</li>
              <li>Print a receipt</li>
              <li>View your payment history</li>
            </ul>
            <p> If you have a question, click on the help button, or contact your local AutoStart dealership. </p>
          </div>
        </div>
      </HomeDiv>
    );
  }
}

export default HomeRoute;
