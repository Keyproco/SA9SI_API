import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Axios from "axios";
import styled from 'styled-components';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
export default class App extends Component {
	componentWillMount() {}
	render() {
		return (
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
	}
}

if (document.getElementById('App')) {
	ReactDOM.render(<App />, document.getElementById('App'));
}
