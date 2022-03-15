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
        <Navbar.Brand><Link to='/'><h1>REST-INN    </h1></Link></Navbar.Brand>
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
            
            <Nav.Link><Link to="/property-listing">Vacation Properties</Link></Nav.Link>
            <Nav.Link ></Nav.Link>
            <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to ="/Signup">Sign up</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/Login'>Log in</Link></NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
)
};

export default Header;
