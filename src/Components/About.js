import React from 'react';
import styled from 'styled-components';
import about from '../asset/biglogo.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px;
  padding-top: 70px;
  width: 100%;
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
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
  width: 550px;
`;

export default () => (
  <Wrapper>
    <Img src={about} />
    <Content>
      <Header>다리 기획</Header>
      <Mideader>박현우</Mideader>
      <Text>
        다리기획은 전략적 PPL / 컨텐츠 컨설팅 대행사로서 광고주 분들께{' '}
      </Text>

      <Text>다(多)리(利), 여러 이로움을 약속드리겠습니다.</Text>

      <Text>첫째, 합리적인 비용으로서 광고주분들을 만족시킬 것 이며</Text>

      <Text>
        둘째, 광고주분들과 적절한 컨텐츠와의 연결을 하는 다리 역할이 되어
        만족스러운 결과를 도출해 내겠습니다.
      </Text>

      <Text>
        그리고 마지막으로 철저한 사후관리를 통해 처음부터 끝까지 광고주분들께서
        만족하실 수 있는 서비스를
      </Text>

      <Text>제공하겠습니다.</Text>
    </Content>
  </Wrapper>
);
