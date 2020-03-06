import React, {Component} from 'react'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import {
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    InputNumber,
    TimePicker,
} from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';
import QQMap from '../components/QQmap'
const {Option } = Select;
const {TextArea} = Input
const renderOptions = (item)=> (
        <Option value={item.value}>{item.key}</Option>)


class Info extends Component {
    state={
        location:{}
    }
    getLocation = (value)=> {
        console.log(value)
        this.setState({
            location:value
        })
    }
    onBenifitsChange =(value) =>{
        console.log(value,'value')
    }
    componentDidMount() {
        console.log(DatePicker.RangePicker,'sakdjfl;sadk',TimePicker.RangePicker,)
    }
    render() {
        const data = [{key:'服务员',value:'1'},{key:'发传单',value:'3'},{key:'模特',value:'2'},{key:'家教',value:'4'}]
        const sexs = [{key:'男',value:'1'},{key:'女',value:'3'},{key:'不限',value:'0'}]
        const period = [{key:'天',value:'1'},{key:'周',value:'3'},{key:'月',value:'2'},{key:'时',value:'4'}]
        const benifits = [{label:'包吃',value:'1'},{label:'包住',value:'3'},{label:'包饭',value:'2'},{label:'交通补',value:'4'},{label:'提成',value:'9'}]
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
                <Form.Item name='detail' label='兼职标题' >
                    <Input ></Input>
                    </Form.Item>
                    <Form.Item name='detail' label='职位描述' >
                    <Input.TextArea ></Input.TextArea>
                    </Form.Item>
                    <Form.Item name='type' label='类型' >
                    <Select placeholder='请选择类型' style={{width:200}}>
                        {data.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item name='type' label='结算周期' >
                    <Select placeholder='请选择类型' style={{width:200}}>
                        {period.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item name='type' label='工资单位' >
                    <Select placeholder='请选择类型' style={{width:200}}>
                        {period.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                    <Form.Item name='type' label='日期' >
                    <DatePicker.RangePicker>

                    </DatePicker.RangePicker>
                    </Form.Item>

                    <Form.Item name='time' label='时段' >
                    {/* <TimePicker.RangePicker>

                    </TimePicker.RangePicker> */}
                    </Form.Item>
                    <Form.Item name='type' label='福利' >
                    <Checkbox.Group options={benifits}  onChange={this.onBenifitsChange} />
                    </Form.Item>
                    <Form.Item name='type' label='地址' >
                  <QQMap getLocation={this.getLocation}></QQMap>
                    </Form.Item>
                    <Form.Item name='detail' label='描述' >
                    <Input.TextArea ></Input.TextArea>
                    </Form.Item>
                    <Form.Item name='count' label='人数' >
                  <InputNumber style={{width:200}} placeholder={'请输入详细位置或位置描述'}></InputNumber>
                    </Form.Item>
                    <Form.Item name='sex' label='性别' >
                    <Select placeholder='请选择性别' style={{width:200}}>
                        {sexs.map(item =>(
                            renderOptions(item)
                        ))}
                    </Select>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Info;