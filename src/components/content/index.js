import React from 'react';
import {Switch, Route } from 'react-router-dom';
import HomePage from '../component/home';

function Appcontent() {
  return (
    <div className="content">
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    </div>
  );
}

export default Appcontent;
