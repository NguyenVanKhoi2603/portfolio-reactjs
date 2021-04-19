import { Divider, Card, List, Avatar } from 'antd';
import React, { Component } from 'react';
import './HonorsAwards.css';
import { PieChartOutlined } from "@ant-design/icons";

class HonorsAwards extends Component {
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
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
    ];
    return (
      <div className="honor-awards">
        <Divider>Honors & Awards</Divider>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            bordered={false}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">asdasd</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />,
        </div>
      </div>
    );
  }
}

export default HonorsAwards;