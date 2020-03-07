import React, { Component } from 'react'
import { Button,Icon} from 'antd'
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';

class Header extends Component {
  state = {}
  componentDidMount() {}
  render() {
    const headerStyle = {
      'display':'flex', 
      'justifyContent':'space-between',
      'alignItems':'center',
    }
    return (
      <div style={headerStyle}>
        <Button onClick={this.props.changeStatus}>
         {/* {React.createElement(!this.props.collapsed?MenuUnfoldOutlined : MenuFoldOutlined)} */}
         {console.log(this.props.collapsed)}
         <Icon type={!this.props.collapsed?'menu-fold':'menu-unfold'} style={{fontSize:18}}></Icon>
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
