import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd'
const { SubMenu } = Menu;
const renderMenu = (list) => {
    console.log(list, 'list')
    list.map(item =>
        <Menu.Item>
            <span>{item} ++</span>
        </Menu.Item>
    )
}
class SideMenu extends Component {
    constructor(props) {
       super(props)
    }
    componentDidMount() {
        console.log('component did mount')
    }
    componentDidUpdate() {
        console.log('component did update')
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    state = {
        collapsed: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    changeStatus = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div className="menu-container" style={{ width: 256}}>
                <Button onClick={this.changeStatus}>

                </Button>
                <Menu inlineCollapsed={this.state.collapsed} theme={'dark'} mode={'inline'}>
                    {
                        this.state.list.map(item =>
                            <Menu.Item>
                                <span>{item} ++</span>
                            </Menu.Item>
                        )
                    }
                </Menu>

            </div>
        )
    }
}
export default SideMenu; 