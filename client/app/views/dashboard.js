import React from 'react';
import Panel from './panel';
import {connect} from 'react-redux';
import client from '../client';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {setInterval} from '../actionCreators';
import classNames from 'classnames';

const mapStateToProps = (state) => {
  return {
    expenseList: state.expenseList
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setInterval}, dispatch);
};
class Dashboard extends React.Component {
    componentDidMount() {
      let fromDate;
      let toDate;
      const expenseList = {...this.props.expenseList};
      switch(expenseList.currentSelection) {
        case 'daily':
          fromDate = expenseList.daily.dateRange.getFromDateAsJSDate();
          toDate = expenseList.daily.dateRange.getToDateAsJSDate();
          break;
        case 'weekly':
          fromDate = expenseList.weekly.dateRange.getFromDateAsJSDate();
          toDate = expenseList.weekly.dateRange.getFromDateAsJSDate();
          break;
        case 'monthly':
          fromDate = expenseList.monthly.dateRange.getFromDateAsJSDate();
          toDate = expenseList.monthly.dateRange.getFromDateAsJSDate();
          break;
      }
      client(`expense?groupBy=category&fromDate=${fromDate}&toDate=${toDate}`).then(response => {
        console.log(response.entity);
      })
    }
    handleClick(interval) {
      this.props.setInterval(interval);
    }
    render() {
      const {currentSelection, daily, weekly, monthly} = {...this.props.expenseList};
      const getClasses = (interval) => {
        return classNames('tab', {
          'is-active': currentSelection === interval
        });
      };
      const getTitle = () => {
        switch(currentSelection) {
          case 'daily':
            return daily.dateRange.getFriendlyDate();
          case 'weekly':
            return weekly.dateRange.getFriendlyDate();
          case 'monthly':
            return monthly.dateRange.getFriendlyDate();
        }
      }
      return (
        <div className="dashboard">
          <div className="tabs">
              <div onClick={this.handleClick.bind(this, 'daily')} className={getClasses('daily')}>Daily</div>
              <div onClick={this.handleClick.bind(this, 'weekly')} className={getClasses('weekly')}>Weekly</div>
              <div onClick={this.handleClick.bind(this, 'monthly')} className={getClasses('monthly')}>Monthly</div>
          </div>
          <Panel title={getTitle()} id={currentSelection} active={currentSelection === 'daily'}>
          </Panel>
          <Link to="/expense">
            <button className="add-expense mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i>+</i>
            </button>
          </Link>
        </div>);
    }
}
Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Dashboard;
