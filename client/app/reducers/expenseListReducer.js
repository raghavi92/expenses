import moment from 'moment';
const defaultState = {
  currentSelection: 'daily',
  daily: {
    fromDate: moment(),
    toDate: moment()
  },
  weekly: {
    fromDate: moment().subtract(1, "week"),
    toDate: moment()
  },
  monthly: {
    fromDate: moment().subtract(1, "month"),
    toDate: moment()
  }
}
const expenseList = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_INTERVAL':
      return {...state, currentSelection: action.interval};
    default:
    return state;
  }
}
export default expenseList;
