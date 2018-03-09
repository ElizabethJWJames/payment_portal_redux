import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';


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
        title: (
          <h3>
            <div className="accordion__arrow" role="presentation"/>
            My On-Line Account
           </h3>
         ),
        body: (
          <div>
            <h4>
              How can I update my street address, phone number, or email address?
            </h4>
            <p>
              To update your street address, phone number, email address or any other
              information, please contact the AutoStart location where you purchased your vehicle.
            </p>
            <h4>
              How do I create an online account?
            </h4>
            <p>
              To create an online account, select the register link
              in the upper right-hand corner of the mycarpay.com home page.
            </p>
            <h4>
              What can I access on my online account?
            </h4>
            <p>
              Your online account allows you to make a vehicle payment
              and view payment history, payment receipts, account information and insurance information.
            </p>
          </div>
        )
      },
      {
        title: (<h3> <div className="accordion__arrow" role="presentation"/> My Payments</h3>),
        body: (
          <div>
            <h4>
              I am having trouble making my online payment, what should I do?
            </h4>
            <p>
              If you are having trouble making your online payment call (888) 888-1292 during normal
              business hours, Monday through Friday 9:00 a.m. to 6:00 p.m. and Saturday 9:00 a.m. to 5:00 p.m.
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
        title: (<h3> <div className="accordion__arrow" role="presentation"/> My Vehicle</h3>),
        body: (
          <div>
            <h4>
              My vehicle was in an accident, stolen, impounded, or repossessed, what do I do now?
            </h4>
            <p>
              After you file a report with the proper authority or organization
              (i.e. police, auto insurance, etc.), please contact the AutoStart
              location where you purchased your vehicle.  Please have your police
              report number, insurance information and insurance claim number ready when you call.
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
             <AccordionItemTitle
              hideBodyClassName = "accordion__title--hidden"
             >
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
      .accordion__title--hidden {
        background: #808080;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        > h3 > .accordion__arrow {
          transform: rotate(0deg);
        }
      }
      .accordion__arrow.accordion__arrow {
          display: inline-block;
          position: absolute;
          width: 24px;
          height: 12px;
          top: 15px;
          left: 10px;
          transform: rotate(-180deg);
          &:after {
              display: block;
              position: absolute;
              top: 50%;
              width: 10px;
              height: 2px;
              background-color: currentColor;
              content: '';
          }
          &:before {
              display: block;
              position: absolute;
              top: 50%;
              width: 10px;
              height: 2px;
              background-color: currentColor;
              content: '';
          }
          &:after {
              right: 4px;
              transform: rotate(-45deg);
          }
          &:before {
              left: 4px;
              transform: rotate(45deg);
          }
      }




      .accordion__item {
        margin-bottom: 10px
      }
      .accordion__title > h3 {
        padding: 10px 0px 10px 40px;
        margin: 0px;
        position: relative;
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
