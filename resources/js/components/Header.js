import React, { Component } from 'react';
import styled from 'styled-components';
// import Collboration from '../../../public/images/collaboration.svg';
const Title = styled.h2`color: red;`;
const HeaderImage = styled.section`
	height: 800px;
	background-image: url(/images/blue-header.svg);
	background-size: 100%;
	background-repeat: no-repeat;
`;
const CollabTeam = styled.img`
	height: 400px;

	background-size: 100%;
	background-repeat: no-repeat;
`;

function Header() {
	return (
		<div>
			<HeaderImage>
				<div className="hero-body">
					<div className="container">
						<Title> Hello from styled components </Title>
						<h2 className="subtitle">Hero subtitle</h2>
						<CollabTeam />
						{/* <img src={Collboration} /> */}
					</div>
				</div>
			</HeaderImage>
		</div>
	);
}
export default Header;
