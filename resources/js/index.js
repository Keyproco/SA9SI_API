import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Axios from "axios";
import styled from 'styled-components';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';
const loginPage = () => {
	return <div> Login page </div>;
};
export default class App extends Component {
	componentWillMount() {}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Header} />
					<Route exact path="/connecter" component={loginPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

if (document.getElementById('App')) {
	ReactDOM.render(<App />, document.getElementById('App'));
}
