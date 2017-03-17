import {render} from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import root from './reducers/rootReducer.js';
import Dashboard from './views/dashboard';
import Expense from './views/expense';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

document.addEventListener('DOMContentLoaded', () => {
	let store = createStore(root);

	var mytag = document.getElementById("app");
	render(
		<Provider store={store}>
		  <Router history={history}>
				<div>
					<Route exact path="/" component={Dashboard} />
					<Route path="/expense" component={Expense} />
				</div>
		  </Router>
		</Provider>,
		mytag);
});

export {history};
