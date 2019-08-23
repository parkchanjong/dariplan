import React, { Component } from 'react';
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
  width: 80%;
`;

class Mainpage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Dari Plan</title>
        </Helmet>
        <Header />
        <Bg />
        <Wrapper>
          {foodILike.map(food => (
            <Projects
              key={food.id}
              id={food.id}
              name={food.name}
              image={food.image}
            />
          ))}
        </Wrapper>
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Mainpage;
