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
		let token =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczMDBmMGVhMDY5NmVkOTYyZDA5YzJhNDFjOTRjOWU0YWFlMzM0ZDNkZGJkZmNmNGVhYzQ1Y2MzZDUzYmRhNDM4ZmY3Y2Y0M2U5ZmU1MjFmIn0.eyJhdWQiOiIxIiwianRpIjoiNzMwMGYwZWEwNjk2ZWQ5NjJkMDljMmE0MWM5NGM5ZTRhYWUzMzRkM2RkYmRmY2Y0ZWFjNDVjYzNkNTNiZGE0MzhmZjdjZjQzZTlmZTUyMWYiLCJpYXQiOjE1NzE0ODY2NTgsIm5iZiI6MTU3MTQ4NjY1OCwiZXhwIjoxNjAzMTA5MDU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.U-pn2yZZNdL6iS67JA4ZJY5O-gi-4_ktruKtmzAh4z3YFj_2qxM_auEosOAzoW8ylIC-KxhLcRC9wwLa26L6wFzEQVBBfQMAVhLtPqqJ-7eUjgVISiX6hG4UMRrwotM2_K1ImWEeaFLmiJqGXXmWyOurh-JkeP-PnBJPv0PBcCyh0whdvhGt6_p7SVi1iVBXS8iSktdP5IqHsncOMhM6kQDb3ubg6l3oqExZWTgnar3tsSTRTknPtnkDurkdGn9bnXfpr3j_HsPmkQJX3llAMcToW1VIq6LLMaZF7qDd39jSXd-5fCFR-RKISmHdb5oEUO174sd2rfHkH4-ZnvQ1IW6ddqZa_ajByqOtyON06ocOuVf6-GRWev0Iva7mu-HECNfZQGGhub_q3YMbHheA8jM-Yv36giko3Sfjj87Pp-ySSogk6ivSop3FHZHpLeMX3tXS15hoZojLT_uu7_8l63HYg9hZ8vVMNZBT-KlM5uAadeez3QdVo585YFxnuoV9WYgPfcF3V-QjhliKWPugGqcPVP2-FBk0bOwI7OBUZ-zzUTYBMnnpSOxrxt47Y-oi5cHmN7VmaX1NlmyCzGsXfTpCrDgtro1pbLBO-TVsUcx0WKIJHZSQkBqH7iDoaF_gRd50Pxnf-CaWMt6eTtXafDe5FfiTRzJYztuj6UMGnxk';
		axios
			.get('http://localhost:8080/api/user', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
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
