import React from 'react';
import styled from 'styled-components';
import about from '../asset/about.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px;
  padding-top: 70px;
  width: 100%;
`;

const Contact = styled.div`
  padding: 300px;
  background-image: url(${about});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  margin: 100px;
  text-align: center;
`;

const Header = styled.div`
  font-size: 40px;
  font-weight: 400;
`;

const Mideader = styled.div`
  margin: 30px;
  font-size: 30px;
  font-weight: 100;
`;

const Text = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 60;
  width: 500px;
`;

export default () => (
  <Wrapper>
    <Contact />
    <Content>
      <Header>about</Header>
      <Mideader>park hwdfsf</Mideader>
      <Text>
        contentcontentconte tentcontentcontonte tentcontentonte tentcontentonte
        tentcontentonte tentcontentecontentcontentconte tentcontentcontonte
        tentcontentonte tentcontentonte tentcontentonte
        tentcontentecontentcontentconte tentcontentcontonte tentcontentonte
        tentcontentonte tentcontentonte tentcontentecontentcontentconte
        tentcontentcontonte tentcontentonte tentcontentonte tentcontentonte
        tentcontentecontentcontentconte tentcontentcontonte tentcontentonte
        tentcontentonte tentcontentonte tentcontentecontentcontentconte
        tentcontentcontonte tentcontentonte tentcontentonte tentcontentonte
        tentcontentecontentcontentconte tentcontentcontonte tentcontentonte
        tentcontentonte tentcontentonte tentcontentecontentcontentconte
        tentcontentcontonte tentcontentonte tentcontentonte tentcontentonte
        tentcontentecontentcontentconte tentcontentcontonte tentcontentonte
        tentcontentonte tentcontentonte tentcontentecontentcontentconte
        tentcontentcontonte tentcontentonte tentcontentonte tentcontentonte
        tentcontentecontentcontentconte tentcontentcontonte tentcontentonte
        tentcontentonte tentcontentonte tentcontente
      </Text>
    </Content>
  </Wrapper>
);
