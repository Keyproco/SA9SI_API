import React, { Component } from 'react';
import { withrouter } from 'react-router-dom';
import Card from '../components/Card';
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
		return <div>{this.state.questions.map(({ id, ...attrs }) => <Card key={id} {...attrs} />)}</div>;
	}
}
