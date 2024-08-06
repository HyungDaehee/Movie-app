import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const HomeNavbar = () => {
  return (
   
    <Navbar expand="lg" className="nav">
    <Container>
      <Navbar.Brand className='title' href="/">Hyung`s Movie</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='a' href="/now">Now</Nav.Link>
          <Nav.Link className='a'href="/popular">Popular</Nav.Link>
          <Nav.Link className='a' href="/toprated">TopRate</Nav.Link>
          <Nav.Link className='a' href="/Search">Search </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default  HomeNavbar ;