import {render} from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import root from './reducers/rootReducer.js';
import Expense from './views/expense.js';
import Dashboard from './views/dashboard';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
	let store = createStore(root);

	var mytag = document.getElementById("app");
	render(
		<Provider store={store}>
		  <BrowserRouter>
			  <Route path="/" component={Dashboard} />
		  </BrowserRouter>
		</Provider>,
		mytag);
});
