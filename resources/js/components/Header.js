import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`color: red;`;
const HeaderImage = styled.section`
	height: 800px;
	background-image: url(/images/blue-header.svg);
	background-size: 100%;
	background-repeat: no-repeat;
`;

function Header() {
	return (
		<div>
			<HeaderImage className="hero">
				<div className="hero-body">
					<div className="container">
						<Title> Hello from styled components </Title>
						<h2 className="subtitle">Hero subtitle</h2>
					</div>
				</div>
			</HeaderImage>
			{/* <section className="hero">
				<div className="hero-body">
					<div className="container">
						<Title> Hello from styled components </Title>
						<h2 className="subtitle">Hero subtitle</h2>
					</div>
				</div>
			</section> */}
		</div>
	);
}
export default Header;
