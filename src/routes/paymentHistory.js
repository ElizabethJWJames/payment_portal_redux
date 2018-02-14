import React, { Component } from 'react';
import { fromJS } from 'immutable';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { AutoSizer, Table, Column } from 'react-virtualized';


//0a1f44
class PaymentHistoryRoute extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !fromJS(nextProps).equals(this.props) || !fromJS(nextState).equals(this.state);
  }

  // createTable(){
  //   return (
  //     <table className = 'payHisTable'>
  //     <thead>
  //       <tr className = 'tRow'>
  //         <th className = "tHeader">Payment Date</th>
  //         <th className = "tHeader">Amount</th>
  //         <th className = "tHeader">Payment Type</th>
  //         <th className = "tHeader">Payment Location</th>
  //         <th className = "tHeader">View/Print</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {this.props.paymentHistoryArray.map((paymentItem, index)=>{
  //         return (
  //           <tr className = 'tRow' key = {index}>
  //             <td className = "tData">{paymentItem.date}</td>
  //             <td className = "tData">{paymentItem.amount}</td>
  //             <td className = "tData">{paymentItem.type}</td>
  //             <td className = "tData">{paymentItem.location}</td>
  //             <td
  //               className = "tData"
  //               onClick = {()=>{this.props.paymentOnClick(paymentItem.receipt)}}
  //               >
  //                 View Print
  //             </td>
  //           </tr>
  //         )})}
  //     </tbody>
  //     </table>
  //   )
  // }

  // splicePaymentHistory(){
  //   const payHistory = this.props.paymentHistoryArray;
  //     const division = payHistory.length/20
  //     const modulo = payHistory.length%20
  //     const wholeDiv = Math.floor(division)
  //   console.log(wholeDiv, division, modulo)
  // }
  // getRows(){
  //   return this.props.paymentHistoryArray.map((paymentItem, index)=>{
  //         return (
  //           <tr className = 'tRow' key = {index}>
  //             <td className = "tData">{paymentItem.date}</td>
  //             <td className = "tData">{paymentItem.amount}</td>
  //             <td className = "tData">{paymentItem.type}</td>
  //             <td className = "tData">{paymentItem.location}</td>
  //             <td
  //               className = "tData"
  //               onClick = {()=>{this.props.paymentOnClick(paymentItem.receipt)}}
  //               >
  //                 View Print
  //             </td>
  //           </tr>
  //         )})
  // }

  renderTable(){

    return (
      <AutoSizer disableHeight>
      {({width})=>{
        return (
          <Table
            rowGetter = {({ index }) => this.props.paymentHistoryArray[index]}
            width = {width-17}
            rowHeight = {48}
            height = {350}
            rowCount = {this.props.paymentHistoryArray.length}
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
            dataKey="date"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="Amount"
            dataKey="amount"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="Payment Type"
            dataKey="type"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="Payment Location"
            dataKey="location"
            className="tColumn"
            width = {width/5}
          />
          <Column
            label="View/Print"
            dataKey="receipt"
            className="tColumn"
            width = {width/5}
          />
          </Table>
        )
      }}

      </AutoSizer >
    )
  }

  render() {

    const PaymentDiv = styled.div`
      display: flex;
      flex-direction: column;
      >div {
        display: flex;
        width: calc(100% - 20px);
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
        {
          this.props.paymentHistoryArray.length > 1 ? this.renderTable() :
          (<h3> No Payments have been made on this Account</h3>)
        }
      </PaymentDiv>
    );
  }
}
const hocComponent = compose( connect((state, props)=>{
    return ({
      paymentOnClick: (e)=>{console.log(e)},
      paymentHistoryArray: state.main.paymentHistory
    });
}));

export default hocComponent(PaymentHistoryRoute);
