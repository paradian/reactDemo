import React, { Component } from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Menu, Button } from 'antd';
import routes from '../routes/config'
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
const MenuList = routes.menus;
const renderMenu = (item) => (
    console.log(item,'item'),
    <Menu.Item key={item.key}>
        <Link to={item.key}>
            {item.icon && <LegacyIcon type={item.icon}></LegacyIcon>}
                <span>{item.title}</span>
        </Link>
    </Menu.Item>);

const renderSubMenu = (item) => (
    <SubMenu key={item.key} title ={<span>
        {item.icon && <LegacyIcon type={item.icon}></LegacyIcon>}
        <span>{item.title}</span>
    </span>}>
    {item.subs.map(cell => renderMenu(cell))}
    </SubMenu>)

class SideMenu extends Component {

    constructor(props) {
       super(props)
       console.log(props,'props')
    }
    componentDidMount() {
        console.log('component did mount')
        console.log(MenuList,'MenuList')
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
            <div className="menu-container" style={ !this.props.collapsed?{ width: 200}:{width:76}}>
                {/* <Button onClick={this.changeStatus}>

                </Button> */}
                <Menu inlineCollapsed={this.props.collapsed} theme={'dark'} mode={!this.props.collapsed?'inline':'vertical'}>
                    {
                        MenuList.map(item =>(
                            console.log(item,'itemmmmmmm'),
                           item.subs? renderSubMenu(item) : renderMenu(item))
                        )
                    }
                </Menu>

            </div>
        )
    }
}
export default SideMenu; 