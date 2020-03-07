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
    DatePicker,
    InputNumber,
    TimePicker

   
  } from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';
import QQMap from '../components/QQmap'
import FormExtra from '../components/Form'
const {Option } = Select;
const {TextArea} = Input
const renderOptions = (item)=> (
        <Option value={item.value}>{item.key}</Option>)
   

class Info extends Component {
    state={
        location:{},
        jobInfo:{
            workType:'',
            count:'',

        }
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
        console.log(this,this.props,this.props.form,'form')
        const { getFieldDecorator } = this.props.form;
        console.log(getFieldDecorator,'field')
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
               <FormExtra></FormExtra>
            </div>
        )
    }
}
 const InfoExtra = Form.create({name:'Info'})(Info)
export default InfoExtra;