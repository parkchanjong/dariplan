import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Post = styled.div`
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: ${props => props.theme.bgColor};
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Img = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  height: 200px;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const Title = styled.div`
  font-size: 50px;
  color: black;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: black;
`;

const Projects = ({ title, subtitle, picture }) => (
  <Post>
    <Img src={picture} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Post>
);

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Projects;
