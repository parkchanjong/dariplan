import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Mainpage from './main';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-119130828-2');

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Mainpage />
      </>
    </ThemeProvider>
  );
};
