import React, { Component } from 'react'
import { Button } from 'antd'
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';

class Header extends Component {
  state = {}
  componentDidMount() {}
  render() {
    const headerStyle = {
      'display':'flex', 
      'justify-content':'space-between',
      'align-items':'center',
    }
    return (
      <div style={headerStyle}>
        <Button onClick={this.props.changeStatus}>
         {/* {React.createElement(!this.props.collapsed?MenuUnfoldOutlined : MenuFoldOutlined)} */}
         click
        </Button>
        <div style={{display:'inline-block'}}>
          <Button>full</Button>
          <Button>msg</Button>
          <Button>avatar</Button>
        </div>
      </div>
    )
  }
}
export default Header
