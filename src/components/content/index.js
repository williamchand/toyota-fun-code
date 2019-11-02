import React from 'react';
import {Switch, Route } from 'react-router-dom';
import SearchPage from '../component/search';
import LandingPage from '../component/landing';
import HomePage from '../component/home';

function Appcontent() {
  return (
    <div className="content">
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/landing">
        <LandingPage />
      </Route>
    </Switch>
    </div>
  );
}

export default Appcontent;
