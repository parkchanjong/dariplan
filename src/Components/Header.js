import React from 'react';
import styled from 'styled-components';
import { Logo } from './Icons';

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: left;
`;

const HeaderColumn = styled.div`
  width: 5%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
`;

export default () => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Logo />
        </HeaderColumn>
        <HeaderColumn>Projects</HeaderColumn>
        <HeaderColumn>About</HeaderColumn>
        <HeaderColumn>Contact</HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
