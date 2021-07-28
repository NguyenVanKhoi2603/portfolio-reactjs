import { Divider, Card, List, Avatar } from 'antd';
import React, { Component } from 'react';
import './HonorsAwards.css';
import { PieChartOutlined, TrophyOutlined } from "@ant-design/icons";

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
        title: 'Second semester scholarship',
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

                  avatar={<TrophyOutlined style={{ color: 'yellow' }} />}
                  title={<a href="https://ant.design">{item.title}</a>}
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