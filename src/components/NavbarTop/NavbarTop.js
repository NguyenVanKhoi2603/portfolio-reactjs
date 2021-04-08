import React, { Component } from 'react';
import './NavbarTop.css';

// or less ideally
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Container } from 'react-bootstrap';
class NavbarTop extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <Container fluid>
        {/* <Navbar>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar> */}
        <Nav className="justify-content-center info" activeKey="/home">
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
      </Container>

    );
  }
}

export default NavbarTop;