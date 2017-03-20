import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import client from '../client';
import moment from 'moment';
import {setData} from '../actionCreators';
import _ from 'lodash';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setData}, dispatch);
}
const mapStateToProps = (state) => {
  const getFromDate = () => {
    if(state.expenseList.currentSelection === 'daily') {
      return state.expenseList.dailyRange.formattedFromDate();
    } else if(state.expenseList.currentSelection === 'monthly') {
      return state.expenseList.weeklyRange.formattedFromDate();
    }
    return state.expenseList.monthlyRange.formattedFromDate();
  }
  const getToDate = () => {
    if(state.expenseList.currentSelection === 'daily') {
      return state.expenseList.dailyRange.formattedToDate();
    } else if(state.expenseList.currentSelection === 'monthly') {
      return state.expenseList.weeklyRange.formattedToDate();
    }
    return state.expenseList.monthlyRange.formattedToDate();
  }
  return {
    data: state.expenseList.data,
    fromDate: getFromDate(),
    toDate: getToDate()
  };
};
class PanelBody extends React.Component {
  reloadData() {
    const self = this;
    const {fromDate, toDate} = {...this.props};
    client(`expense?groupBy=category&fromDate=${fromDate}&toDate=${toDate}`).then(response => {
      self.props.setData(response.entity);
    });
  }
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps.fromDate, this.props.fromDate) || !_.isEqual(nextProps.toDate, this.props.toDate);
  }
  componentDidMount() {
    this.reloadData.call(this);
  }
  componentDidUpdate() {
    this.reloadData.call(this);
  }
  render() {
    const rows = _.map(this.props.data, (row, index) => {
      return (
        <tr key={index}>
          <td>{row.categoryName}</td>
          <td>{row.amount}</td>
        </tr>
      )
    })
    return (
      <div className="panel-body">
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th>Category</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
PanelBody = connect(mapStateToProps, mapDispatchToProps)(PanelBody);
export default PanelBody;
