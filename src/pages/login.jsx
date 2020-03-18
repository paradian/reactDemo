import React, {Component} from 'react'
import {Form,Input,Button,Checkbox} from 'antd'


class Login extends Component {
    render() {
        const layout ={
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        login() {
            
        }
        return(
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
                    <Button onClick={() => login()}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default Login;