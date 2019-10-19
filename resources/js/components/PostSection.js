import React, { Component } from 'react';
import { withrouter } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import styled from 'styled-components';
const Section = styled.div`
	display: flex;
	justify-content: space-around;
`;
export default class PostSection extends Component {
	state = {
		questions: []
	};

	posts = () => {
		axios
			.get('/api/questions', {
				accept: 'application/json'
			})
			.then(({ data }) => {
				this.setState({ questions: data });
			})
			.catch((e) => console.log(e));
	};
	componentDidMount() {
		this.posts();
	}
	render() {
		console.log(this.state.questions);
		return <Section>{this.state.questions.map(({ id, ...attrs }) => <Card key={id} {...attrs} />)}</Section>;
	}
}
