import React, { Component } from 'react';
import './Info.css';
import { Card, Button, Container, Image, Row, Col, Jumbotron } from "react-bootstrap";
import avatar from '../../images/info.png';
import { FaFacebook, FaGithub, FaEnvelope, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";
class Info extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <Container id="info" fluid>

        <Row xs={1} md={2}>
          <Col className="row justify-content-center align-items-center">
            <Jumbotron className="bg-white">
              <h1>Hello, world!</h1>
              <h1> <b>I'm Khoi Nguyen</b></h1>
              <p>Mobile & Web Developer</p>
              <div className="contact-info">
                <a href="https://www.facebook.com/khoinguyen2603/">
                  <i>
                    <FaFacebook style={{ width: 24, height: 24 }} />
                  </i>
                </a>
                <a href="https://github.com/NguyenVanKhoi2603/">
                  <i>
                    <FaGithub style={{ width: 24, height: 24 }} />
                  </i>
                </a>
                <a href="mailto:khoinguyenvk9@gmail.com">
                  <i>
                    <FaEnvelope style={{ width: 24, height: 24 }} />
                  </i>
                </a>

                <a href="tel:0862912981">
                  <i>
                    <FaPhoneAlt style={{ width: 24, height: 24 }} />
                  </i>
                </a>
              </div>

            </Jumbotron>


          </Col>

          <Col>
            <Image style={{ width: 600, height: 700 }} src={avatar} fluid></Image>
          </Col>
        </Row>

      </Container>

    );
  }
}

export default Info;