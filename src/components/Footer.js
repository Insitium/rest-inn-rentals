import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button,Form, Nav,Navbar,Container,NavDropdown,FormControl } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {

    
  return(
      <div className='footer-body'>
      <div className='all-footer'>
      <div className="footer">
        <div className='footer-container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>More Links</h4>
                    <ul><li><a href="/property-details">Details Page</a></li></ul>
                </div>
                <div className='footer-col'>
                    <h4>About Us</h4>
                    <ul><li><a href="/">Page</a></li></ul>
                </div>
                <div className='footer-col'>
                    <h4>Follow Us</h4>
                    <a ><i className='fab fa-facebook-f'><SocialIcon url="https://facebook.com" /></i></a>
                    <a ><i className='fab fa-twitter-f'><SocialIcon url="https://twitter.com" /></i></a>
                    <a ><i className='fab fa-instagram-f'><SocialIcon url="https://instagram.com" /></i></a>
                    <a ><i className='fab fa-linkedin-f'><SocialIcon url="https://linkedin.com" /></i></a>
                </div>
                
            </div>
        </div>
      </div>
      </div>
      </div>
)
};

export default Footer;
