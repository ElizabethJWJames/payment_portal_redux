import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { Router, Route, Link } from 'react-router-dom';

//0a1f44
class Alert extends Component {
  constructor(props){
      super(props);
      this.state = {};

  }

  static propTypes = {
    alertText: PropTypes.string,
    closeOnClick: PropTypes.func
  }

  static defaultProps = {
    alertText: 'This is an Alert'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }


  render() {
    const AlertItem = styled.div`

      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <AlertItem
          className='alertItem'
        >
        <p
            className='alertText'
          >
          {this.props.alertText}
        </p>
        <p
            onClick = {this.props.closeOnClick}
          >
          X
        </p>
      </AlertItem>

    );
  }
}

export default Alert;
