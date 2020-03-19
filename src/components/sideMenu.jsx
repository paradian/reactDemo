import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import routes from '../routes/config'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const { SubMenu } = Menu;
var MenuList = routes.menus;
const renderMenu = (item) => (
    <Menu.Item key={item.key}>
        <Link to={item.key}>
            {item.icon && <Icon type={item.icon}></Icon>}
                <span>{item.title}</span>
        </Link>
    </Menu.Item>);

const renderSubMenu = (item) => (
    <SubMenu key={item.key} title ={<span>
        {item.icon && <Icon type={item.icon}></Icon>}
        <span>{item.title}</span>
    </span>}>
    {item.subs.map(cell => renderMenu(cell))}
    </SubMenu>)

class SideMenu extends Component {

    constructor(props) {
       super(props)
       console.log(props,'props')
    }
    componentWillMount() {
      MenuList=  MenuList.filter(item => item.permission<= this.props.level)
        console.log('enter will mount')
    }
    componentDidMount() {
     console.log(this.props,'props')
    }
    componentDidUpdate() {
       
    }
    componentWillUnmount() {
      
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
                <Menu collapsed={this.props.collapsed.toString()} theme={'dark'} mode={!this.props.collapsed?'inline':'vertical'}>
                    {
                        MenuList.map(item =>(
                           item.subs? renderSubMenu(item) : renderMenu(item))
                        )
                    }
                </Menu>

            </div>
        )
    }
}
function mapProps(state) {
return {
    level:state.login
}
}
export default connect(mapProps)(SideMenu); 