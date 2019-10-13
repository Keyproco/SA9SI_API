import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './pages/auth';
export default class App extends Component {
	componentWillMount() {}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/connecter" component={Auth} />
				</Switch>
			</BrowserRouter>
		);
	}
}

if (document.getElementById('App')) {
	ReactDOM.render(<App />, document.getElementById('App'));
}
