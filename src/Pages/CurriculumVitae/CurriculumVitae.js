import React, { Component } from 'react';
import './CurriculumVitae.css';
import TimeLineCV from "./Components/TimeLineCV";
import HonorsAwards from "./Components/HonorsAwards";
import { Container } from 'react-bootstrap';
import Education from './Components/Education/Education';
import PersonalInformation from './Components/PersonalInformation/PersonalInformation';
import Objective from './Components/Objective/Objective';
import { Button } from 'antd';
import { DownloadOutlined } from "@ant-design/icons";
class CurriculumVitae extends Component {

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Container>
          <Button style={{ float: 'right' }}>Download CV <DownloadOutlined /></Button>
          <PersonalInformation />
          <Objective />
          <Education />
          <HonorsAwards />
          <TimeLineCV />
        </Container>
      </div>
    );
  }
}

export default CurriculumVitae;