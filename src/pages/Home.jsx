import React, { Component } from 'react'
import {DatePicker} from 'antd'
import SideMenu from '../components/sideMenu'
class Home extends Component {
    state = {
        date:new Date(),
        list:[1,2,3,4,5]
    }
    componentWillMount() {
        console.log('component will mount')
    }
    changeDate(date,dateString) {
        console.log(date,dateString)
    }
    createDoms() {
        // this.list.forEach(item => {
        //     <div>item -- {item}</div>
        // })
    }
    render() {
        return (
            <div>
            <div>Home Page</div>
            <SideMenu></SideMenu>
            <DatePicker onChange={this.changeDate} />
        {/* <div>{this.createDoms}</div> */}
            </div>
        )
    }
}
export default Home;