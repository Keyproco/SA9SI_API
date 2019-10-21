import React, { Component } from 'react';
import PostSection from '../components/PostSection';
import styled from 'styled-components';
const SectionBackground = styled.div`
	background: #f6f8f9;
	height: 800px;
`;
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

class Welcome extends Component {
	// componentDidMount() {
	// 	axios
	// 		.get('http://localhost:8080/api/user', {
	// 			headers: {
	// 				Accept: 'application/json',
	// 				'Content-Type': 'application/json',
	// 				Authorization: 'Bearer ' + localStorage.getItem('token'),
	// 				withCredentials: false
	// 			}
	// 		})
	// 		.then((r) => {
	// 			this.setState({
	// 				user: {
	// 					name: r.data.name
	// 				}
	// 			});
	// 		})
	// 		.catch((e) => console.log(e));
	// }
	render() {
		return (
			<div>
				<Navbar auth={this.props.auth} />
				<SectionBackground className="columns">
					<div className="column is-1" />
					<div className="column">
						<PostSection />
					</div>
					<div className="column is-2">is-one-fifth</div>
				</SectionBackground>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(Welcome);
