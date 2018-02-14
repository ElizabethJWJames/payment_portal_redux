import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

//0a1f44
class FAQRoute extends Component {
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

  renderAccordianList(){
    const faqList = [
      {
        title: (<h3> + My On-Line Account</h3>),
        body: (
          <div>
            <h4>
              How can I update my street address, phone number, or email address?
            </h4>
            <p>
              Please login and access the Contact Us tab, Select 'Contact Information Change' from the 'What do you need help with?' subject drop down menu. You can call and or email a Autostart Customer Service representative at: (800) 555-1212.
            </p>
            <h4>
              How do I create an online account?
            </h4>
            <p>
              To create an online account....
            </p>
            <h4>
              What can I access on my online account?
            </h4>
            <p>
              Your online account gives you access to.....
            </p>
          </div>
        )
      },
      {
        title: (<h3> + My Payments</h3>),
        body: (
          <div>
            <h4>
              I am having trouble making my online payment, what should I do?
            </h4>
            <p>
              If you are having trouble making your online payment call (800) 788-2056 during normal business hours, Monday-Saturday 9:00 a.m. to 6:00 p.m.
            </p>
            <h4>
              Can I make a partial payment online?
            </h4>
            <p>
              No partial payments can be made online. If you need to speak with an associate regarding your payment, please call the Autostart dealership where you purchased your vehicle.
            </p>
          </div>
        )
      },
      {
        title: (<h3> + My Vehicle</h3>),
        body: (
          <div>
            <h4>
              My vehicle was in an accident, stolen, impounded, or repossessed, what do I do now?
            </h4>
            <p>
              After you file a report with the proper authority or organization (i.e. police, auto insurance, etc.), please contact Autostart: (800) 555-5555 to be directed to the proper department.
            </p>
          </div>
        )
      }
    ];
    return(
      <Accordion
          activeItems = {[0]}
        >
       {faqList.map((item, index)=>{
        return (
          <AccordionItem
            key = {index}
          >
             <AccordionItemTitle>
                 {item.title}
             </AccordionItemTitle>
             <AccordionItemBody>
                 {item.body}
             </AccordionItemBody>
           </AccordionItem>
         )
        })}
      </Accordion>
    )
  }

  render() {
    const FAQDiv = styled.div`
      display: flex;
      padding: 0px 25px;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      > h2 {
        color: #0a1f44
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
        margin: 0px
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
      ${props => css`${this.props.defaultCompStyle}`}
    `;


    return (
      <FAQDiv>
        <h2>Frequently Asked Questions About Autostart</h2>
        {this.renderAccordianList()}
      </FAQDiv>
    );
  }
}

export default FAQRoute;
