import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import LandingPage from './LandingPage';
import Documentation from './Documentation';

function Main() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/home' component={LandingPage} />
      <Route path='/app' component={App} />
      <Route path='/doc' component={Documentation} />
    </Switch>
    </Router>
  );
}

export default Main;