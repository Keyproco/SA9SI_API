import React, { Component } from 'react';
import PostSection from '../components/PostSection';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
const SectionBackground = styled.div`
	background: #f6f8f9;
	height: 800px;
`;

import axios from 'axios';

export default class Welcome extends Component {
	state = {
		user: {
			name: ''
		}
	};
	componentDidMount() {
		axios
			.get('http://localhost:8080/api/user', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					withCredentials: false
				}
			})
			.then((r) => {
				this.setState({
					user: {
						name: r.data.name
					}
				});
			})
			.catch((e) => console.log(e));
	}
	render() {
		console.log(this.state.user.name);
		return (
			<div>
				<Navbar user={this.state.user.name} />
				<SectionBackground className="columns">
					<div class="column is-1" />
					<div className="column">
						<PostSection />
					</div>
					<div class="column is-2">is-one-fifth</div>
				</SectionBackground>
			</div>
		);
	}
}

// const Welcome = ({ history }) => (
// 	<div>
// 		<Navbar user={user} />
// 		<SectionBackground className="columns">
// 			<div class="column is-1" />
// 			<div className="column">
// 				<PostSection />
// 			</div>
// 			<div class="column is-2">is-one-fifth</div>
// 		</SectionBackground>
// 	</div>
// );
// export default Welcome;
