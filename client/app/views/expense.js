import React from 'react';
import { Creatable } from 'react-select';
import client from '../client';
import {connect} from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (categories) => {
      dispatch({
        type: 'LOAD_CATOGORIES',
        categories
      });
    }
  }
};
class Expense extends React.Component {
  componentDidMount() {
    client('http://localhost:3000/category').then((response) => {
      this.props.loadCategories(response.entity);
    })
  }
  getOptions() {
    return _.map(this.props.categories.items, (item) => {
      return {
        value: item._id,
        label: item.name
      };
    });
  }
  render() {
    const self = this;
    return (
      <div className='container'>
        <div className="demo-card-square mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h5 className="mdl-card__title-text">Record your expense</h5>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="title" />
            <label className="mdl-textfield__label" htmlFor="title">Title</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="number" id="amount" />
            <label className="mdl-textfield__label" htmlFor="amount">Amount</label>
          </div>
          <Creatable className="mdl-textfield mdl-js-textfield" name="form-field-name" options={self.getOptions.call(self)} />
          <div className="mdl-card__actions">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Submit
            </a>
          </div>
        </div>
      </div>);
  }
}
const ExpenseComponent = connect(mapStateToProps, mapDispatchToProps)(Expense);
export default ExpenseComponent;
