import React,{Component} from 'react'
import {Table,Button} from 'antd'
class BasicTable extends Component{
    state={
        columns :[],
        data :[]
    }
    componentWillMount() {
        this.setState({
            columns :[
                {title:'标题',dataIndex:'title',key:'title'},
                {title:'地址',dataIndex:'address',key:'address'},
                {title:'日期',dataIndex:'date',key:'date'},
                {title:'联系人',dataIndex:'contact',key:'concact'},
                {title:'时间',dataIndex:'time',key:'time'},
                {title:'操作',dataIndex:'action',key:'action',render:(text,record) =>(
                    <span>
                        <Button onClick={() => this.props.checkItem(record)}>查看</Button>
                        
                    </span>
                )},
                
            ],
            data :[
                {title:'唱',address:'南京新世界中心',date:'2020-03-03,2020-03-05',contact:'寻鲲菜菜子',time:'08:00-18:00',key:1},
                {title:'跳',address:'南京新世界中心',date:'2020-03-03,2020-03-05',contact:'寻鲲菜菜子',time:'08:00-18:00',key:2},
                {title:'rap',address:'南京新世界中心',date:'2020-03-03,2020-03-05',contact:'寻鲲菜菜子',time:'08:00-18:00',key:3}
            ]
        })
    }
    render() {
        
        return (
            <Table columns={this.state.columns} dataSource={this.state.data}>

            </Table>
        )
    }
}
export default BasicTable;