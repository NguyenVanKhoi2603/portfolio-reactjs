import React, { Component } from 'react';
import './NavbarTop.css';

// or less ideally
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container } from 'react-bootstrap';
class NavbarTop extends Component {

  render() {
    return (
      <Container fluid>
        <div className="info">
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link href="#info">Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#portfolio" eventKey="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about" eventKey="link-2">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#service" eventKey="disabled" disabled>
                Service
        </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

      </Container>

    );
  }
}

export default NavbarTop;