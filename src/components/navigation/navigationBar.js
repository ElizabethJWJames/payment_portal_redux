
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import NavigationItem from './navigationItem.js'
import logo from './../../images/AutoStart-logo2.png';

//0a1f44
class NavigationBar extends Component {
  constructor(props){
      super(props);
      this.state = {
        hamburgerIsOpen: false
      };
      this.renderNavList = this.renderNavList.bind(this);
      this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  static propTypes = {
    navigationList: PropTypes.array,
    location: PropTypes.object
  }

  static defaultProps = {
    navigationList: [
      {
        pageName: 'Home',
        pageLink: '/home'
      },
      {
        pageName: 'Contact Us',
        pageLink: '/contact'
      },
      {
        pageName: 'FAQs',
        pageLink: '/faqs'
      }
    ]
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  renderNavList(NavListStyle, isHorizontal){
    return (
      <NavListStyle>
        {
          this.props.navigationList.map((listItem,index)=>{
            return (
              <NavigationItem
                  location = {this.props.location}
                  pageName = {listItem.pageName}
                  key = {listItem.pageName}
                  pageLink = {listItem.pageLink}
                  isOrientationHorizontal = {isHorizontal}
                />
            )
          })
        }
      </NavListStyle>
    )
  }

  renderLogo(){
    return(
      <a>
        <img
            src={logo}
            alt="logo"
          />
      </a>
    )
  }

  toggleHamburger(){
      this.setState((prevState)=>{
        return {...prevState, hamburgerIsOpen: !prevState.hamburgerIsOpen};
      });
  }


  renderHorizontalNav(){
    const NavList = styled.div`
      display: flex;
      flex-direction: row;
      a:-webkit-any-link {
        text-decoration-line:none
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;
      return(
        <div>
          {this.renderNavList(NavList, true)}
        </div>
      )
  }

  renderHamburgerNav(){
    const NavList = styled.div`
      display: ${this.state.hamburgerIsOpen ? 'flex' : 'none'};
      flex-direction: column;
      position: absolute;
      a:-webkit-any-link {
        text-decoration-line:none
      }
      background: #fff;
      left: -104px;
      width: 104px;
      height: 370px;
      -webkit-animation: slide 0.5s forwards;
      -webkit-animation-delay: 0s;
      animation: slide 0.5s forwards;
      animation-delay: 0s;
      box-shadow: 4px 0 2px -2px gray;

      @-webkit-keyframes slide {
          100% { left: 0; }
      };

      @keyframes slide {
          100% { left: 0; }
      };
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    const HamTop = styled.div`
      height: 6px;
      width: 40px;
      display: flex;
      transform:${this.state.hamburgerIsOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
      margin-top:${this.state.hamburgerIsOpen ? '3px' : '0'};
      border-radius: 5px;
      background: #0a1f44;
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    const HamMid = styled.div`
      height: 6px;
      width: 40px;
      display: ${this.state.hamburgerIsOpen ? 'none' : 'flex'};
      border-radius: 5px;
      background: #0a1f44;
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    const HamBot = styled.div`
      height: 6px;
      width: 40px;
      transform:${this.state.hamburgerIsOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
      margin-top:${this.state.hamburgerIsOpen ? '-25px' : '0'};
      display: flex;
      border-radius: 5px;
      background: #0a1f44;
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    const HamButton = styled.div`
      height: 28px;
      width: 48px;
      display: flex;
      padding: 10px 0px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return(
      <div>
        <HamButton
            onClick = {this.toggleHamburger}
          >
          <HamTop

          />
          <HamMid

          />
          <HamBot

          />
        </HamButton>
        {this.renderNavList(NavList, false)}
      </div>
    )
  }

  render() {
    const Navigation = styled.div`
      box-shadow: 0 4px 2px -2px gray;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background: #fff;
      z-index: 9;
      ${props => css`${this.props.defaultCompStyle}`}
    `;
    return (
      <Navigation>
        {window.innerWidth >= 800 ? this.renderHorizontalNav() : this.renderHamburgerNav()}

        {this.renderLogo()}
      </Navigation>
    );
  }
}

export default NavigationBar;
