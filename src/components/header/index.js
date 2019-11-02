import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {useHistory, } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

function Appheader() {
  const history = useHistory()
  return (
    <div className="header">
      <Navbar bg="primary" variant="dark">
        <LinkContainer to="/home"><Navbar.Brand>Navbar</Navbar.Brand></LinkContainer>
        <Nav className="mr-auto" activeKey={history.location.pathname}>
          <LinkContainer to="/home"><Nav.Link href="/home">Home</Nav.Link></LinkContainer>
          <LinkContainer to="/search"><Nav.Link href="/search">Search</Nav.Link></LinkContainer>
          <LinkContainer to="/landing"><Nav.Link href="/landing">Landing</Nav.Link></LinkContainer>
        </Nav>
      </Navbar>
  
    </div>
  );
}

export default Appheader;
