import React from 'react';
import styled from 'styled-components';
import bg from '../asset/bg.jpg';
import { Helmet } from 'react-helmet';

const Content = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 900px;
  left: 0;
  top: 0;
  display: flex;
  z-index: -1;
`;

const Main = styled.div`
  position: absolute;
  text-align: center;
  font-family: 'Tangerine', serif;
  font-size: 180px;
  text-shadow: 4px 4px 4px #aaa;
  top: 300px;
  width: 100%;
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>Dari Plan</title>
      </Helmet>
      <Content />
      <Main>Dari Plan</Main>
    </>
  );
};
