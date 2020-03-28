import React, { Component } from 'react'
import { DatePicker, Layout, Button, Modal} from 'antd'
import BasicTable from '../components/Table'
import { connect } from 'react-redux'
import API from '../fetch/api'
import { bindActionCreator, bindActionCreators } from 'redux'
import actions from '../store/actions'
import {Prompt} from 'react-router'
// import { Lifecycle } from 'react-router-dom'
// import { increment, decrement, getlist } from '../store/actions/index'
const { Sider, Footer, Header, Content } = Layout
class Home extends Component {
  // mixins=[Lifecycle]
  state = {
    date: new Date(),
    list: [1, 2, 3, 4, 5],
    array:[2,5,4,6,9],
    modalVisible:false
    

  }
 
  // routerWillLeave(nextLocation) {
  //   console.log(nextLocation,'next location')
  //   return 'prevent'
  // }
  componentWillMount() {
    console.log('component will mount', API)
    API.getList().then(res => {
      console.log(res, 'resssss')
    })
    console.log(this.store, this, 'store,,,')
    let length = this.state.array.length-1;
    let temp= this.state.list
    while(length>-1){
     let index = this.state.list.findIndex(cell => cell == this.state.array[length])
     if(index<0){
       temp.push(this.state.array[length])
     }
     length --;
    }
    
  }
  componentDidMount() {
    const { dispatch } = this.props
    console.log(actions, 'actions')
    console.log(dispatch)
  }
  changeDate(date, dateString) {
    console.log(date, dateString)
  }
  createDoms() {
    // this.list.forEach(item => {
    //     <div>item -- {item}</div>
    // })
  }
  timesUp() {
    let timer = setInterval(() => {})
  }
  checkItem =(data,item) =>{
    console.log(data,'console.log data',this)

    this.props.history.push({
      pathname:'/app/list/'+data.key+'?key=qwq&name=leo',
      query:{id:data.key,name:'leo',age:'23'}
    })
  }
  drawDemo() {
    let dom = this.refs.canvasDemo
    console.log(dom,'dom',Math.PI)
    if(dom.getContext){
      var ctx = dom.getContext('2d')
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 100, 100);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(50, 50, 100, 100);
      ctx.fillStyle = 'rgba(0, 0, 100, 0.5)';
      ctx.fillRect(80, 80, 100, 100);
      ctx.strokeRect(90,90,70,70)
      ctx.clearRect(80, 80, 60, 60);

      ctx.beginPath()
      ctx.moveTo(250,40)
      ctx.lineTo(240,30)
      ctx.lineTo(240,50)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(250,250,30,0,Math.PI*2,true)
      //uppp
      // ctx.moveTo(270,250)
      // ctx.arc(250,250,20,0,Math.PI,false)
      //down
      ctx.moveTo(270,270)
      ctx.arc(250,270,20,0,Math.PI,true)
      ctx.moveTo(240,235)
      ctx.arc(235,235,5,0,Math.PI*2,true)
      ctx.moveTo(270,235)
      ctx.arc(265,235,5,0,Math.PI*2,true)
      ctx.stroke()

    }
  }
  componentDidMount(){
    this.drawDemo()
  }
 canvasStyle = {
    demo:{
      width:300,
      height:300
    }
  }
  showModalSave = location => {
    this.setState({
      modalVisible: true,
      location,
    });
  };

  closeModalSave = () => {
    const { location } = this.state;
    const { history } = this.props;
    console.log(location.pathname,'pathName',history)
    // if(history.action == 'POP') {
    //   history.goBack()
    // } else if(history.action == 'PUSH') {
    //   history.push({
    //     pathname: `..${location.pathname}`,
    //   });
    // }
    history.push({
      pathname: `..${location.pathname}`,
    });
    this.setState({
      modalVisible: false,
    });
    console.log(location.pathname,'pathName',history)
  };

  handlePrompt = location => {
    if (!this.isSave) {
      this.showModalSave(location);
      return false;
    }
    return true;
  };

  handleSave = () => {
    const { location } = this.state;
    const { history } = this.props;
    this.isSave = true;
    console.log(location.pathname, 'pathname75',history);
    history.push({
      pathname: `..${location.pathname}`,
    });
    this.setState({
      modalVisible: false,
    });
    // this.saveAll();
  };
  render() {
    console.log(this.props.count, 'props,props')
    console.log(this.props.list)
    const { dispatch } = this.props
    console.log(dispatch, 'dispatch')
    // handlePrompt = location => {
    //   if (!this.isSave) {
    //     this.showModalSave(location);
    //     return false;
    //   }
    //   return true;
    // };
  
   
    return (
      <div className="container">
        <Prompt message={(location) => 
    this.handlePrompt(location)
  }></Prompt>
  <Modal title="是否继续？"
       visible={this.state.modalVisible}
       onCancel={this.closeModalSave}
       closable={false}
       onOk={this.handleSave}
       centered
>
{/* <div>是否保存修改？</div> */}
<p>检测到当前页内容未保存</p>

</Modal>
        hoem page
        <div>
          <Button onClick={() => this.props.increseCounter()}>+</Button>
          {this.props.count.counter}
          <Button onClick={() => this.props.decreseCounter()}>-</Button>
        </div>
        <Button onClick={() => this.props.getlist()}>getlist</Button>
        <canvas width='300' height='300' ref='canvasDemo'>
        </canvas>
        <BasicTable checkItem={this.checkItem}></BasicTable>
      </div>
    )
  }
}
function mapGetCounter(state) {
  return {
    count: state,
    list:state
  }
}
function mapChangeCounter(dispatch) {
  return {
    increseCounter: bindActionCreators(actions.increment, dispatch),
    decreseCounter: bindActionCreators(actions.decrement, dispatch),
    getlist: bindActionCreators(actions.getlist, dispatch)
  }
}
function mapChange1Counter(dispatch) {
  dispatch({ type: 'DECREMENT' })
}
export default connect(mapGetCounter, mapChangeCounter)(Home)
