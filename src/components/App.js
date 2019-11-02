import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Appheader from './header';
import Appcontent from './content';
function App() {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/home" />;
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Appheader />
          <Appcontent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
