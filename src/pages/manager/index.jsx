import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Upload,Button, Icon} from 'antd'
import Tools from '../../global/tool'
class Manager extends Component {
  state={
      data:[

      ],
       initColumn : [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        className: 'text-monospace',
    }, {
        title: '年级',
        dataIndex: 'grade',
        key: 'grade',
    }, {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
    }],

attendanceInfoList : [
    {
        name:"张三",
        grade:"2017级",
        department:"前端部门"

    },
    {
        name:"李四",
        grade:"2017级",
        department:"程序部门"

    }]
  }
    getExcel() {
        Tools.exportExcel(this.state.initColumn,this.state.attendanceInfoList,'测试excel.xlsx')
    }
    loadExcel(event) {
      Tools.importExcel(event).then(res =>{
          console.log(res)
      })
    }
    render(){
        return(
            <div>
                Manager
                <Button onClick={() => this.getExcel()}>
                    <Icon type="download"/>下载
                </Button>
                <Upload type="file" accept=".xlsx, xls" onChange={(event) => this.loadExcel(event)}>
                    <Button>
                        <Icon type="upload"/>上传
                    </Button>
                </Upload>
            </div>
        )
    }
}
export default connect()(Manager)