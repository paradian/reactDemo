import React, { Component } from 'react'
import { Button, Icon } from 'antd'

class Header extends Component {
  state = {}
  componentDidMount() {}
  render() {
    return (
      <div>
        <Button onClick={this.props.changeStatus}>
          <Icon
            type={
              this.props.collapsed ? 'menuFoldOutlined' : 'menuUnfoldOutline'
            }
          />
        </Button>
      </div>
    )
  }
}
export default Header
