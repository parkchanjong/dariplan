import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';
import ProjectFile from './ProjectFile';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 130px;
  width: 100%;
  margin-top: 80px;
`;

export default () => (
  <>
    <Wrapper>
      {ProjectFile.map(hisroty => (
        <Projects
          key={hisroty.id}
          title={hisroty.title}
          subtitle={hisroty.subtitle}
          picture={hisroty.image}
        />
      ))}
    </Wrapper>
  </>
);
