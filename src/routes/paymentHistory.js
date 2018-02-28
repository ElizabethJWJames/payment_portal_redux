import React, { Component } from 'react';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { AutoSizer, Table, Column } from 'react-virtualized';
import SvgIcon from './../components/openIconicSvgs/svgIcon.js';

//0a1f44
class PaymentHistoryRoute extends Component {
  constructor(props){
      super(props);
      this.state = {
        activeAccount: 0
      };
      this.changeIndex = this.changeIndex.bind(this);
      this.renderTable = this.renderTable.bind(this);
      this.renderRecieptButton = this.renderRecieptButton.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  renderRecieptButton(data){
    return (
      <div
       className='recieptButton'
       onClick= {()=>{console.log(data)}}
      >
      <SvgIcon
          iconName= 'print'
          iconSize= '24px'
          iconFill= "#000"
        />
      </div>
    )
  }

  renderTable(){
    const currentAccount= this.props.accountInfo[this.state.activeAccount];

    return (
      <AutoSizer disableHeight>
      {({width})=>{
        return (
          <Table
            rowGetter = {({ index }) => currentAccount.payment_history[index]}
            width = {width-17}
            rowHeight = {48}
            height = {350}
            rowCount = {currentAccount.payment_history.length}
            className = "payHisTable"
            headerClassName = "tHeader"
            headerHeight = {48}
            rowClassName = 'tRow'
            headerStyle = {{
              overflow: '',
              paddingRight: '',
              flex: ''
            }}
            gridStyle = {{
              paddingRight: '',
            }}
          >
          <Column
            label="Payment Date"
            dataKey="PmtDate"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="Amount"
            dataKey="TotalApplied"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="Payment Type"
            dataKey="PAIDBY"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="Payment Location"
            dataKey="PAIDIN"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="View/Print"
            dataKey='print'
            className="tColumn"
            width = {width/5}
            cellRenderer={(cell) => (this.renderRecieptButton(cell.rowData))}
          />
          </Table>
        )
      }}

      </AutoSizer >
    )
  }

  changeIndex(event){
    const newIndex = event.target.value;
    if(newIndex !== this.state.activeAccount){
      this.setState((prevState)=>{
        return {...prevState, activeAccount: newIndex}
     });
    }
  }

  render() {

    const PaymentDiv = styled.div`
      display: flex;
      flex-direction: column;
      >div {
        display: flex;
        width: calc(100% - 20px);
      }
      .recieptButton.recieptButton{
        &:hover{
          .printPath.printPath{
            fill: #ED1C24
          }
        }
      }
      .changeAccount.changeAccount {
        padding: 5px;
        display: flex;
        width: 100%;
        height: 48px;
        font-size: 1em;
        margin-bottom: 10px;
      }
      > h2 {
        align-self: flex-start;
      }
      .tHeader.tHeader {
        background-color: #0a1f44;
        color: #fff;
        margin: 0px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        display: flex;
        flex: 1
      }
      .ReactVirtualized__Table__headerTruncatedText.ReactVirtualized__Table__headerTruncatedText {
        background-color: #0a1f44;
        color: #fff;
        padding: 0px;
        margin: 0px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 48px;
      }
      .tData.tData {
        margin: 0px;
        padding: 5px;
        border-bottom: 2px solid #0a1f44;
        border-left: 1px solid #0a1f44;
        border-right: 1px solid #0a1f44;
        display: flex;
        flex: 1;
      }
      .tRow.tRow {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding-right: 0px;
        justify-content: space-evenly;
        &:nth-of-type(even) {
          background-color: #ddf;
        }
      }
      .payHisTable.payHisTable {
        border-collapse: collapse;
        display: flex;
        justify-content: space-evenly;
        align-self: stretch;
        flex-direction: column;
      }
      ${props => css`${this.props.defaultCompStyle}`}
    `;

    return (
      <PaymentDiv>
        <h2>Payment History</h2>
          <select className="changeAccount" value={this.state.activeAccount} onChange = {this.changeIndex}>
            {
              this.props.accountInfo.map((item, index)=>{
                return (
                  <option value= {index} key = {index}>
                    {`${item.AccountText}`}
                  </option>
                )
              })
            }
          </select>

        {
          this.props.accountInfo[this.state.activeAccount].payment_history.length > 1 ? this.renderTable() :
          (<h3> No Payments have been made on this Account</h3>)
        }
      </PaymentDiv>
    );
  }
}
const hocComponent = compose( connect((state, props)=>{
    return ({
      paymentOnClick: (e)=>{console.log(e)},
      accountInfo: state.main.accountInformation
    });
}));

export default hocComponent(PaymentHistoryRoute);
