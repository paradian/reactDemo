import React, { Component } from 'react'
import {DatePicker,Layout,} from 'antd'
import BasicTable from '../components/Table'
import SideMenu from '../components/sideMenu'
import API from '../fetch/api'
const {Sider,Footer,Header,Content}  = Layout
class Home extends Component {
    state = {
        date:new Date(),
        list:[1,2,3,4,5]
    }
    componentWillMount() {
        console.log('component will mount',API)
        API.getList().then(res => {
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
    timesUp() {
        let timer = setInterval(() =>{

        })
    }
    render() {
        return (
          <div className="container" >
              hoem page
              <BasicTable></BasicTable>
          </div>
           
        )
    }
}
export default Home;