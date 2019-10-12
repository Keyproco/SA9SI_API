import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.h2`
color: red;
`
function Header() {
    return (
      <div>
        <Title> Hello from styled components </Title>
        <a className="button is-success">Success</a>
      </div>
    );
  }
export default Header;