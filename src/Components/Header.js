import React from 'react';
import styled from 'styled-components';
import { Logo } from './Icons';
import { Link } from 'react-router-dom';

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
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 5%;
  text-align: center;

  &:first-child {
    margin-right: auto;
    text-align: left;
    margin-left: 30px;
  }
  &:last-child {
    margin-right: 15px;
  }
  @media only screen and (max-width: 1200px) {
    width: 15%;
  }
`;

export default () => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/#">
            <Logo />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/Projects">Projects</Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/About">About</Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/Contact">Contact</Link>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
