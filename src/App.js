import React, {useState} from 'react';
import DocumentTitle from 'react-document-title'
import {Layout, Divider,ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// import Header from './components/Header'
import { connectAlita } from 'redux-alita';
import Routes from './routes'
import SideMenu from './components/sideMenu'
import './App.css';
const {Sider,Footer,Header,Content}  = Layout
console.log(Layout,'layout')
// const Footer = Layout.Footer;
console.log(Content,'content')
function App (){
  const [title] = useState('首页');
    return(
      <ConfigProvider locale={zhCN}>
      <DocumentTitle title={title}>
      <Layout>
                <Sider>
                    <SideMenu ></SideMenu>
                    </Sider>
                <Layout style={{flexDirection:'column'}}>
                    <Header>Header</Header>
                    <Content  style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}> <Routes></Routes>  </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
      </DocumentTitle>
      </ConfigProvider>
    )
}


export default App;
