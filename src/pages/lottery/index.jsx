import React,{Component} from 'react'
import {connect} from 'react-redux'

class Lottery extends Component {
    componentDidMount() {
        // const str = "javasctipt is the best language in the world"
        const str = "How every single promise I keep,you will see. like dying in the sun"
        // const matchReg = new RegExp(/in/,'g')
        const matchReg = new RegExp(/\bH\b.*\bsee\b/)
       console.log("match="+str.match(matchReg),"search="+str.search(matchReg),"exec="+matchReg.exec(str),"test="+matchReg.test(str),"replace="+str.replace(matchReg,'all over')) 
        let i = 0;
        for(const propName in window){
            console.log(propName,'propname')
        }
        for (const le in [1,2,3,4]){
            console.log(le,'le')
        }
        let num = 0;
for (let i = 1; i < 10; i++) {
if (i % 5 == 0) {
continue;
}
num++;
console.log(num,'num',i)
}
    //    do {
    //         ++i;
    //         console.log(i)
    //    } while (i<10)

    //    while(i<10){
    //        ++i;
    //    }
    //    for(i<10;i++;){
    //     console.log(i)
    //    }
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