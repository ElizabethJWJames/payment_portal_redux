import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

//0a1f44
class NavigationItem extends Component {
  constructor(props){
      super(props);
      this.state = {};
      this.isActive = this.isActive.bind(this);
  }

  static propTypes = {
    defaultCompStyle: PropTypes.string,
    isOrientationHorizontal: PropTypes.bool,
    pageName: PropTypes.string,
    pageLink: PropTypes.string,
    navOnClick: PropTypes.func,
    location: PropTypes.object
  }

  static defaultProps = {
    isOrientationHorizontal: true,
    pageName: 'Home'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  isActive(){
    let myReturn = false;
    if(this.props.location && this.props.location.pathname === this.props.pageLink){
      myReturn = true;
    }
    return myReturn;
  }

  render() {
    const NavItem = styled.div`
      background: transparent;
      color: ${this.isActive() ? '#0a1f44' : '#9f9f9f'};
      border${this.props.isOrientationHorizontal ? '-bottom':'-right' }: 4px solid transparent;
      font-weight: bold;
      height: 48px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #ED1C24;
        border${this.props.isOrientationHorizontal ? '-bottom':'-right' }: 4px solid #ED1C24;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <NavLink
          to = {this.props.pageLink}
        >
      <NavItem
          className='navigationItem'
        >
        <p
            className='pageName'
          >
          {this.props.pageName}
        </p>
      </NavItem>
      </NavLink>
    );
  }
}

export default NavigationItem;
