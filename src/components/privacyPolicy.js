import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';

//0a1f44
class PrivacyPolicy extends Component {
  constructor(props){
      super(props);
      this.state = {
        displayError: false
      };
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
    const PrivacyPolicyDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      position: relative;
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
      .spacer.spacer{
        margin-top: 60px;
      }
      > p {
        font-size: 1em;
        padding: 20px 10px;
      }
      > strong {
        font-size: 1em;
        padding: 20px 10px;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <PrivacyPolicyDiv>
        <h2>Privacy Policy</h2>
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
        <p className = 'spacer'>At AutoStart,we believe that the confidentiality and protection of your personal information is one of our primary responsibilities. We want you to know that you can count on us to protect the privacy and security of your customer information. While you can browse through our website without disclosing who you are, in order for you to apply for credit we are required to collect certain information from you. By using this site, you agree to the terms of this privacy policy.</p>
<strong>What happens with this information?</strong>

<p>We do not disclose any nonpublic personal information about our potential customers or former customers to anyone, except as permitted by law. Nonpublic, personal information, includes any information about you, that you or someone else has provided to us and that is not publicly available, as well as, information about your transactions with us.</p>
<strong>This includes:</strong>

<ul>
	<li>Information that you provide to us by submitting an application for credit on this website or in person</li>
	<li>Information reported to us from any consumer reporting agency</li>
	<li>Previous account information and historical data associated with any account that you have had with us before</li>
</ul>

<p>We may, however, disclose certain information to government agencies, consumer-reporting agencies, and other outside parties as permitted or required by Federal Privacy Acts and other applicable laws. These disclosures are typically made for purposes such as verifying individuals&rsquo; identities, reducing fraud and identity theft, verifying information or credit approvals, and reporting transactions to credit reporting agencies.</p>

<p>We are committed to preventing others from gaining unauthorized access to your customer information, and we enforce our privacy policies through the use of procedures, and technology specifically designed to ensure the confidentiality of your personal information.</p>

<p>In addition, we restrict access to your information by our employees and agents to that of business purposes only. If you specifically request us to provide nonpublic personal information to anyone, such as mortgage companies or other lenders, we will provide the information only upon your written or verified email authorization.</p>
<strong>Encrypted Data Transmission</strong>

<p>This website secures your private information using a GeoTrust Certificate. Information exchanged with any address beginning with &quot;https&quot; is encrypted using SSL before it is transmitted. This ensures that all data passed between the web server and browsers remain private.</p>
<strong>About Cookies</strong>

<p>A cookie is a small text file containing information that a website stores on your computer&#39;s hard drive so the site can remember something about you at a later time. Cookies can make a website more useful by allowing the site to personalize information for visitors and by storing information about user preferences on a particular site so that the user does not have to re-enter information each time he or she returns to the site. Many websites such as Mycarafc.com use cookies to provide useful features for their customers&rsquo; on-line shopping experience. Most browsers are automatically set up to accept cookies. If you would prefer, you can set your browser to reject cookies. However, you might not be able to use certain features on the site if you elect to use the &quot;reject&quot; option.</p>
<strong>Data Collection</strong>

<p>AutoStart uses Google Analytics to analyze traffic driven to this Web site in order to help us understand our customers&#39; and visitors&#39; search criteria. The data they collect on our behalf may include search engine referral, affiliate referrals, traffic driven by banner ads or other online promotions, how visitors navigate around the site and the most popular pages. We also collect certain technical information, such as the browser version and operating system. Google Analytics collects only anonymous, aggregate statistics. For example, we do not tie a specific visit to a specific IP address, and we do not correlate this tracking with personally identifiable information.</p>
<strong>Assistance to Victim of Identity Theft</strong>

<p>AutoStart complies with the Federal Trade Commission&#39;s, &ldquo;Red Flags Rule.&rdquo; If you suspect that someone has had unauthorized access to your account with us or access to your personal identification information, you should report this to your local law enforcement agency and to the Federal Trade Commission (FTC). To speak with a trained FTC telephone counselor, call toll-free 1-877-IDTheft (1-877-438-4338). Or, to enter information about your complaint into a secure FTC online database, you may do this on-line at <a href="http://www.consumer.gov/idtheft" target="_blank">www.consumer.gov/idtheft</a>.</p>
<strong>Consumer Credit Reporting Agencies (Credit Bureaus)</strong>

<p>National consumer credit reporting agencies may also sell or share your name and certain other information about you or your account to various outside companies for marketing purposes. You may direct these agencies not to do so by calling their toll-free telephone number at 1-888-567-8688. (1-888-OPTOUT)</p>
<strong>Federal &quot;Do Not Call&quot; Registry</strong>

<p>The FTC has implemented a Do Not Call Registry, effective October 1, 2003. To register for the Telemarketing &quot;Do Not Call list,&quot; visit the FTC&rsquo;s Web site at&nbsp;<a href="http://www.donotcall.gov/" target="_blank">www.donotcall.gov</a>.</p>
<strong>Notification of Changes</strong>

<p>These practices and policies are subject to change, but we will communicate any material changes to you. The practices and policies in this disclosure replace all previous privacy notices or statements of AutoStart.</p>
<strong>Receiving E-mail from AutoStart</strong>

<p>The Companies do not send unsolicited e-mail. When you provide your e-mail address to us, it is under the explicit understanding that you want to receive information from us. Every time you submit a request for information, we will send you an automatic response confirming your submission. In addition, we may contact you from time to time for the purpose of informing you about our promotions, products, services and programs.<br />
<br />
Any e-mail sent to you by AutoStart contains a link that provides access to a simple automated facility to opt out of future e-mails from us. If you wish to opt out of additional e-mail communications, and no longer have the e-mail with the link, you can opt yourself out at <a href="https://www.autostart.com/OptOut.a5w">www.autostart.com/OptOut</a>. If you have received an unwanted e-mail sent from Us, please forward a copy of the e-mail and your comments to <a href="mailto:approvals@mycarafc.com?subject=Please%20add%20me%20to%20the%20%22Do%20Not%20E-mail%22%20list">optout@autostart.com</a> and we will immediately add you to our &quot;do not e-mail&quot; list.</p>
<strong>Concerning this Website and Privacy Statement</strong>

<p>If you have any questions about this privacy statement or the content or information presented to you on this website please contact us at: <a href="mailto:privacy@autostart.com">questions@autostart.com</a>.</p>
      </PrivacyPolicyDiv>
    );
  }
}

export default PrivacyPolicy;
