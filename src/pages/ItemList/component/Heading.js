import React from 'react';
import styled from 'styled-components';

export const Heading = () => {

  return (
    <Header>
      <h1>ARDOG</h1>
    </Header>
  );
};

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
  
  h1 {
    font-size: 40px;
  }
`;