import React,{Component} from 'react'
import {connect} from 'react-redux'

class Lottery extends Component {
    componentDidMount() {
        // const str = "javasctipt is the best language in the world"
        const str = "How every single promise I keep,you will see. like dying in the sun"
        // const matchReg = new RegExp(/in/,'g')
        const matchReg = new RegExp(/\bH\b.*\bsee\b/)
       console.log("match="+str.match(matchReg),"search="+str.search(matchReg),"exec="+matchReg.exec(str),"test="+matchReg.test(str),"replace="+str.replace(matchReg,'all over')) 
    }
    render(){
        return(
            <div>
                lottery
            </div>
            
        )
    }
}
export default connect()(Lottery)