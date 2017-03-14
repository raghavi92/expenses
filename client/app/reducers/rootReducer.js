import {combineReducers} from 'redux';
import categories from './categoryReducer.js';
import expense from './expenseReducer';
import expenseList from './expenseListReducer';

const root = combineReducers({
categories,
expense,
expenseList
});

export default root;
