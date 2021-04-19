import React, { Component } from 'react';
import Info from '../../components/Info';
import MyFooter from '../../components/MyFooter';
import NavbarTop from '../../components/NavbarTop';
import './MainPage.css';

class MainPage extends Component {
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
      <div>
        <NavbarTop />
        <Info />
        <MyFooter />
      </div>
    );
  }
}

export default MainPage;