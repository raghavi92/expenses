import React from 'react';
import { Creatable } from 'react-select';
import client from '../client';
import {connect} from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import Notifications, {notify} from 'react-notify-toast';
import {history} from '../index.js';
import moment from 'moment';
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

const addCategory = (category) => {
  return {
    type: 'ADD_CATEGORY',
    category
  };
}

const setSelectedCategory = (field) => {
  return {
    type: 'SET_CATEGORY',
    field
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadCategories, setSelectedCategory, addCategory}, dispatch);
};
class Expense extends React.Component {
  componentDidMount() {
    client('category').then((response) => {
      this.props.loadCategories(response.entity);
    })
  }
  setSelected(val) {
    this.props.setSelectedCategory({category_id: val});
  }
  createNewCategory(category) {
    const self = this;
    client({
      path: 'category',
      entity: _.pick(category, 'name')
    }).then((response) => {
      self.props.addCategory(response.entity);
      self.setSelected(_.join(_.concat(self.props.expense.category_id.split(','), response.entity._id), ","));
    })
  }
  createExpense() {
    client({
      path: 'expense',
      entity: {...this.props.expense, date: moment().format("DD/MM/YYYY")}
    }).then((response) => {
      notify.show("Success!","success");
    }, (error) => {
      notify.show(error.entity.message,"error");
    })
  }
  setFields(evt) {
    let field = {};
    field[evt.target.id] = evt.target.value;
    this.props.setSelectedCategory(field);
  }
  goBack() {
    history.goBack();
  }
  render() {
    const self = this;
    return (
      <div className='container'>
        <Notifications />
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
            labelKey='name'
            valueKey='_id'
            value={this.props.expense.category_id}
            placeholder="Select Categories"
            multi={true}
            simpleValue={true}
            className="mdl-textfield mdl-js-textfield"
            options={self.props.all_categories.items}
            onNewOptionClick={self.createNewCategory.bind(self)}
            onChange={self.setSelected.bind(self)} />
          <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows= "3" id="notes"
            onChange={self.setFields.bind(self)} />
            <label className="mdl-textfield__label" htmlFor="notes">Additional Notes</label>
          </div>
          <div className="mdl-card__actions" >
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={self.createExpense.bind(self)}>
              Submit
            </a>
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={self.goBack.bind(self)}>
              Cancel
            </a>
          </div>
        </div>
      </div>);
  }
}
const ExpenseComponent = connect(mapStateToProps, mapDispatchToProps)(Expense);
export default ExpenseComponent;
