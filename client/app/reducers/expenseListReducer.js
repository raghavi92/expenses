import moment from 'moment';
import CustomDate from '../utils/customDate';

const defaultState = {
  currentSelection: 'daily',
  daily: {
    dateRange: new CustomDate("daily")
  },
  weekly: {
    dateRange: new CustomDate("weekly")
  },
  monthly: {
    dateRange: new CustomDate("monthly")
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
