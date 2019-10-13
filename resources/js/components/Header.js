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
	height: 1000px;
	background-image: url(/images/blue-header.svg);
	background-size: cover;
	background-repeat: no-repeat;
`;
const CollabTeam = styled.div`
	height: 600px;
	background-image: url(/images/collaboration.svg);
	background-size: 100%;
	background-repeat: no-repeat;
`;

function Header() {
	return (
		<div>
			<HeaderImage>
				<div className="hero-body">
					<div className="container">
						<div style={{ marginTop: 250 }} className="columns">
							<div className="column is-half">
								<Title> Sa9si, la plateforme qui nous réunit tous </Title>
								<SubTitle>
									When you need a kickstart in your business and you have no time for coding for your
									website, xPider will take that job for you and will build a great looking website in
									minutes.
								</SubTitle>
								<Link to="/connecter">Se Connecter</Link>
							</div>
							<div className="column is-half">
								<CollabTeam />
							</div>
						</div>
					</div>
				</div>
			</HeaderImage>
		</div>
	);
}
export default Header;
