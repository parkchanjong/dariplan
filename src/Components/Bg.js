import React from 'react';
import styled from 'styled-components';
import bg from '../asset/bg.jpg';

const Content = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 900px;
  left: 0;
  top: 0;
  display: flex;
  margin-bottom: 50px;
  z-index: -1;
`;

export default () => <Content />;
