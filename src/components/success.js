import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';

//0a1f44
class SuccessMsg extends Component {
  constructor(props){
      super(props);
      this.state = {
        displayError: false
      };
  }

  static propTypes = {
    closeModalCB: PropTypes.func

  }

  static defaultProps = {
    closeModalCB: (x)=>{console.log(x)}

  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  render() {
    const RegistrationDiv = styled.div`
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
      > p {
        font-size: 1em;
        padding: 20px 10px;
        margin-top: 60px;
      }

      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <RegistrationDiv>
        <h2> Success </h2>
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
        <p>Your Request Has Been Processed. </p>
      </RegistrationDiv>
    );
  }
}

export default SuccessMsg;
