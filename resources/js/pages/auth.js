import React, { Component } from 'react';
import Cover from '../components/LoginCover';
import LoginForm from '../components/LoginForm';
const Auth = ({ history }) => (
	<div className="columns">
		<div className="column">
			<Cover />
		</div>
		<div className="column">
			Hello from Auth Page
			<LoginForm />
		</div>
	</div>
);
export default Auth;
