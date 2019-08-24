import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Input from './Input';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px;
  padding-top: 70px;
  width: 100%;
  background-color: #f1f2f6;
  margin-top: 100px;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 20%;
  max-width: 350px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin: 100px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default () => (
  <Wrapper>
    <Form>
      <form>
        <Input placeholder={'First name'} />
        <Input placeholder={'Last name'} />
        <Input placeholder={'Username'} />
        <Input placeholder={'Bio'} />
        <Button text={'Sign up'} />
      </form>
    </Form>
    <Map />
  </Wrapper>
);
