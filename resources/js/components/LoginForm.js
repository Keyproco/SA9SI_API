import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
class LoginForm extends Component {
	state = {
		username: '',
		password: ''
	};
	handlePassword = (e) => {
		this.setState({
			password: e.target.value
		});
	};
	handleEmail = (e) => {
		this.setState({
			username: e.target.value
		});
	};
	login = () => {
		this.props.history.push('/welcome');
	};
	render() {
		return (
			<div className="field">
				<label className="label">Mail</label>
				<div className="control">
					<input
						className="input"
						type="email"
						onChange={this.handleEmail}
						placeholder="keyproco@laravel.com"
					/>
				</div>
				<div className="field">
					<label className="label">Password</label>
					<div className="control">
						<input className="input" type="password" onChange={this.handlePassword} />
					</div>
				</div>
				<button onClick={this.login}> Login </button>
			</div>
		);
	}
}

export default withRouter(LoginForm);
