import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';

//0a1f44
class NewPasswordForm extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  static propTypes = {
    onFormSubmit: PropTypes.func,
    closeModalCB: PropTypes.func

  }

  static defaultProps = {
    onFormSubmit: (x)=>{console.log(x)},
    closeModalCB: (x)=>{console.log(x)}

  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  render() {
    const NewPasswordDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      > h2 {
        background: #0a1f44;
        color: #fff;
        width: calc(100% - 101px);
        margin: 0px;
        padding: 15px 10px;
        position: fixed;
      }
      .closeModal.closeModal {
        position: fixed;
        padding: 15px 10px;
        right: 40px;
        background: #0a1f44;
        color: #fff;
        &:hover {
          background: #ED1C24
        }
      }
      .instructions.instructions {
        font-size: 1em;
        padding: 20px 10px;
        margin-top: 60px;
      }
      .newPasswordFrom.newPasswordFrom {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: calc(100% - 20px);
        padding: 10px;
      }
      .newPasswordInput.newPasswordInput {
        width: 100%;
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }
      .newSubmit.newSubmit {
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
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <NewPasswordDiv>
      <h2> New Password </h2>
      <div
       className = 'closeModal'
       onClick = {this.props.closeModalCB}
       >
       <SvgIcon
           iconName= 'x'
           iconSize= '24px'
           iconFill= "#fff"
         />
      </div>
      <div className = "instructions">
        Please fill out the form below.
      </div>
      <Form
        onSubmit={submittedValues => this.props.onFormSubmit( submittedValues )}
      >
        { formApi => (
          <form className = 'newPasswordFrom' onSubmit={formApi.submitForm} id="newPassForm">
            <Text
                className = 'newPasswordInput'
                type = 'text'
                field="oldPass"
                id="oldPass"
                placeholder = "Current Password"
                required
              />
            <Text
                className = 'newPasswordInput'
                type = 'text'
                field="newPass"
                id="newPass"
                placeholder = "New Password"
                required
              />
            <Text
                className = 'newPasswordInput'
                type = 'text'
                field="confirmPass"
                id="newPassconfirm"
                placeholder = "Confirm New Password"
                required
              />
            <button className="newSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </NewPasswordDiv>
    );
  }
}

export default NewPasswordForm;
