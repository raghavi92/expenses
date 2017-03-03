import {combineReducers} from 'redux';
import categories from './categoryReducer.js';
import expense from './expenseReducer';

const root = combineReducers({
categories,
expense
});

export default root;
