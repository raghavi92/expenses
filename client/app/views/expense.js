import React from 'react';
import { Creatable } from 'react-select';
import client from '../client';
import {connect} from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    all_categories: state.categories,
    expense: state.expense
  };
};

const loadCategories = (categories) => {
  return {
    type: 'LOAD_CATOGORIES',
    categories
  };
}
const setSelectedCategory = (field) => {
  return {
    type: 'SET_CATEGORY',
    field
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadCategories, setSelectedCategory}, dispatch);
};
class Expense extends React.Component {
  componentDidMount() {
    client('category').then((response) => {
      this.props.loadCategories(response.entity);
    })
  }
  getOptions() {
    return _.map(this.props.all_categories.items, (item) => {
      return {
        value: item._id,
        label: item.name
      };
    });
  }
  setSelected(val) {
    this.props.setSelectedCategory({categories: val});
  }
  createExpense() {
    client({
      path: 'expense',
      entity: {...this.props.expense, date: new Date()}
    }).then((response) => {
      console.log(response);
    })
  }
  setFields(evt) {
    let field = {};
    field[evt.target.id] = evt.target.value;
    this.props.setSelectedCategory(field);
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
            <input className="mdl-textfield__input" type="text" id="title"
            onChange={self.setFields.bind(self)} />
            <label className="mdl-textfield__label" htmlFor="title">Title</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="number" id="amount"
            onChange={self.setFields.bind(self)} />
            <label className="mdl-textfield__label" htmlFor="amount">Amount</label>
          </div>
          <Creatable
            value={this.props.expense.categories}
            placeholder="Select Categories"
            multi={true}
            simpleValue={true}
            className="mdl-textfield mdl-js-textfield"
            name="form-field-name"
            options={self.getOptions.call(self)}
            onChange={self.setSelected.bind(self)} />
          <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows= "3" id="notes"
            onChange={self.setFields.bind(self)} />
            <label className="mdl-textfield__label" htmlFor="notes">Additional Notes</label>
          </div>
          <div className="mdl-card__actions" onClick={self.createExpense.bind(self)}>
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
