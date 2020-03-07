import React, { Component } from 'react'
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
    DatePicker,
    InputNumber,
    TimePicker,
    message
} from 'antd';
import moment from 'moment'
import { QuestionCircleOutlined } from '@ant-design/icons';
import QQMap from './QQmap'
const { Option } = Select;
const { TextArea } = Input
const renderOptions = (item) => (
    <Option value={item.value} key={item.value}>{item.key}</Option>)

    const renderPois = (item) => (
        <Option value={item.name} key={item.id}>{item.name}</Option>)
class rawForm extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        location: {},
         addressList:[],
        jobInfo: {
            workType: '',
            count: ''
        }
    }
    getLocations = (value) => {
        console.log(value)
        this.setState({
            addressList: value
        })
    }
    searchAdress =(value) =>{
        console.log(value,'value')
        this.refs.QMap.searchAdress(value)
    }
    onBenifitsChange = (value) => {
        console.log(value, 'value')
    }
    componentDidMount() {
        console.log(DatePicker.RangePicker, 'sakdjfl;sadk', TimePicker.RangePicker)
    }
    submitForm = (event) =>{
        console.log('enter?')
        event.preventDefault();
        this.props.form.validateFields((err,value) =>{
            if(err) {
                console.log(err,'error')
                message.warning('请检查后提交！')
            }
            console.log(value,'valuessssss')
        })
    } 
    render() {
        console.log(this, this.props, this.props.form, 'form')
        const { getFieldDecorator } = this.props.form;
        console.log(getFieldDecorator, 'field')
        const data = [{ key: '服务员', value: '1' }, { key: '发传单', value: '3' }, { key: '模特', value: '2' }, { key: '家教', value: '4' }]
        const sexs = [{ key: '男', value: '1' }, { key: '女', value: '3' }, { key: '不限', value: '0' }]
        const period = [{ key: '天', value: '1' }, { key: '周', value: '3' }, { key: '月', value: '2' }, { key: '时', value: '4' }]
        
        const benifits = [{ label: '包吃', value: '1' }, { label: '包住', value: '3' }, { label: '包饭', value: '2' }, { label: '交通补', value: '4' }, { label: '提成', value: '9' }]
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

        return (

            <div>
                <Form size={'middle'} {...formItemLayout} onSubmit={ this.submitForm}>
                    <Form.Item name='title' label='兼职标题'  >
                        {getFieldDecorator('title', {
                            rules: [
                                {
                                    min: 3,
                                    message: '标题长度太短！',
                                },
                                {
                                    max: 8,
                                    message: '标题长度太长！',
                                },
                                {
                                    required: true,
                                    message: '标题不可为空！',
                                },
                            ],
                        })(<Input ></Input>)}
                    </Form.Item>
                    <Form.Item name='detail' label='职位描述' >
                        {getFieldDecorator('detail', {
                            rules: [
                                {
                                    min: 7,
                                    message: '描述长度不应少于七字符',
                                },
                                {
                                    required: true,
                                    message: '职位描述不可为空！',
                                },
                            ],
                        })(<Input.TextArea ></Input.TextArea>)}
                    </Form.Item>
                    <Form.Item name='type' label='类型' > {getFieldDecorator('type', {
                        rules: [
                            {
                                required: true,
                                message: '请选择类型',
                            },
                        ],
                    })(<Select placeholder='请选择类型' style={{ width: 200 }}>
                        {data.map(item => (
                            renderOptions(item)
                        ))}
                    </Select>)}

                    </Form.Item>
                    <Form.Item name='period' label='结算周期' >
                        {getFieldDecorator('period', {
                            rules: [
                                {
                                    required: true,
                                    message: '请选择周期',
                                },
                            ],
                        })(<Select placeholder='请选择周期' style={{ width: 200 }}>
                            {period.map(item => (
                                renderOptions(item)
                            ))}
                        </Select>)}

                    </Form.Item>
                    <Form.Item name='unit' label='工资单位'>  {getFieldDecorator('unit', {
                            rules: [
                                {
                                    required: true,
                                    message: '请选择单位',
                                },
                            ],
                        })(<Select placeholder='请选择单位' style={{ width: 200 }}>
                            {period.map(item => (
                                renderOptions(item)
                            ))}
                        </Select>)}

                    </Form.Item>
                    <Form.Item name='salary' label='基本工资' >
                    {getFieldDecorator('salary', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入人数',
                                },
                            ],
                        })(<InputNumber style={{ width: 200 }} ></InputNumber>)}元
                        
                    </Form.Item>
                    <Form.Item name='date' label='日期' >
                    {getFieldDecorator('date', {
                            rules: [
                                {
                                    required: true,
                                    message: '标题不可为空！',
                                },
                            ],
                        })(  <DatePicker.RangePicker>

                            </DatePicker.RangePicker>)}
                      
                    </Form.Item>
                    <Form.Item name='time' label='时段' >
                    <TimePicker  format={'HH:mm'} defaultValue={moment('08:00','HH:mm')}>
                    </TimePicker>-- <TimePicker  format={'HH:mm'} defaultValue={moment('18:00','HH:mm')}>
                    </TimePicker>
                    </Form.Item>
                    <Form.Item name='type' label='福利' >
                         <Checkbox.Group options={benifits} onChange={this.onBenifitsChange} />
                       
                    </Form.Item>
                    <Form.Item name='adress' label='地址' >
                    {getFieldDecorator('adress', {
                            rules: [
                                {
                                    required: true,
                                    message: '地址不可为空！',
                                },
                            ],
                        })( <Select
                            showSearch
                            placeholder="请输入地址"
                            filterOption={false}
                            onSearch={this.searchAdress}
                            // onChange={this.searchAdress}
                            style={{ width: 200 }}
                          >
                              {console.log(this.state,this.state.addressList)}
                            {this.state.addressList.map(item => (
                             renderPois(item)
                            ))}
                          </Select>)}
                        <QQMap getLocations={this.getLocations} ref={'QMap'}></QQMap>
                    </Form.Item>
                    <Form.Item name='detail' label='描述' >
                    {getFieldDecorator('detail', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入详细地址或位置描述',
                                },
                            ],
                        })(  <Input.TextArea ></Input.TextArea>)}
                       
                    </Form.Item>
                    <Form.Item name='count' label='人数' >
                    {getFieldDecorator('detail', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入人数',
                                },
                            ],
                        })(<InputNumber style={{ width: 200 }} ></InputNumber>)}
                        
                    </Form.Item>
                    <Form.Item name='sex' label='性别' >
                    {getFieldDecorator('sex', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入人数',
                                },
                            ],
                        })(  <Select placeholder='请选择性别' style={{ width: 200 }}>
                        {sexs.map(item => (
                            renderOptions(item)
                        ))}
                    </Select>)}
                    </Form.Item>
                    <Form.Item name='contact' label='联系人' >
                    {getFieldDecorator('contact', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入人数',
                                },
                            ],
                        })(  <Input ></Input>)}
                    
                    </Form.Item>
                    <Form.Item name='phone' label='联系电话' >
                    {getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入人数',
                                },
                            ],
                        })(  <Input ></Input>)}
                    </Form.Item>
                    <Form.Item name='email' label='联系邮箱' >
                    {getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入人数',
                                },
                            ],
                        })(  <Input ></Input>)}
                    </Form.Item>
                    <Form.Item name='sex' >
                    <Checkbox>
              发布即同意 <a href="">《学工帮发布兼职协议》</a>
            </Checkbox>
                    </Form.Item>
                    <Form.Item name='sex' >
                    <Checkbox>
              是否开启快招 <a href="">直接提高招聘效率</a>
            </Checkbox>
                    </Form.Item>
                    <Form.Item >
                       <Button htmlType={'submit'} type='primary'>submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const FormExtra = Form.create({ name: 'Info' })(rawForm)
export default FormExtra;