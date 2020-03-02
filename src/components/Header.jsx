import React,{Component} from 'react'
import {Button,Icon } from 'antd'

class Header extends Component {
    constructor(props){
        super(props)
    }
    state ={

    }
    render() {
        return(
            <div>
             <Button>
                 <Icon onClick={this.props.commit(),console.log('enter click event,,,,')}  type= {this.props.collapsed?'menuFoldOutlined':'menuUnfoldOutline'} />
             </Button>
            </div>
        )
    }
}
export default Header;