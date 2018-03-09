import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Router, Route, Link } from 'react-router-dom';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';

const alertColors = {
  alert: {
    dark: '#7c1c11',
    light: '#ebc8c4',
    icon: 'warning'
  },
  warning: {
    dark: '#847000',
    light: '#f8f3d6',
    icon: 'flag'
  },
  info: {
    dark: '#267512',
    light: '#baf2a2',
    icon: 'info'
  }
}

//0a1f44
class Alert extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  static propTypes = {
    alertText: PropTypes.string,
    alertType: PropTypes.string,
    closeOnClick: PropTypes.func
  }

  static defaultProps = {
    alertText: 'This is an Alert',
    alertType: 'alert'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  configColors(alertType){
    const alertColor = alertColors[alertType];
    return alertColor;
  }

  render() {
    const AlertItem = styled.div`
        width: calc(100% - 20px);
        display: flex;
        border: 1px solid ${this.configColors(this.props.alertType).dark};
        color: ${this.configColors(this.props.alertType).dark};
        background: ${this.configColors(this.props.alertType).light};
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 0px 10px;
        align-items: center;
        .alertText.alertText {
          padding: 0px 10px;
        }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <AlertItem
          className='alertItem'
        >
        <SvgIcon
            iconName= {this.configColors(this.props.alertType).icon}
            iconSize= '20px'
            iconFill= {this.configColors(this.props.alertType).dark}
          />
        <p
            className='alertText'
          >
          {this.props.alertText}
        </p>
        <p
            onClick = {this.props.closeOnClick}
          >
        </p>
      </AlertItem>

    );
  }
}

export default Alert;
