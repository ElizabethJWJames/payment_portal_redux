import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea, Checkbox } from 'react-form';

//0a1f44
class ContactUsForm extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  static propTypes = {
    onFormSubmit: PropTypes.func
  }

  static defaultProps = {
    onFormSubmit: (x)=>{console.log(x)}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  render() {
    const ContactUsDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      .contactForm.contactForm {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }
      .contactInput.contactInput {
        width: calc(100% - 20px);
        height: 48px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }
      .contactTextArea.contactTextArea {
        width: calc(100% - 20px);
        height: 96px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
      }
      .contactSubmit.contactSubmit {
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
        background: #0a1f44;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <ContactUsDiv>
      <Form
        onSubmit={(submittedValues) => this.props.onFormSubmit( { submittedValues } )}
      >
        { formApi => (
          <form className = 'contactForm' onSubmit={formApi.submitForm} id="form1">

            <Text
                className = 'contactInput'
                type = 'text'
                field="name"
                id="name"
                required
                placeholder = "Full Name (required)"
              />
            <Text
                className = 'contactInput'
                type = 'text'
                field="email"
                id="email"
                required
                placeholder = "Email Address (required)"
                pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$"
                title = "Please Input a Valid Email"
              />
            <Text
                className = 'contactInput'
                type = 'tel'
                field="phone"
                id="phone"
                required
                placeholder = "Phone (required)"
                pattern = "^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                title = "Please Input a Valid Phone Number (###-###-####)"
              />
            <Text
                className = 'contactInput'
                type = 'text'
                field="account"
                id="account"
                placeholder = "Account Number (Optional)"
              />
              contactDBbuddy <Checkbox field="contactDBbuddy" id="contactDBbuddy" className="contactDBbuddy" />
            <TextArea className = 'contactTextArea' field="msg" id="msg" required placeholder = "Message (Required)"/>
            <button className="contactSubmit" type="submit">Submit</button>
          </form>
        )}
      </Form>
      </ContactUsDiv>
    );
  }
}

export default ContactUsForm;
