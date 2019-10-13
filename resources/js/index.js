import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandPage from './components/Header';
import Welcome from './pages/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth';
export default class App extends Component {
	componentWillMount() {}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LandPage} />
					<Route exact path="/connecter" component={Auth} />
					<Route exact path="/welcome" component={Welcome} />
				</Switch>
			</BrowserRouter>
		);
	}
}

if (document.getElementById('App')) {
	ReactDOM.render(<App />, document.getElementById('App'));
}
