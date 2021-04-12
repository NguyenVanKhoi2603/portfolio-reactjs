import React, { Component } from 'react';
import { Row, Card, Col, Button, Container } from 'react-bootstrap';
import './Portfolio.css';
import image1 from '../../images/IT-infrastructure-service.png';
class Portfolio extends Component {
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
        <div id="portfolio" className="portfolio" style={{ height: 600 }}>
          <div className="content">
            <span>portfolio</span>
            <Row>
              <Col md={5} xs={2}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

    );
  }
}

export default Portfolio;