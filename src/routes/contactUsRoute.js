import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import ContactUsForm from '../components/contactUs.js';
import actions from '../redux-auto/index.js';

//0a1f44
class ContactUsRoute extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  static propTypes = {
    prop: PropTypes.any
  }

  static defaultProps = {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  onFormSubmit(values){
    actions.main.sendDBEmail(values)
  }

  render() {
    const ContactUsDiv = styled.div`
      display: flex;
      padding: 0px 25px;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      > h2 {
        color: #0a1f44;
      }
      > h3 {
        color: #0a1f44;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;


    return (
      <ContactUsDiv>
        <h2> Complete the form to Contact Us </h2>
        <p> We try to respond to all messages within 24 hours. </p>
        <h3>
            Important: Payment Arrangments cannot be made online. Please call or visit your AutoStart Dealership.
          </h3>
        <ContactUsForm
          onFormSubmit = {this.onFormSubmit}
         />
      </ContactUsDiv>
    );
  }
}

export default ContactUsRoute;
