import React, { Component } from 'react';
import Cover from '../components/LoginCover';
import axios from 'axios';
export default class Auth extends Component {
	state = {
		username: '',
		password: ''
	};
	constructor(props) {
		super(props);
	}
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
		axios.post('/api/login', this.state).then((r) => console.log(r)).catch((e) => console.log(e));
	};
	render() {
		console.log(this.state);
		return (
			<div className="columns">
				<div className="column">
					<Cover />
				</div>
				<div className="column">
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
				</div>
			</div>
		);
	}
}
