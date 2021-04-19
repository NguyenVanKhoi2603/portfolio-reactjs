import React, { Component } from 'react';
import './TimeLineCV.css';
import { Timeline } from 'antd';
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
class TimeLineCV extends Component {
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
      <div style={{ padding: 30 }}>
        <Timeline mode="alternate">
          <Timeline.Item color="yellow">Thu Duc 2018-10-19</Timeline.Item>
          <Timeline.Item color="green">Solve initial network problems 2015-09-01When the timeline is incomplete and ongoing, put a ghost node at last. Set pending as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, pendingDot= is used to customize the dot of the pending item. reverse= is used for reversing nodes. </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
        </Timeline.Item>
          <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Nexpando company 03-01-2021
          </Timeline.Item>
          <Timeline.Item color="green" dot={<CheckCircleOutlined style={{ fontSize: '29px' }} />}>
            Done
          </Timeline.Item>

        </Timeline>,
      </div>
    );
  }
}

export default TimeLineCV;