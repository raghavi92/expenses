import {render} from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import root from './reducers/rootReducer.js';
import Expense from './views/expense.js';

document.addEventListener('DOMContentLoaded', () => {
	let store = createStore(root)
	var mytag = document.getElementById("app");
	render(<Expense />, mytag);
});
