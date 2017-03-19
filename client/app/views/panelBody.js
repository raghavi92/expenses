import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import client from '../client';
const mapStateToProps = (state) => {
  return {
    expenseList: state.expenseList.data
  };
};
class PanelBody extends React.Component {
  componentDidMount() {
    let fromDate;
    let toDate;
    const expenseList = {...this.props.expenseList};
    switch(expenseList.currentSelection) {
      case 'daily':
        fromDate = expenseList.dailyRange.getFromDateAsJSDate();
        toDate = expenseList.dailyRange.getToDateAsJSDate();
        break;
      case 'weekly':
        fromDate = expenseList.weeklyRange.getFromDateAsJSDate();
        toDate = expenseList.weeklyRange.getFromDateAsJSDate();
        break;
      case 'monthly':
        fromDate = expenseList.monthlyRange.getFromDateAsJSDate();
        toDate = expenseList.monthlyRange.getFromDateAsJSDate();
        break;
    }
    client(`expense?groupBy=category&fromDate=${fromDate}&toDate=${toDate}`).then(response => {
      console.log(response.entity);
    })
  }

  render() {
    return <div />;
  }
}
export default PanelBody;
