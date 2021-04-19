import React, { Component } from 'react';
import './PersonalInformation.css';
import { Row, Col, Image, Descriptions } from "antd";
class PersonalInformation extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <Image
              width={200}
              src="https://cdn4.vectorstock.com/i/1000x1000/75/28/young-man-wearing-sleeveless-top-faceless-avata-vector-15127528.jpg"
            />
          </Col>

          <Col span={16}>
            <h1>KHOI NGUYEN</h1>
            <Descriptions column={3} title="Mobile and Web" layout="vertical">
              <Descriptions.Item label="Date of birth">March 26, 2000</Descriptions.Item>
              <Descriptions.Item label="Telephone">0862912981</Descriptions.Item>
              <Descriptions.Item label="Address">
                116 Duong Dinh Hoi, Phuoc Long B, Thu Duc
              </Descriptions.Item>
            </Descriptions>,
          </Col>
        </Row>
      </div>
    );
  }
}

export default PersonalInformation;