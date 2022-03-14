import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button,Form, Nav,Navbar,Container,NavDropdown,FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {

    
  return(
      <div className='Container'>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><h1>REST-INN    </h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '90px' }}
            navbarScroll
          >
          <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
            
          </Nav>
          <Form className="d-flex">
            
            <Nav.Link href="/property-listing">Vacation Properties</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Signup">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="/Login">Log in</NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
)
};

export default Header;
