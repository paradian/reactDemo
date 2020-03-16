import React, { Component } from 'react'
import { DatePicker, Layout, Button } from 'antd'
import BasicTable from '../components/Table'
import SideMenu from '../components/sideMenu'
import { connect } from 'react-redux'
import API from '../fetch/api'
import { bindActionCreator, bindActionCreators } from 'redux'
import actions from '../store/actions'
// import { increment, decrement, getlist } from '../store/actions/index'
const { Sider, Footer, Header, Content } = Layout
class Home extends Component {
  state = {
    date: new Date(),
    list: [1, 2, 3, 4, 5]
  }
  componentWillMount() {
    console.log('component will mount', API)
    API.getList().then(res => {
      console.log(res, 'resssss')
    })
    console.log(this.store, this, 'store,,,')
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
  render() {
    console.log(this.props.count, 'props,props')
    const { dispatch } = this.props
    console.log(dispatch, 'dispatch')
    return (
      <div className="container">
        hoem page
        <div>
          <Button onClick={() => this.props.increseCounter()}>+</Button>
          {this.props.count.counter}
          <Button onClick={() => this.props.decreseCounter()}>-</Button>
        </div>
        <Button onClick={() => this.props.getlist()}>getlist</Button>
        <BasicTable></BasicTable>
      </div>
    )
  }
}
function mapGetCounter(state) {
  return {
    count: state
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
