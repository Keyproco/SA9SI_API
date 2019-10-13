import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	background: #aa076b; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #61045f, #aa076b); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#61045f,
		#aa076b
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	height: 100vh;
`;

const Title = styled.h2`
	color: white;
	font-size: 3em;
	font-weight: 600;
`;
function Cover() {
	return (
		<div>
			<Background>
				<Title> Se connecter </Title>
			</Background>
		</div>
	);
}
export default Cover;
