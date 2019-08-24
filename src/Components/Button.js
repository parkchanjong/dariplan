import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  width: 95%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
  text-align: center;
  padding: 7px 5px;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => (
  <Container onClick={onClick}>{text}</Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
