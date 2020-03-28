import React, { Component } from 'react'
import { Button,Icon,Dropdown,Menu} from 'antd'
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';

const imageUrl ='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
const menu =(
      <Menu>
        <Menu.Item>
          <a href="" >登出</a>
        </Menu.Item>
        <Menu.Item>
          <a href="" >登出</a>
        </Menu.Item>
      </Menu>
  )
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
        <Dropdown overlay={menu}>
        <div style={{display:'inline-block',width:50}}>
          <img style={{height:'50',width:'50',borderRadius:'25'}} src={imageUrl} alt="图片加载失败..."/>
        </div>
  </Dropdown>
        {/* <div style={{display:'inline-block',width:50}}>
          <img style={{height:'50',width:'50',borderRadius:'25'}} src={imageUrl} alt="图片加载失败..."/>
        </div> */}
      </div>
    )
  }
}
export default Header
