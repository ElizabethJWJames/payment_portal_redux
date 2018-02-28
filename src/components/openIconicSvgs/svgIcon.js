import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import svgPaths from './svgPaths.js';
import svgTransforms from './svgTransforms.js';

//0a1f44
class SvgIcon extends Component {
  constructor(props){
      super(props);
      this.state = {};

  }

  static propTypes = {
    iconName: PropTypes.string,
    iconOnClick: PropTypes.func,
    iconFill: PropTypes.string,
    iconSize: PropTypes.string,
    iconViewBox: PropTypes.string
  }

  static defaultProps = {
    iconName: 'accountLogin',
    iconOnClick: (item)=>{console.log('svgIcon', item)},
    iconFill: '#fff',
    iconSize: '48px',
    iconViewBox: "0 0 8 8"
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }


  render() {
    const SvgItem = styled.div`

      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <SvgItem
          className={this.props.iconName}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={this.props.iconSize}
            height={this.props.iconSize}
            viewBox={this.props.iconViewBox}
            fill = {this.props.iconFill}
            className={this.props.iconName+"SVG"}
          >
          <path
              d={
                svgPaths[this.props.iconName]
              }
              transform = {
                svgTransforms[this.props.iconName] ? svgTransforms[this.props.iconName] : ''
              }
              className={this.props.iconName+"Path"}
            />
        </svg>
      </SvgItem>

    );
  }
}

export default SvgIcon;
