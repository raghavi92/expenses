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
          fromDate = expenseList.daily.fromDate;
          toDate = expenseList.daily.toDate;
          break;
        case 'weekly':
          fromDate = expenseList.weekly.fromDate;
          toDate = expenseList.weekly.toDate;
          break;
        case 'monthly':
          fromDate = expenseList.monthly.fromDate;
          toDate = expenseList.monthly.toDate;
          break;
      }
      client(`expense?groupBy=category&fromDate=${fromDate.toDate()}&toDate=${toDate.toDate()}`).then(response => {
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
            return `${daily.fromDate.format("DD/MM/YYYY")} - ${daily.toDate.format("DD/MM/YYYY")}`;
          case 'weekly':
            return `${weekly.fromDate.format("DD/MM/YYYY")} - ${weekly.toDate.format("DD/MM/YYYY")}`;
          case 'monthly':
            return `${monthly.fromDate.format("DD/MM/YYYY")} - ${monthly.toDate.format("DD/MM/YYYY")}`;
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
