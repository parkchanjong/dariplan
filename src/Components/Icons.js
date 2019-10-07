import React from 'react';
import styled from 'styled-components';
import logo from '../asset/biglogo.png';

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export const Logo = () => <Img src={logo} />;
