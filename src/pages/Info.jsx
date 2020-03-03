import React, {Component} from 'react'
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker
   
  } from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';
import QQMap from '../components/QQmap'
const {Option } = Select;
const renderOptions = (item)=> (
        <Option value={item.value}>{item.key}</Option>)
   

class Info extends Component {
   
    render() {
        const data = [{key:'服务员',value:'1'},{key:'发传单',value:'3'},{key:'模特',value:'2'},{key:'家教',value:'4'}]
        const period = [{key:'天',value:'1'},{key:'周',value:'3'},{key:'月',value:'2'},{key:'时',value:'4'}]
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return(
            <div>
                <Form size={'middle'} {...formItemLayout}>
                    <Form.Item name='type' label='类型' >
                    <Select placeholder='请选择类型' style={{width:150}}>
                        {data.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item name='type' label='周期' >
                    <Select placeholder='请选择类型' style={{width:150}}>
                        {period.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item name='type' label='周期' >
                    <Select placeholder='请选择类型' style={{width:150}}>
                        {period.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item name='type' label='周期' >
                    <DatePicker.RangePicker>

                    </DatePicker.RangePicker>
                    </Form.Item>
                    <Form.Item name='type' label='地址' >
                  <QQMap></QQMap>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
export default Info;