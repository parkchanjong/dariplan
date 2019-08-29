import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Routes from './Routes';
import ReactGA from 'react-ga';
import { HashRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

ReactGA.initialize('UA-119130828-2');

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <Header />
            <Wrapper>
              <Routes />
            </Wrapper>
            <Footer />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};
