import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state) => {
  return {
    data: state.expenseList.data
  };
};
class PanelBody extends React.Component {
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
PanelBody = connect(mapStateToProps)(PanelBody);
export default PanelBody;
