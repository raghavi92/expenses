import React from 'react';
import Panel from './panel';
import {connect} from 'react-redux';
import client from '../client';

const mapStateToProps = (state) => {
  return {
    expenseList: state.expenseList
  };
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
        console.log(response.entity);
      })
    }
    handleClick() {
      console.log(arguments);
    }
    render() {
      const {currentSelection} = {...this.props.expenseList};
      const getTitle = (type) => {
        return 'sdf'
      }
        return (
          <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
            <div className="mdl-tabs__tab-bar">
                <a onClick={this.handleClick.bind(this)} href="#daily" className='mdl-tabs__tab is-active'>Daily</a>
                <a href="#weekly" className='mdl-tabs__tab'>Weekly</a>
                <a href="#monthly" className='mdl-tabs__tab'>Monthly</a>
            </div>
            <Panel title='12-12-2017' id="daily" active={currentSelection === 'daily'}>
            </Panel>
            <Panel title='12-12-2017' id="weekly" active={currentSelection === 'weekly'}>
            </Panel>
            <Panel title='12-12-2017' id="monthly" active={currentSelection === 'monthly'}>
            </Panel>
          </div>);
    }
}
Dashboard = connect(mapStateToProps)(Dashboard);
export default Dashboard;
