import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Layout, Divider, ConfigProvider,Button,message } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// import Header from './components/Header'
import { connectAlita } from 'redux-alita'
import Routes from './routes'
import SideMenu from './components/sideMenu'
import NavBar from './components/Header'
import './App.css'
const { Sider, Footer, Header, Content } = Layout
console.log(Layout, 'layout')
// const Footer = Layout.Footer;
console.log(Content, 'content')
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.changeStatus = this.changeStatus.bind(this)
  // }
  
  componentDidMount() {
    console.log('enter app')
    window.addEventListener('onbeforeunload',function(){
      message.info("浏览器即将刷新")
      alert('即将刷新浏览器')
    })
    // window.onbeforeunload = function(){
    //   alert('???')
    //   message.info("浏览器刷新")
    //   console.log('????')
    // }
  }
  componentDidUpdate() {
    console.log('update')
  }
  state = {
    title: '首页',
    collapsed: false
  }
  // componentDidMount() {}
  changeStatus = () => {
    console.log('enter func')
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const { title } = this.state
    const SiderStyle = {
      height : '100%',
      overflowY : 'auto'
    }
    return (
      <ConfigProvider locale={zhCN}>
        <DocumentTitle title={title}>
          <Layout>
            <Sider style={SiderStyle}  collapsed={this.state.collapsed}>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
               <div style={{height:64,lineHeight:'64px',textAlign:'center',width:'40%',color:'#fff',backgroundColor:'#aaa',borderRadius:'5px'}}>logo</div> 
                </div>
              <SideMenu collapsed={this.state.collapsed} style={ !this.state.collapsed?{ width: 200}:{width:76}}></SideMenu>
            </Sider>
            <Layout style={{ flexDirection: 'column' }}>
              <Header>
                <NavBar
                  changeStatus={this.changeStatus}
                  collapsed={this.state.collapsed}
                ></NavBar>
              </Header>
              <Content
              >
                {' '}
                <Routes></Routes>{' '}
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </DocumentTitle>
      </ConfigProvider>
    )
  }
}

export default App
