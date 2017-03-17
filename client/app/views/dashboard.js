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
        case 'weekly':
          fromDate = expenseList.weekly.fromDate;
          toDate = expenseList.weekly.toDate;
        case 'monthly':
          fromDate = expenseList.monthly.fromDate;
          toDate = expenseList.monthly.toDate;
      }
      client(`expense?groupBy=category&fromDate=${fromDate}&toDate=${toDate}`).then(response => {
        //Todo: update state based on the response
      })
    }
    handleClick(interval) {
      this.props.setInterval(interval);
    }
    render() {
      const {currentSelection} = {...this.props.expenseList};
      const getClasses = (interval) => {
        return classNames('tab', {
          'is-active': currentSelection === interval
        });
      };
      return (
        <div className="dashboard">
          <div className="tabs">
              <div onClick={this.handleClick.bind(this, 'daily')} className={getClasses('daily')}>Daily</div>
              <div onClick={this.handleClick.bind(this, 'weekly')} className={getClasses('weekly')}>Weekly</div>
              <div onClick={this.handleClick.bind(this, 'monthly')} className={getClasses('monthly')}>Monthly</div>
          </div>
          <Panel title='12-12-2017' id="daily" active={currentSelection === 'daily'}>
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
