import _ from 'lodash';

const defaultState = {
  category_id: "",
  title: "",
  notes: "",
  amount: ''
}
const expense = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {...state,
        category_id: (typeof action.field.category_id != 'undefined') ? action.field.category_id : state.category_id,
        title: (typeof action.field.title != 'undefined')  ? action.field.title : state.title,
        amount: (typeof action.field.amount != 'undefined') ? action.field.amount : state.amount,
        notes: (typeof action.field.notes != 'undefined') ? action.field.notes : state.notes };
    break;
  }
  return state;
}
export default expense;
