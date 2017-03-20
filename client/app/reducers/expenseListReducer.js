import moment from 'moment';
import CustomDate from '../utils/customDate';

const defaultState = {
  currentSelection: 'daily',
  dailyRange: new CustomDate("daily"),
  weeklyRange: new CustomDate("weekly"),
  monthlyRange: new CustomDate("monthly"),
  date: []
}
const expenseList = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_INTERVAL':
      return {...state, currentSelection: action.interval};
    case 'NAVIGATE_DATES':
      let newRange;
      const currentSelection = state.currentSelection;
      if(currentSelection === 'daily' && action.duration === 'previous') {
        newRange = state.dailyRange.oneDayBack();
        return {...state, dailyRange: newRange};
      } else if(currentSelection === 'daily' && action.duration === 'next') {
        newRange = state.dailyRange.oneDayForward();
        return {...state, dailyRange: newRange};
      } else if(currentSelection === 'weekly' && action.duration === 'previous') {
        newRange = state.weeklyRange.oneWeekBack();
        return {...state, weeklyRange: newRange};
      } else if(currentSelection === 'weekly' && action.duration === 'next') {
        newRange = state.weeklyRange.oneWeekForward();
        return {...state, weeklyRange: newRange};
      } else if(currentSelection === 'monthly' && action.duration === 'previous') {
        newRange = state.monthlyRange.oneMonthBack();
        return {...state, monthlyRange: newRange};
      } else if(currentSelection === 'monthly' && action.duration === 'next') {
        newRange = state.monthlyRange.oneMonthForward();
        return {...state, monthlyRange: newRange};
      }
    case 'SET_DATA':
      return {...state, data: action.data};
    default:
    return state;
  }
}
export default expenseList;
