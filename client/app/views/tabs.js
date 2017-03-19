import React from 'react';
import {setInterval} from '../actionCreators';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setInterval}, dispatch);
};
const mapStateToProps = (state) => {
  return {
    currentSelection: state.expenseList.currentSelection
  };
};
class Tabs extends React.Component {
  handleClick(interval) {
    this.props.setInterval(interval);
  }

  render() {
    const currentSelection = this.props.currentSelection;
    const getClasses = (interval) => {
      return classNames('tab', {
        'is-active': currentSelection === interval
      });
    };
    return (
      <div className="tabs">
          <div onClick={this.handleClick.bind(this, 'daily')} className={getClasses('daily')}>Daily</div>
          <div onClick={this.handleClick.bind(this, 'weekly')} className={getClasses('weekly')}>Weekly</div>
          <div onClick={this.handleClick.bind(this, 'monthly')} className={getClasses('monthly')}>Monthly</div>
      </div>
    )
  }
}
Tabs = connect(mapStateToProps, mapDispatchToProps)(Tabs);
export default Tabs;
