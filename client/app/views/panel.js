import React from 'react';
import PanelBody from './panelBody';
import PanelHeader from './panelHeader';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {navigateThroughDates, setData} from '../actionCreators';
import client from '../client';

const mapStateToProps = (state) => {
  const getFromDate = () => {
    if(state.expenseList.currentSelection === 'daily') {
      return state.expenseList.dailyRange.formattedFromDate();
    } else if(state.expenseList.currentSelection === 'weekly') {
      return state.expenseList.weeklyRange.formattedFromDate();
    }
    return state.expenseList.monthlyRange.formattedFromDate();
  }
  const getToDate = () => {
    if(state.expenseList.currentSelection === 'daily') {
      return state.expenseList.dailyRange.formattedToDate();
    } else if(state.expenseList.currentSelection === 'weekly') {
      return state.expenseList.weeklyRange.formattedToDate();
    }
    return state.expenseList.monthlyRange.formattedToDate();
  }
  return {
    fromDate: getFromDate(),
    toDate: getToDate()
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({navigateThroughDates, setData}, dispatch);
};
class Panel extends React.Component{
  reloadData() {
    const self = this;
    const {fromDate, toDate} = {...this.props};
    client(`expense?groupBy=category&fromDate=${fromDate}&toDate=${toDate}`).then(response => {
      self.props.setData(response.entity);
    });
  }
  componentDidMount() {
    this.reloadData.call(this);
  }
  componentDidUpdate() {
    this.reloadData.call(this);
  }
  render() {
    const {fromDate, toDate, navigateThroughDates} = {...this.props};
    return (
      <div>
        <PanelHeader fromDate={fromDate} toDate={toDate} navigateThroughDates={navigateThroughDates}/>
        <PanelBody fromDate={fromDate} toDate={toDate}/>
      </div>
    )
  }
}
Panel = connect(mapStateToProps, mapDispatchToProps)(Panel);
export default Panel;
