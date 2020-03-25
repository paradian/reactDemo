import React,{Component} from 'react'
import {connect} from 'react-redux'

class Lottery extends Component {
    render(){
        return(
            <div>
                lottery
            </div>
            
        )
    }
}
export default connect()(Lottery)