import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Title = styled.h2`
	color: white;
	font-weight: 600;
	font-size: 2.5rem;
`;
const SubTitle = styled.h2`
	color: white;
	font-weight: 400;
	font-size: 12px;
`;
const HeaderImage = styled.section`
	background-image: url(/images/blue-header.svg);
	background-size: cover;
	background-repeat: no-repeat;
	// background-color: #f6b93b;
`;
const CollabTeam = styled.div`
	height: 600px;
	background-image: url(/images/collaboration.svg);
	background-size: 80%;
	background-repeat: no-repeat;
`;

function Header() {
	return (
		<div>
			<HeaderImage className="hero-body">
				<div style={{ marginTop: 250 }} className="columns">
					<div className="column is-one-fifth" />
					<div className="column is-two-fifths">
						<Title> Sa9si, la plateforme qui nous réunit tous </Title>
						<SubTitle>
							When you need a kickstart in your business and you have no time for coding for your website,
							xPider will take that job for you and will build a great looking website in minutes.
						</SubTitle>
						<Link to="/connecter">Se Connecter</Link>
					</div>
					<div className="column is-two-fifths">
						<CollabTeam />
					</div>
				</div>
			</HeaderImage>
		</div>
	);
}
export default Header;
