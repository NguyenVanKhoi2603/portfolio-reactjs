import React, { Component } from 'react';
import './MyFooter.css';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaRegEnvelope, FaMapMarkerAlt, FaEnvelope, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";

class MyFooter extends Component {


  render() {
    return (
      <Container fluid>
        {/* <footer className="text-center text-lg-start">
          <div className="text-center p-3">
            © 2020 Copyright:
            <p>
              sdasdasdasd ajskdbajskdbajsdbasjdhasbdj
            </p>
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer> */}
        <footer className="content">
          <Row>
            <Col>
              jkasd bsdasjdbakjsdbasd aksjdaskd
              as
              const dispatch = useDispatch(d
              asd
              asd
              asd)
            </Col>
            <Col>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="#info">Information</Nav.Link>
                <Nav.Link href="#portfolio" eventKey="link-1">Portfolio</Nav.Link>
                <Nav.Link href="#about" eventKey="link-2">About</Nav.Link>
                <Nav.Link href="#service" eventKey="disabled">
                  Service
          </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <div className="contact">
                <div className="">
                  <ul className="list-unstyled">
                    <li>
                      <a target="_blank" href="https://www.google.com/maps/place/116+D%C6%B0%C6%A1ng+%C4%90%C3%ACnh+H%E1%BB%99i,+Ph%C6%B0%E1%BB%9Bc+Long+B,+Qu%E1%BA%ADn+9,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8217787,106.7776882,17z/data=!3m1!4b1!4m5!3m4!1s0x317526f99d9e98e1:0x812caed7b7cba69c!8m2!3d10.8217787!4d106.7798769?hl=vi-VN">
                        <address>
                          <FaMapMarkerAlt className="style-icon-ft" />
                          116 Duong Dinh Hoi, Phuoc Long B, District 9, Ho Chi Minh City.
                        </address>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:khoinguyenvk9@gmail.com" target="_blank">
                        <i>
                          <FaRegEnvelope className="style-icon-ft" />
                      khoinguyenvk9@gmail.com
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

        </footer>
      </Container>
    );
  }
}

export default MyFooter;