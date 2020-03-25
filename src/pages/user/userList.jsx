import React,{Component} from 'react'
import api from '../../fetch/api'
import {connect} from 'react-redux'

const responsiveStyle={
    divStyle:{
        width:'10rem',
        height:"10rem",
        "font-size":"0.34rem",
        "backgroundColor":"seagreen"
    }
}
class UserList extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        console.log('enter?',this.props)
        api.helloTest().then(res =>{
            console.log(res,'hello test demo')
        })
    }
    render() {
       
        return (
            <div >
               {this.props.query.key+'Detail'} UserList
            </div>
            
        )
    }
}
export default connect()(UserList) 