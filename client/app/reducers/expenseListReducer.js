import moment from 'moment';
const defaultState = {
  currentSelection: 'daily',
  daily: {
    fromDate: moment(new Date()),
    toDate: new Date()
  },
  weekly: {
    fromDate: new Date(),
    toDate: new Date()
  },
  monthly: {
    fromDate: new Date(),
    toDate: new Date()
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
