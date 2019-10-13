import React, { Component } from 'react';
import PostSection from '../components/PostSection';
import styled from 'styled-components';

const SectionBackground = styled.div`
	background: #f6f8f9;
	height: 800px;
`;
const Welcome = ({ history }) => (
	<SectionBackground>
		<div className="columns">
			<div style={{ backgroundColor: 'red' }} className="column is-one-fifth">
				hello hello
			</div>
			<div className="column is-four-fifths">
				<PostSection />
			</div>
		</div>
	</SectionBackground>
);
export default Welcome;
