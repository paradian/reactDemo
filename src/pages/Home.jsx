import React, { Component } from 'react'
import {DatePicker,Layout,} from 'antd'

import SideMenu from '../components/sideMenu'
import {getList} from '../fetch/api'
const {Sider,Footer,Header,Content}  = Layout
class Home extends Component {
    state = {
        date:new Date(),
        list:[1,2,3,4,5]
    }
    componentWillMount() {
        console.log('component will mount')
        getList().then(res => {
            console.log(res,'resssss')
        })
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
          <div className="container" >
              hoem page
          </div>
           
        )
    }
}
export default Home;