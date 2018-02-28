import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, Checkbox } from 'react-form';


//0a1f44
class Login extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  static propTypes = {
    onLoginSubmit: PropTypes.func,
    onForgotPasswordClick: PropTypes.func,
    onRegisterClick: PropTypes.func
  }

  static defaultProps = {
    onLoginSubmit: (x)=>{console.log(x)},
    onForgotPasswordClick: (x)=>{console.log(x)},
    onRegisterClick: (x)=>{console.log(x)}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }


  render() {
    const LoginDiv = styled.div`

      > h2 {
        background: #0a1f44;
        color: #fff;
        width: 300px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin: 0px;
        padding: 5px 0px;
      }
      .loginlinks.loginlinks {
        color: #0a1f44;
        cursor: pointer;
      }
      .loginlinks.loginlinks:hover {
        color: #ED1C24;
        cursor: pointer;
      }
      > form {
        border: 1px solid #0a1f44;
        width: 298px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .loginInput.loginInput {
        width: 250px;
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
      }
      .formRow.formRow {
        width: 250px;
        height: 48px;
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
      }
      .loginSubmit.loginSubmit {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
        margin-top: 10px;
        border-radius: 5px;
        padding: 10px;
        height: 48px;
        width: 100px;
        font-size: 1.5em;
        color: #fff;
        border: none;
        background: #0a1f44;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <LoginDiv>
        <h2>
            Login
          </h2>
        <Form
          onSubmit={submittedValues => this.props.onLoginSubmit( {submittedValues} )}
          onSubmitFailure= {(e, x)=>{console.log(e, x)}}
        >
          { formApi => (
            <form  onSubmit={formApi.submitForm} id="form2">

              <Text className = 'loginInput' type = 'text' field="email" id="email" placeholder = "Email"/>

              <Text className = 'loginInput' type = 'password' field="password" id="password" placeholder = "Password"/>
              <div className = 'formRow'>
                <a
                  onClick = {this.props.onRegisterClick}
                  className = 'loginlinks'
                >
                    Register
                  </a>
                <a
                  onClick = {this.props.onForgotPasswordClick}
                  className = 'loginlinks'
                >
                    Forgot Password
                  </a>
              </div>
              <div className = 'formRow'>
                <div>
                  <Checkbox field="remeberMe" id="remeberMe" />
                  <label htmlFor="remeberMe">Remember Me</label>
                </div>
                <button className = 'loginSubmit'  type="submit">Log In</button>
              </div>
            </form>
          )}
        </Form>

      </LoginDiv>
    );
  }
}

export default Login;
