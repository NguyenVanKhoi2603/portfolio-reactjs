import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
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
    return (
      <div >
        <div className="justify-content-center align-items-center">
          <Jumbotron className="bg-white">
            <h1 style={{ height: 600, backgroundColor: 'gray' }}>H!</h1>
          </Jumbotron>

        </div>

        <h1 className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', justifyItems: 'center' }}>About</h1>
      </div>
    );
  }
}

export default About;