import _ from 'lodash';

const defaultState = {
  categories: "",
  title: "",
  notes: "",
  amount: ''
}
const expense = (state = [], action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {...state,
        categories: action.field.categories || state.categories,
        title: action.field.title || state.title,
        amount: action.field.amount || state.amount,
        notes: action.field.notes || state.notes };
    break;
  }
  return state;
}
export default expense;
