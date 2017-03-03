import _ from 'lodash';

const defaultState = {
  categories: "",
  title: "",
  notes: "",
  amount: ''
}
const expense = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {...state,
        categories: (typeof action.field.categories != 'undefined') ? action.field.categories : state.categories,
        title: (typeof action.field.title != 'undefined')  ? action.field.title : state.title,
        amount: (typeof action.field.amount != 'undefined') ? action.field.amount : state.amount,
        notes: (typeof action.field.notes != 'undefined') ? action.field.notes : state.notes };
    break;
  }
  return state;
}
export default expense;
