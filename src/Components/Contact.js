import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Input from './Input';
import Button from './Button';
import TextareaAutosize from 'react-autosize-textarea';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px;
  padding-top: 70px;
  width: 100%;
  background-color: #f1f2f6;
  margin-top: 50px;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  width: 80%;
  max-width: 450px;
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

const Textarea = styled(TextareaAutosize)`
  background-color: ${props => props.theme.bgColor};
  border-radius: ${props => props.theme.borderRadius};
  border: ${props => props.theme.boxBorder};
  border: 0;
  border: ${props => props.theme.boxBorder};
  width: 100%;
  resize: none;
  font-size: 12px;
  height: 35px;
  padding: 0px 15px;
  &:focus {
    outline: none;
  }
`;

export default () => (
  <Wrapper>
    <Form>
      <form>
        <Input placeholder={'Email'} />
        <Input placeholder={'Title'} />
        <Textarea placeholder={'Content'} />
        <Button text={'Send'} />
      </form>
    </Form>
    <Map />
  </Wrapper>
);
