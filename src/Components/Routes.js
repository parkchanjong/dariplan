import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bg from './Bg';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Bg} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Contact" component={Contact} />
  </Switch>
);

export default AppRouter;
