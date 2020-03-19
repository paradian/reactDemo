import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators, bindActionCreator } from 'redux'
import actions from '../store/actions'
class Login extends Component {
    login() {
        this.props.setToken(10)
        this.props.history.push({pathname:'/app/home'})
    }
    render() {
        const layout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        
        return (
            <Form {...layout} >
                <Form.Item label='用户名' name='username'>
                    <Input></Input>
                </Form.Item>
                <Form.Item label='密码' name='password'>
                    <Input.Password></Input.Password>
                </Form.Item>
                <Form.Item name='remember' >
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => this.login()}>
                        登录
                    </Button>
                    <Button onClick={() => this.props.history.push({pathname:'/app/home'})}>
                        跳转
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
function mapAction(dispatch) {
    console.log(actions,'action')
    return {
        setToken: bindActionCreators(actions.setToken, dispatch)
    }
}
export default connect(null, mapAction)(Login);