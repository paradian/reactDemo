import React,{Component} from 'react'
import api from '../fetch/api'
import {connect} from 'react-redux'


const responsiveStyle={
  
}
class UserDetail extends Component {
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
               {this.props.query.key+'Detail'}
            </div>
            
        )
    }
}
export default connect()(UserDetail)