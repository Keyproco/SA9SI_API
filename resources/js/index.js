import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandPage from './components/Header';
import Welcome from './pages/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import '../sass/app.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

class App extends Component {
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
export default hot(App);
if (document.getElementById('App')) {
	ReactDOM.render(
		<Provider store={createStore(reducers, {})}>
			<App />
		</Provider>,
		document.getElementById('App')
	);
}

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept();
}
