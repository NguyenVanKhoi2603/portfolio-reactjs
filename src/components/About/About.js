import React, { Component } from 'react';
import { Jumbotron, ProgressBar, Container, Row, Col } from 'react-bootstrap';
import './About.css';

class About extends Component {
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

    const now = 60;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
      <Container fluid>
        <div id="about">
          <div className="content">
            <h1 className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', justifyItems: 'center' }}>About</h1>
            <div>
              <Row>
                <Col>
                </Col>
                <Col>
                  <span>Javascript</span>
                  {progressInstance}
                </Col>
              </Row>

            </div>
          </div>

        </div>
      </Container>

    );
  }
}

export default About;