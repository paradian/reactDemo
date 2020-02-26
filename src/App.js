import React, {Component} from 'react';
import DocumentTitle from 'react-document-title'
import {Layout, Divider } from 'antd'
// import Header from './components/Header'
import { connectAlita } from 'redux-alita';
import Routes from './routes'
import logo from './logo.svg';
import Home from './pages/Home'
import './App.css';
console.log(Layout,'layout')
const Content = Layout.Content;
// const Footer = Layout.Footer;
console.log(Content,'content')
class App extends Component{
  state={
    title:'home'
  }
  componentDidMount() {

  }
  render(){
    const {title} = this.state
    return(
      <DocumentTitle title={title}>
          <Layout style={{flexDirection:'column'}}>
          
            {/* <Content> */}
             {/* <Routes></Routes> */}
            {/* </Content> */}
              {new Date().toDateString()}
           
            {/* <Home></Home>   */}
            <Routes></Routes>  
            {/* test('should ', () => {
              
            }); */}
            
            </Layout> 
      </DocumentTitle>
    )
  }
}


export default App;
