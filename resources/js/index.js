import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Axios from "axios";
import styled from 'styled-components';
import Header from './components/Header';
export default class App extends Component {
	componentWillMount() {}
	render() {
		return <Header />;
	}
}

if (document.getElementById('App')) {
	ReactDOM.render(<App />, document.getElementById('App'));
}
