import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Layout, Divider, ConfigProvider } from 'antd'
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
    return (
      <ConfigProvider locale={zhCN}>
        <DocumentTitle title={title}>
          <Layout>
            <Sider>
              <SideMenu collapsed={this.state.collapsed}></SideMenu>
            </Sider>
            <Layout style={{ flexDirection: 'column' }}>
              <Header>
                <NavBar
                  changeStatus={this.changeStatus}
                  collapsed={this.state.collapsed}
                ></NavBar>
              </Header>
              <Content
                style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}
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
