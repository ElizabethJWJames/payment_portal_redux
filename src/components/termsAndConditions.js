import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Form, Text, TextArea } from 'react-form';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';

//0a1f44
class TermsAndConditions extends Component {
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
    const TermsAndConditionsDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify: space-around;
      flex-wrap: wrap;
      text-align: left;
      .spacer.spacer{
        margin-top: 60px;
      }
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
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <TermsAndConditionsDiv>
        <h2>Terms And Conditions</h2>
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
        <p className = 'spacer'><strong>I. INTRODUCTION</strong></p>

            <p>We strive to provide an enjoyable online experience for our users, so we have established these Terms of Use, which govern each website, mobile site, application, and/or other Service, regardless of how such Service is distributed, transmitted, published, or broadcast (each, a &quot;Service&quot;) provided by AutoStart, its parent, subsidiaries and/or affiliates (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) that links to these Terms of Use. Please read these Terms of Use and the AutoStart Privacy Policy carefully. By using any of these Services, you agree that you are bound by all of the provisions of the Terms of Use and Privacy Policy.</p>

            <p>The Terms of Use may be modified from time to time; the date of the most recent revisions will appear on this page, so check back often. Continued access of the Service by you will constitute your acceptance of any changes or revisions to the Terms of Use and Privacy Policy.</p>

            <p>Among other things, the Agreement governs all text, articles, photographs, images, graphics, illustrations, creative, copy, artwork, video, audio, music, podcasts, ringtones, games, trademarks, trade names, service marks, and other brand identifiers, designs, plans, software, source and object code, algorithms, data, statistics, analysis, formulas, indexes, registries, repositories, and all other content, information, and materials (collectively, &quot;Content&quot;) available on or through the Service, whether posted, uploaded, transmitted, sent or otherwise made available by us, our licensors, vendors, and/or service providers.</p>

            <p><strong>II. REGISTRATION AND ACCOUNT/PROFILE CREATION</strong></p>

            <p>A. In general, you can use the AutoStart website without setting up an account or providing AutoStart with information about you. We may at times require that you register and/or set up an account/profile to access and/or use certain portions of the Service, or the Service as a whole, in which case you may be provided, or required to choose, a password and/or User ID, and you may provide payment information, your name, telephone number(s), email and/or street address, and other personal identity/profile information (&quot;Registration Information&quot;). We may use and share your Registration Information as described in our Privacy Policy.</p>

            <p>B. You guarantee that all Registration Information provided by you is true, accurate, complete, up-to-date, and solely yours. You may not impersonate, imitate or pretend to be somebody else when registering and/or setting up an account/profile on the Service. If any of your Registration Information changes, you must update it promptly by using the mechanism or contact information on the Service that allows you to change your Registration Information, if available. If no such mechanism or contact information is available on the Service, please notify our Privacy Policy Coordinator as described in our Privacy Policy.</p>

            <p>WE AND OUR INDEMNITEES (AS DEFINED BELOW), SHALL HAVE NO LIABILITY ASSOCIATED WITH OR ARISING FROM YOUR FAILURE TO MAINTAIN ACCURATE, COMPLETE OR UP-TO-DATE REGISTRATION INFORMATION, INCLUDING WITHOUT LIMITATION YOUR FAILURE TO RECEIVE CRITICAL INFORMATION. NEITHER WE NOR OUR INDEMNITEES SHALL BE RESPONSIBLE FOR VERIFYING YOUR REGISTRATION INFORMATION.</p>

            <p>C. We reserve the right at any time to change the access means or methods for portions of the Service, the Service as a whole, or certain products and/or services.</p>

            <p>D. You will be solely responsible for maintaining the confidentiality of your Registration Information. You may not authorize or permit anyone else to access and/or use your Registration Information or the Service with your account/profile and/or Registration Information. You may not access and/or use anyone else&#39;s Registration Information, or access, visit and/or use the Service by use of anyone else&#39;s account/profile and/or Registration Information. You may not sub-license, transfer, sell, rent or assign your Registration Information to any third party without our written approval. Any attempt to do so will be null and void and shall be considered a material breach of the Terms of Use.</p>

            <p>E. You are solely responsible for all access or visitation to, usage of, or activity on, your account/profile including, but not limited to, use of the account/profile by any person who uses your Registration Information, with or without authorization, or who has access to any computer, mobile or other device on which your account/profile resides or is accessible. You acknowledge and agree that we may, and you specifically authorize us to, process all transactions, including without limitation; purchases and/or registration for additional merchandise, products and/or services, including without limitation Content, that are initiated by use of your Registration Information.</p>

            <p>F. If you have reason to believe that your account/profile is no longer secure, you must immediately change the affected Registration Information by using the mechanism or contact information on the Service, if available, and/or close the account/profile. If no such mechanism or contact information is available on the Service, please immediately notify our Privacy Policy Coordinator as described in our Privacy Policy.</p>

            <p><strong>III. MONITORING AND COMPLAINTS ABOUT THE SERVICE AND THE CONTENT </strong></p>

            <p><strong>A. Monitoring </strong></p>

            <p>We may monitor activity on the Service. You hereby specifically agree to such monitoring. Nevertheless, we do not make any representations, warranties or guarantees that: (1) the Service, or any portion thereof, will be monitored for accuracy or unacceptable use, or (2) we will take any specific action (or any action at all) in the event of a challenge or dispute regarding compliance or non-compliance with the Agreement.</p>

            <p><strong>B. What to Do if You Have a Complaint About the Service and the Content </strong></p>

            <p>If you have a legitimate complaint about the Service or the Content, please do the following:</p>

            <p>Experience with Our Service: If you have concerns about Our Service, the system, service speed, or your user experience in general, please contact us at <a href="mailto:questions@autostart.com">questions@autostart.com</a>.</p>

            <p>Copyright Complaints: If you have reason to believe that your Content has been copied and/or is accessible on the Service in a way that constitutes copyright infringement, or that the Service contains links or other references to another site, application, destination or service that contains Content or activity that infringes your copyright rights, you may notify us as described below in the section entitled Copyright Complaints.</p>

            <p>CyberCrime: If you have reason to believe you may be the victim of an online crime, such as identity theft, fraud, infringement, or hacking, you may contact the Internet Crime Complaint Center, at www.ic3.gov, a partnership between the Federal Bureau of Investigation (FBI), the National White Collar Crime Center (NW3C), and the Bureau of Justice Assistance (BJA).</p>

            <p>IMPORTANT: FALSE OR INACCURATE ACCUSATIONS THAT OTHERS HAVE COMMITTED A CRIME, INAPPROPRIATE ACT, OR VIOLATION OF THIS AGREEMENT, COULD BE A VIOLATION OF CRIMINAL AND/OR CIVIL LAW, OR OTHERWISE EXPOSE YOU TO LIABILITY FOR DAMAGES (INCLUDING COSTS AND ATTORNEYS&#39; FEES).</p>

            <p><strong>IV. RULES OF USAGE</strong></p>

            <p><strong>A. Use of the Service by You: </strong></p>

            <p>1. This Service is not intended for use by children, especially those under age 18, and we do not knowingly collect personally identifiable information from users under the age of 18. No one under age 18 is allowed to register for the Service or to submit personally identifiable information to us, or to use portions of the Service that require registration. Minors, under age 18, must get the permission of their parent(s) or legal guardian(s) before making purchases, including subscriptions for the Service.</p>

            <p>2. You shall ensure that all equipment, hardware, software, products and/or services you use to access, visit, or use the Service does not disturb or interfere with our operation of the Service, or impede or interfere with others&#39; access, visitation and/or use of the Service. We reserve the right, in addition to our other remedies, with or without notice, to immediately disconnect from the Service any equipment, hardware, software, product and/or services causing interference with us, our licensors, vendors, service providers, the Service or any Content.</p>

            <p>3. If you provide to us the number for a mobile or other device, or we obtain the device identifier for a device you are using, you agree, represent, warrant, and guarantee that such device is registered in your name and owned by you, or that you have permission of the device owner(s).</p>

            <p>4. Unless otherwise specified, the Service is intended for your personal, non-commercial use only. You are solely responsible for all usage of, or activities on, the Service by you and by those you authorize or allow to use, or provide access to, the Service, for example, by authorizing or allowing access to your account/profile or any computer, mobile or other device on which the Service resides or is accessible.</p>

            <p>5. You must comply with all applicable import and export control laws, rules, and regulations of the United States and other countries, and you must not transfer, by electronic transmission or otherwise, any Content subject to restrictions under such laws, rules, or regulations to a site, application, destination, location, person or entity, or for an end use, prohibited thereby.</p>

            <p>6. You represent and warrant that you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country; and you are not listed on any U.S. Government list of prohibited or restricted parties.</p>

            <p>7. Content that is provided by us, our licensors, vendors and/or service providers, including without limitation photos, images, text, music, audio, videos, podcasts, trademarks, trade names, service marks and other brand identifiers, the organization, design, compilation, and &quot;look and feel&quot; of the Service, and all advertising thereon, is protected by local, state, federal, provincial, national, international, and foreign copyright, trademark and other intellectual property laws, rules, and regulations, and is the property of us or our licensors, vendors and/or service providers.</p>

            <p>8. Certain Content may be made available to you on or through the Service for download, installation, and/or streaming on your computer, mobile or other device, and via Real Simple Syndication (RSS), such as photos, images, text, music, audio, videos, podcasts, ringtones, games, graphics, or software. Such Content is subject to the same terms, conditions, limitations and restrictions applicable to all Content provided by us, our licensors, vendors and/or service providers. You must, in addition to all of your other obligations, use such Content only to the extent expressly authorized for the particular Content, and you may not use such Content in a manner that exceeds such authorization. Certain Content on the Service may be provided by third parties and AutoStart may not have editorial control over the content. The views or opinions expressed by those third parties do not necessarily represent the views of AutoStart.</p>

            <p>9. Vehicle listing, financing, and pricing information on the Service is for informational purposes only and AutoStart does not guarantee the accuracy of such information. AutoStart may obtain vehicle listing information, including vehicle descriptions from third parties, so there is a possibility that unintentional errors can occur. All vehicles are subject to prior sale and may not be available in your area when you are ready to purchase. You agree that any reliance on the vehicle listing, financing, or pricing information on the Service is at your own risk. All vehicle listings are subject to the Disclaimer of Warranty and Limitation of Liability in these Terms of Use. AutoStartis under no obligation to finance, sell, or lease a vehicle to you.</p>

            <p><strong>B. Prohibitions on Use of the Service: </strong></p>

            <p>1. Absent explicit prior written consent in certain situations, you may not, nor may you allow, enable, authorize, instruct, encourage, assist, suggest, inform, or promote that others, directly or indirectly, do any of the following for any reason:</p>

            <ul>
            	<li>access and/or use anyone else&#39;s Registration Information, or access, visit and/or use the Service by use of anyone else&#39;s account/profile and/or Registration Information</li>
            	<li>make any commercial, advertising, promotional, or marketing use of the Service and/or Content, including without limitation the photos, images, text, music, audio, videos, podcasts, trademarks, trade names, service marks and other brand identifiers of us, our licensors, vendors, and/or service providers obtained on or through the Service, except as permitted by the Copyright Act or other law or as expressly permitted in writing by the Agreement, us or the Service</li>
            	<li>impersonate, imitate or pretend to be somebody else, by setting up different accounts/profiles or otherwise, or falsely state, represent, or imply any affiliation, association, or connection with a person or entity when using the Service</li>
            	<li>authorize or permit anyone else to access and/or use your Registration Information, or access, visit and/or use the Service by use of your account/profile and/or Registration Information</li>
            	<li>falsely state, represent, or imply any affiliation, association, or connection between any person or entity, including without limitation you, your company, or your site, application, destination or service, with the Service, us, or our licensors, vendors and/or service providers</li>
            	<li>use any bots, cheats, macros, scripts, or run Maillist, Listserv or any form of auto-responder, or use any other automated process, or engage in meta-searching or periodic caching of information, to access, visit and/or use the Service, including without limitation to post, upload, transmit, send, or other make available Content on or through the Service</li>
            	<li>copy, harvest, crawl, index, scrape, spider, mine, gather, extract, compile, obtain, aggregate, capture, or store any Content, including without limitation photos, images, text, music, audio, videos, podcasts, data, software, source or object code, algorithms, statistics, analysis, formulas, indexes, registries, repositories, or any other information available on or through the Service, including by an automated or manual process or otherwise, if we have taken steps to forbid, prohibit, or prevent you from doing so</li>
            	<li>copy, reproduce, modify, change, edit, crop, alter, revise, adapt, translate, enhance, reformat, remix, rearrange, resize, create derivative works of, move, remove, delete, or erase any copyright, trademark, or other proprietary legends, symbols, marks, or notices on the Service, or attempt to circumvent any mechanisms for preventing the unauthorized reproduction or distribution of Content</li>
            	<li>copy, reproduce, modify, change, edit, crop, alter, revise, adapt, translate, enhance, reformat, remix, rearrange, resize, create derivative works of, move, remove, delete, erase, reverse engineer, decipher, decompile, disassemble, store, cache, aggregate, publish, post, display, distribute, broadcast, perform, transmit, rent, sell, share, sublicense, syndicate, or otherwise provide to others, or use any Content obtained on or through the Service, in whole or in part, except as permitted by the Copyright Act or other law or as expressly permitted in writing by the Agreement, us or the Service</li>
            	<li>copy, reproduce, modify, change, edit, crop, alter, revise, adapt, translate, enhance, reformat, remix, rearrange, resize, create derivative works of, move, remove, delete, erase, reverse engineer, decipher, decompile, disassemble, or otherwise attempt to derive any source code or underlying ideas or algorithms of the Service, in whole or in part, including without limitation any Content, communications, messaging, programming, hardware, functionality, or features on our networks, servers or databases, or otherwise reduce the Service, in whole or in part, to a human perceivable form</li>
            	<li>access, other than connecting to our servers by http requests using a browser, or disrupt, overwhelm, attack, hack, destroy, damage, disable, impair, alter, tamper or interfere with, the Service including without limitation any Content, communications, messaging, programming, hardware, functionality, or features on our networks, servers or databases, or impede or interfere with others&#39; access, visitation, and/or use of the Service, in any way or by any means, whether remotely or by access to our personal property, premises, or otherwise, including, without limitation, by using administrator passwords or by masquerading as an administrator while using the Service or otherwise; or</li>
            	<li>post, upload, transmit, send or otherwise make available on or through the Service any software disabling devices, time bombs, Trojan horses, cancelbots, viruses, worms, bugs, corrupted files, spyware, adware, malware, malicious programs or code, or devices or defects of similar nature.</li>
            </ul>

            <p>2. CAUTION: ANY ATTEMPT TO DO ANY OF THE FOREGOING PROHIBITED ACTS, OR TO OTHERWISE UNDERMINE THE OPERATION OF THE SERVICE, MAY BE A VIOLATION OF CRIMINAL AND CIVIL LAW. SHOULD SUCH AN ATTEMPT BE MADE, WE RESERVE THE RIGHT, IN ADDITION TO OUR OTHER REMEDIES, TO SEEK DAMAGES (INCLUDING WITHOUT LIMITATION ATTORNEYS&#39; FEES) FROM ANY SUCH INDIVIDUAL OR ENTITY TO THE FULLEST EXTENT PERMITTED BY LAW, INCLUDING CRIMINAL PROSECUTION.</p>

            <p><strong>C. Editing, Additions and Deletions: </strong></p>

            <p>We reserve the right, but undertake no duty, in our sole discretion, with or without notice, to review, edit, move, add, delete, or otherwise change any features, functionality, and/or Content available on or through, or downloadable from, the Service, including without limitation any Content in your account/profile. This includes updates or upgrades to Content. You agree to accept, and to take no action to interfere with, automatic upgrades or updates. Any changes to the Service may not be consistent across all platforms, computers, or devices. If you do not refresh the Service after each such change, or download the update(s) or upgrade(s), your experience may not reflect the most recent features, functionality, and/or Content, for which we and our Indemnitees disclaim any and all responsibility and liability. If any changes require you to obtain new, additional, or different equipment, hardware, software, and/or telephone, mobile, wireless, Internet and/or other services, you are solely responsible for any additional expense. Even after Content is removed from your account/profile, your messages, post(s), and/or threads, regardless of whether such removal or deletion is by you or by us, copies of that Content may be retained and/or remain viewable by us, our licensors, vendors, service providers and/or other third parties.</p>

            <p><strong>D. Copyright Complaints: </strong></p>

            <p>1. We respect the intellectual property of others, and we ask our users to do the same. We may, in appropriate circumstances and at our discretion, in addition to our other remedies, terminate, discontinue, suspend and/or restrict the account/profile or ability to access, visit, and/or use the Service of users who infringe the copyright rights of others, and we may choose to remove, delete, erase, or disable access to Content deemed to be infringing. It is our policy to terminate the access of repeat infringers.</p>

            <p>2. If you have reason to believe that your Content has been copied and/or is accessible on the Service in a way that constitutes copyright infringement, or that the Service contains links or other references to another site, application, destination or service that contains Content or activity that infringes your copyright rights, you may notify us by providing a document via fax, first class U.S. mail, or e-mail that includes the following information (as required by the Online Copyright Infringement Liability Limitation Act of the Digital Millennium Copyright Act, 17 U.S.C. sec. 512) to our copyright agent set forth below:</p>

            <p>i. A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</p>

            <p>ii. Identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works at the Service are covered by a single notification, a representative list of such works at the Service;</p>

            <p>iii. Identification of the copyrighted work that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate such copyrighted work;</p>

            <p>iv. Information reasonably sufficient to enable us to contact the complaining party, such as an address, telephone number, and if available, an electronic mail address at which the complaining party may be contacted;</p>

            <p>v. A statement that the complaining party has a good faith belief that use of the copyrighted work in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</p>

            <p>vi. A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</p>

            <p>3. IMPORTANT: MISREPRESENTATIONS MADE IN A NOTICE CLAIMING THAT CONTENT OR ACTIVITY IS INFRINGING VIOLATES THE DIGITAL MILLENNIUM COPYRIGHT ACT AND MAY EXPOSE YOU TO LIABILITY FOR DAMAGES (INCLUDING COSTS AND ATTORNEYS&#39; FEES). COURTS HAVE FOUND THAT YOU MUST CONSIDER COPYRIGHT DEFENSES, LIMITATIONS OR EXCEPTIONS BEFORE SENDING A NOTICE. ACCORDINGLY, IF YOU ARE NOT SURE WHETHER CONTENT RESIDING ON OUR SERVICE INFRINGES YOUR COPYRIGHT, WE SUGGEST THAT YOU FIRST CONTACT AN ATTORNEY. IN ADDITION, PLEASE DETERMINE WHETHER THE CONTENT YOU ARE SENDING A NOTICE ABOUT IS ACTUALLY RESIDING ON OUR SERVICE BEFORE SENDING THE NOTICE.</p>

            <p>4. Copyright Agent: AutoStart&nbsp;7619 Metcalf Ave, Overland Park, Kansas 66204.</p>

            <p>Note: Only copyright complaints should be sent to agent. No other communications will be accepted or responded to.</p>

            <p>For communications on other matters, please contact us through the means described on the Service, if available (for example, in the &quot;Contact Us&quot; section), or if no such means are specified, contact our Privacy Policy Coordinator as described in our Privacy Policy.</p>

            <p>PLEASE NOTE: THE INFORMATION WE PRESENT HERE IS FOR INFORMATIONAL PURPOSES ONLY AND IS NOT LEGAL ADVICE.</p>

            <p><strong>E. Indemnification: </strong></p>

            <p>You agree to indemnify, defend and hold harmless us, our licensors, vendors, service providers, and each of our and their respective officers, directors, members, employees, independent and sub-contractors, agents, representatives, successors and assigns (collectively, &quot;Indemnitees&quot;) from and against any and all claims, disputes, demands, proceedings, causes of action, judgments, damages, liabilities, losses, costs or expense (including, but not limited to reasonable attorneys&#39; fees) of any kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed (collectively, &quot;Claims&quot;) which may arise out of or are in any way connected with your access, visitation and/or use of the Service, your Content, unauthorized use of Content obtained on or through the Service, breach or alleged breach of the Terms of Use, or from any of your acts or omissions in connection with the Service.</p>

            <p><strong>F. Disclaimer of Warranty and Limitation of Liability: </strong></p>

            <p>1. CERTAIN FEATURES, FUNCTIONALITY, AND/OR CONTENT OFFERED ON OR THROUGH THE SERVICE MAY BE HOSTED, ADMINISTERED, RUN OR OTHERWISE PARTICIPATED IN BY THIRD PARTIES. THESE SERVICE PROVIDERS MAY REQUIRE THAT YOU AGREE TO THEIR ADDITIONAL TERMS, CONDITIONS, CONTRACTS, AGREEMENTS AND/OR RULES. YOUR COMPLIANCE WITH ANY SUCH ADDITIONAL TERMS, CONDITIONS, CONTRACTS, AGREEMENTS AND/OR RULES IS SOLELY YOUR RESPONSIBILITY AND WILL HAVE NO EFFECT ON YOUR CONTINUING OBLIGATION TO COMPLY WITH THE TERMS OF USE WHEN USING THE SERVICE. WE AND OUR INDEMNITEES SPECIFICALLY DISCLAIM ANY AND ALL LIABILITY IN CONNECTION WITH THE ACTS OR OMISSIONS OF SUCH THIRD PARTIES.</p>

            <p>2. YOU ACKNOWLEDGE THAT YOU ARE USING THE SERVICE AT YOUR OWN RISK. THE SERVICE IS PROVIDED &quot;AS IS&quot;, &quot;WITH ALL FAULTS&quot; AND ON AN &quot;AS AVAILABLE&quot; BASIS, AND WE AND OUR INDEMNITEES HEREBY EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES, AND GUARANTEES, EXPRESS AND IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF ACCURACY, RELIABILITY, TITLE, MERCHANTABILITY, NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE OR ANY OTHER WARRANTY, CONDITION, GUARANTEE OR REPRESENTATION, WHETHER ORAL, IN WRITING OR IN ELECTRONIC FORM, INCLUDING BUT NOT LIMITED TO THE ACCURACY OR COMPLETENESS OF ANY CONTENT CONTAINED THEREIN OR PROVIDED BY US OR THE SERVICE. WE AND OUR INDEMNITEES DO NOT REPRESENT, WARRANT OR GUARANTEE THAT ACCESS TO THE SERVICE AND/OR COMMUNICATIONS OR MESSAGING FROM OR TO US OR YOU WILL BE UNINTERRUPTED, TIMELY, OR ERROR FREE, OR THAT THERE WILL BE NO FAILURES, DELAYS, INACCURACIES, ERRORS OR OMISSIONS OR LOSS OF TRANSMITTED CONTENT, OR THAT NO SOFTWARE DISABLING DEVICES, TIME BOMBS, VIRUSES, WORMS, BUGS, OR DEVICES OR DEFECTS OF SIMILAR NATURE WILL BE TRANSMITTED ON OR THROUGH THE SERVICE, AND WE AND OUR INDEMNITEES WILL NOT BE LIABLE IN THE EVENT OF ANY SUCH OCCURRENCE.</p>

            <p>3. WE AND OUR INDEMNITEES ARE NOT RESPONSIBLE FOR INCOMPLETE, INCORRECT, LOST, DELAYED, LATE, MISDIRECTED, GARBLED, DAMAGED, ILLEGIBLE, UNDELIVERABLE, OR INCOMPLETELY RECEIVED COMMUNICATIONS OR MESSAGING FROM OR TO US OR YOU FOR ANY REASON, INCLUDING BY REASON OF HARDWARE, SOFTWARE, BROWSER, NETWORK, COMMUNICATIONS SYSTEM FAILURE, MALFUNCTION, DELAY, OR CONGESTION, OR ANY INCOMPATIBILITY AT OUR SERVERS OR ELSEWHERE, OR FOR ANY OTHER TECHNICAL PROBLEMS, ANY FORM OF ACTIVE OR PASSIVE FILTERING BY A USER&#39;S COMPUTER, MOBILE OR OTHER DEVICE OR ACCESS PROVIDER, INSUFFICIENT SPACE ON USER&#39;S COMPUTER, MOBILE OR OTHER DEVICE OR ACCOUNT/PROFILE, OR ANY OTHER CAUSE OR COMBINATION THEREOF.</p>

            <p>4. WE AND OUR INDEMNITEES SHALL NOT BE LIABLE TO YOU OR ANY THIRD PARTIES FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ALLEGEDLY SUSTAINED ARISING OUT OF THE TERMS OF USE, THE SERVICE, YOUR ABILITY OR INABILITY TO ACCESS, VISIT AND/OR USE THE SERVICE, INCLUDING DAMAGE TO YOUR COMPUTER, MOBILE OR OTHER DEVICE, OR FOR SOFTWARE DISABLING DEVICES, TIME BOMBS, VIRUSES, WORMS, BUGS, OR DEVICES OR DEFECTS OF SIMILAR NATURE ALLEGED TO HAVE BEEN OBTAINED FROM THE SERVICE, YOUR ACCESS, VISITATION, AND/OR USE OF, OR RELIANCE ON, THE SERVICE AND/OR CONTENT AVAILABLE ON OR THROUGH THE SERVICE, REGARDLESS OF THE TYPE OF CLAIM OR THE NATURE OF THE CAUSE OF ACTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL OUR LIABILITY TO YOU EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU DURING THE ONE MONTH PERIOD IN WHICH THE CLAIM AROSE. SOME STATES DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. THE AGREEMENT IS NOT SUBJECT TO THE LAWS OF SUCH STATES, BUT TO THE EXTENT A CLAIM IS BROUGHT THEREIN, OUR LIABILITY AND WARRANTIES ARE LIMITED TO THE EXTENT PERMITTED BY LAW. IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES, IN PART: &quot;A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR&quot;.</p>

            <p><strong>G. Termination or Suspension of the Service, Your use of the Service, and/or the Agreement: </strong></p>

            <p>1. We reserve the right, in addition to our other remedies, to terminate, discontinue, suspend and/or restrict the Service, your account/profile, your ability to access, visit and/or use the Service or any portion thereof, and/or the Agreement, including without limitation any of our purported obligations hereunder, for any or no reason, with or without notice. In the event of any termination or discontinuation of your account/profile, your ability to access, visit and/or use the Service or any portion thereof, and/or the Agreement, we reserve the right, in addition to our other remedies, to reassign, and/or allow another user to use, your password and/or User ID.</p>

            <p>2. Even if the Service, your ability to access, visit and/or use the Service or any portion thereof, and/or the Agreement is terminated, discontinued, suspended or restricted, by you or by us, we have no obligation to (but we may in our discretion) remove any Content, and therefore copies of all information with regard to your account/profile and/or Content you may have posted, uploaded, transmitted, sent or otherwise made available on or through the Service, may be retained and/or remain viewable by us, our licensors, vendors, service providers and/or other third parties. Nevertheless, we have no obligation to retain, store, or provide you with any information with regard to your account/profile and/or Content you may have posted, uploaded, transmitted, sent or otherwise made available on or through the Service. All provisions of the Agreement shall survive the termination or expiration of the Agreement and/or your account/profile.</p>

            <p><strong>H. Communications to You: </strong></p>

            <p>1. The communications between you and us usually use electronic means, whether you access, visit or use the Service, send us messages, or whether we post notices on the Service or communicate with you via messaging. For contractual purposes, you (a) consent to receive communications from us in electronic form; and (b) agree that all notices, documents, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if they were in writing. Your consent to receive communications and do business electronically, and your agreement to do so applies to all of your interactions and transactions with us.</p>

            <p>2. You understand and agree that joining the Service may include receiving certain communications from us, such as transactional or relationship messages, and/or messages about your account/profile, and that these communications are considered part of your account/profile and you may not be able to opt out of receiving them without ceasing to be a registered user of the Service.</p>

            <p>3. If you wish to opt out of email communications and no longer have the email with the link, you can opt yourself out at <a href="https://www.autostart.com/OptOut.a5w" target="_blank">autostart.com/OptOut</a>. If you wish to opt out of text messages and no longer have the text message with instructions for opting out, you can reply STOP at any time to any text message communication from AutoStart.</p>

            <p><strong>I. Mobile Participants: </strong></p>

            <p>You understand and agree that various entities unaffiliated with us make up the &quot;mobile ecosystem&quot; that enables you to access, visit and/or use the Service via your computer, mobile or other device, including without limitation equipment, hardware and software manufacturers and providers, telephone, mobile, wireless, and Internet network providers and carriers, and sellers or providers of Content for use with the Service (collectively, the &quot;Mobile Participants&quot;). We do not represent, warrant or guarantee that all portions of the Service, or the Service as a whole, can be accessed via all mobile or other devices, or via all carriers and service plans or is available in all geographic locations. THESE MOBILE PARTICIPANTS MAY REQUIRE THAT YOU AGREE TO THEIR ADDITIONAL TERMS, CONDITIONS, CONTRACTS, AGREEMENTS AND/OR RULES. YOUR COMPLIANCE WITH ANY SUCH ADDITIONAL TERMS, CONDITIONS, CONTRACTS, AGREEMENTS AND/OR RULES IS SOLELY YOUR RESPONSIBILITY AND WILL HAVE NO EFFECT ON YOUR CONTINUING OBLIGATION TO COMPLY WITH THE AGREEMENT WHEN USING THE SERVICE. WE AND OUR INDEMNITEES SPECIFICALLY DISCLAIM ANY AND ALL LIABILITY IN CONNECTION WITH THE ACTS OR OMISSIONS OF SUCH MOBILE PARTICIPANTS. Standard data rates may apply. We have agreements with some of these Mobile Participants that require us to make certain disclosures and pass along certain responsibilities to you. For such Mobile Participants, you specifically acknowledge and agree that: (i) the Terms of Use is between us and you; the Mobile Participants are not parties to the Terms of Use; (ii) the Mobile Participants and their parents, subsidiaries and affiliates are third party beneficiaries of the Agreement and upon your acceptance of the terms and conditions of the Terms of Use, the Mobile Participants will have the right (and will be deemed to have accepted the right) to enforce the Agreement against you; (iii) the license granted to you hereunder is limited to a non-transferable license to use the Service on the particular product authorized by the applicable Mobile Participant that you own or control and as permitted by such Mobile Participant&#39;s applicable usage rules; (iv) Mobile Participants have no obligation whatsoever in connection with the functionality or content of the Service, or to furnish any maintenance or support services with respect to the Service; (v) in the event of any failure of the Service to conform to any applicable warranty, you may be able to notify the applicable Mobile Participant to receive a refund of all or part of the amount you paid for the Service, if any (to the maximum amount permitted by applicable law, Mobile Participants will have no other warranty obligation whatsoever with respect to the Service); (vi) Mobile Participants are not responsible for addressing any claims, losses, liabilities, damages, costs or expenses by you or a third party relating to the Service or your possession, access, visitation and/or use of the Service, including without limitation (a) product liability claims; (b) any claim that the Service fails to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer protection or similar legislation; and (vii) in the event of any third party claim that the Service or your possession, access, visitation and/or use of the Service, infringes such third party&#39;s intellectual property rights, Mobile Participants are not responsible for the investigation, defense, settlement and/or discharge of such claim.</p>

            <p><strong>J. Third Party Content: </strong></p>

            <p>The Service may contain hyperlinks to websites operated by parties other than AutoStart. AutoStart does not operate the third party service(s) or links and is not responsible for the content or accessibility outside of the AutoStart website. The Service may also contain content created by third parties, such as customer reviews, where third parties may express their ideas and opinions. AutoStart and its affiliates do not endorse the accuracy or reliability of any third party content.</p>

            <p><strong>K. Disputes and Jurisdiction: </strong></p>

            <p>1. The Service is based in the United States. It is not designed, customized or intended for, or directed to, any other country. Those who choose to access, visit and/or use the Service do so on their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable. We make no representation, warranty or guarantee that the Service, or any merchandise, products, services, and/or Content available on or through the Service are appropriate, available, or legal in any particular geographic location.</p>

            <p>2. In any dispute between us, your sole remedy is to stop using your account/profile and/or the Service. This includes any dispute related to or arising out of: (i) rules, restrictions, limitations, terms and conditions that apply to the Service, whether listed in this Terms of Use or Privacy Policy, posted at various points in the Service, or otherwise communicated to you, including our enforcement, non-enforcement, or application of any such rules; (ii) any of our policies and/or practices, including our enforcement, non-enforcement, or application of any such policies and/or practices; (iii) any Content available on or through the Service, or any edits, deletions, additions, or other changes thereto; or (iv) your ability or inability to access, visit and/or use portions of the Service, or the Service as a whole, or features, functionality, and/or Content available on or through the Service.</p>

            <p>3. You agree that in the event of any dispute between us, you will first contact us and make a good faith sustained effort to resolve the dispute before resorting to more formal means of resolution. If we have a dispute that we are unable to resolve, you and AutoStart agree to binding arbitration using the American Arbitration Association or J.A.M.S. You may send a demand for arbitration to either of the following:</p>

            <p>American Arbitration Associate (AAA) 13455 Noel Road, Suite 1750 Dallas, TX 75240 www.adr.org (972) 702-8222</p>

            <p>J.A.M.S./Endispute 700 11th Street, NW, Suite 450 Washington, DC 20001 www.jamsADR.com (800) 352-5267</p>

            <p>The applicable rules of the arbitration forum you select will apply. You are giving up your right to a trial by jury or class action or similar relief. You have all other rights and remedies under applicable law. We will not object if you wish to use small claims court. If the cost of the arbitration forum exceeds normal court filing costs where you live, we will pay these costs. If paying these normal filing costs is a burden, we will also pay these costs. The arbitration will occur at the closest AAA or J.A.M.S. office to where you live.</p>

            <p>You have the right to reject this arbitration agreement, in which event neither you nor we will have the right to require arbitration of any disputes. Rejection of this arbitration agreement will not affect any other aspect of your contract. In order for you to reject this arbitration agreement, we must receive a signed writing (&quot;Rejection Notice&quot;) from you within 30 days of the day you enter into the contract, stating that you reject the arbitration agreement. The Rejection Notice must include your name, address and Customer Number and must be mailed to us at: 7619 Metcalf Ave., Overland Park, KS 66204, by certified mall, return receipt requested. Upon receipt of your Rejection Notice, we will refund your postage cost. If you reject this arbitration agreement, that will not constitute a rejection of any other arbitration agreement between you and us.</p>

            <p>4. We reserve the right, in addition to our other remedies, to take any technical, legal, and/or other action(s) that we deem necessary and/or appropriate, to prevent or correct violations and enforce the Terms of Use. You acknowledge and agree that we have the right hereunder to an injunction without posting a bond to stop or prevent a breach or violation of your obligations under the Terms of Use.</p>

            <p>5. You agree that, regardless of where you access, visit and/or use the Service, all issues concerning the construction, validity, interpretation and enforceability of the Terms of Use shall be governed and construed in accordance with the laws of the United States, in the particular State where the Service is headquartered, without regard to any principles of conflict of laws. To the extent permitted by applicable law, all judgments or awards shall be limited to actual out-of-pocket damages (excluding attorneys&#39; fees) and shall not include any indirect, punitive, incidental and/or consequential damages.</p>

            <p>6. If for any reason a court of competent jurisdiction finds any provision of the Terms of Use, or portion thereof, to be invalid or unenforceable, that provision or portion will be enforced to the maximum extent permissible so as to effect the intent of the parties, and the remainder of the Terms of Use will continue to be valid and enforceable in full force and effect.</p>

            <p><strong>L. General: </strong></p>

            <p>1. We reserve the right to post, from time to time, additional rules that apply to certain portions of the Service, or the Service as a whole. Such additional rules will be posted in the relevant portions of the Service, and are hereby incorporated into the Terms of Use by this reference. Your continued access, visitation and/or use of the Service constitutes your agreement to comply with these additional rules.</p>

            <p>2. The rules, restrictions, limitations, terms and conditions that apply to the Service, whether listed in these Terms of Use and Privacy Policy, posted at various points in the Service, or otherwise communicated to you, constitutes the Terms of Use and entire understanding between the parties, and supersedes prior agreements between the parties, whether oral or written, with respect to the subject matter hereof. Unless explicitly stated in writing by us, any new or additional features, functionality, or Content that augment or enhance the Service, including the release of updates, upgrades, new products and/or services, shall be subject to the terms and conditions of the Terms of Use.</p>

            <p>3. Any delay or failure by us to exercise or enforce any right or provision of the Terms of Use will not constitute a waiver of such right or provision. No waiver by us shall have effect unless such waiver is set forth in writing, signed by us; nor shall any such waiver of any breach or default constitute a waiver of any subsequent breach or default.</p>

            <p>4. We may sub-license, transfer, sell or assign the Terms of Use, and/or any of our purported obligations hereunder, at any time to any person or entity, with or without notice. You may not sub-license, transfer, sell, or assign the Terms of Use at any time to any person or entity, and any attempt to do so will be null and void.</p>

            <p>5. In the event of any conflict or inconsistency between the terms and conditions of this Terms of Use and the Privacy Policy, the terms of the Privacy Policy shall control. In the event of any conflict or inconsistency between the terms and conditions of the Privacy Policy and the Financial Privacy Policy, the terms of the Financial Privacy Policy shall control. In the event of any other conflict between the terms and conditions of this Terms of Use or the Privacy Policy, and any rules, restrictions, limitations, terms and/or conditions that may be posted at various points in the Service or otherwise communicated to users of the Service, the terms of this Terms of Use and Privacy Policy shall control.</p>
</TermsAndConditionsDiv>
    );
  }
}

export default TermsAndConditions;
