import moment from 'moment';
const defaultState = {
  currentSelection: 'daily',
  daily: {
    fromDate: moment(new Date()),
    toDate: new Date(),
    step: 0
  },
  weekly: {
    fromDate: new Date(),
    toDate: new Date(),
    step:0
  },
  monthly: {
    fromDate: new Date(),
    toDate: new Date(),
    step:0
  }
}
const expenseList = (state = defaultState, action) => {
  switch(action.type) {
    case 'SELECT_TYPE':

    default:
    return state;
  }
}
export default expenseList;
