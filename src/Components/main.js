import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import Bg from './Bg';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import foodILike from './file';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 100%;
`;

export default () => (
  <>
    <Helmet>
      <title>Dari Plan</title>
    </Helmet>
    <Header />
    <Bg />
    <Wrapper>
      {foodILike.map(movie => (
        <Projects
          key={movie.id}
          title={movie.title}
          subtitle={movie.subtitle}
          picture={movie.image}
        />
      ))}
    </Wrapper>
    <About />
    <Contact />
    <Footer />
  </>
);
