import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {navigateThroughDates} from '../actionCreators';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({navigateThroughDates}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    currentSelection: state.expenseList.currentSelection,
    dailyFriendlyDate: state.expenseList.dailyRange.getFriendlyDate(),
    weeklyFriendlyDate: state.expenseList.weeklyRange.getFriendlyDate(),
    monthlyFriendlyDate: state.expenseList.monthlyRange.getFriendlyDate()
  };
};

class PanelHeader extends React.Component {
  render() {
    const {currentSelection, dailyFriendlyDate, weeklyFriendlyDate, monthlyFriendlyDate, navigateThroughDates} = {...this.props};
    const getTitle = () => {
      switch(currentSelection) {
        case 'daily':
          return dailyFriendlyDate;
        case 'weekly':
          return weeklyFriendlyDate;
        case 'monthly':
          return monthlyFriendlyDate;
      }
    }
    return (
        <div className="title">
          <div onClick={this.props.navigateThroughDates.bind(this, 'previous')}>Prev</div>
          <div>{getTitle()}</div>
          <div onClick={this.props.navigateThroughDates.bind(this, 'next')}>Next</div>
        </div>
    );
  }
}
PanelHeader = connect(mapStateToProps, mapDispatchToProps)(PanelHeader);
export default PanelHeader;
