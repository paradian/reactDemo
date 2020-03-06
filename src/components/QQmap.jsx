import React,{Component} from 'react'
import QMap from 'qqmap'
import {Input,Modal,Button} from 'antd'
const {Search} = Input;
const style ={
    addressItem:{
        'marginLeft':10,
        color:'#1890ff',
        height:20,
        'lineHeight':'20px',
        hover:{
            cursor:'pointer'
        }
    },
    itemContainer:{
        'maxHeight':500,
        'overFlowY':'scroll',
        height:300
    }
}
class QQmap extends Component{
    state={
        visible:false,
        searchResult:[],
        adress:{}
    }
    close =() =>{
        this.setState({
            visible:false
        })
    }
    showModal=() =>(
        this.setState({
            visible:true
        })
        )
        renderItem =(item) =>(
        <p onClick={() => this.getLocation(item)} style={style.addressItem} key={item.id} className={'hover-pointer'}>{item.name}</p>
        )
    componentDidMount() {
        this.initQMap(this)
    }
    getLocation=(item) =>{
        this.setState({
            visible:false,
            adress:item
        })

        this.props.getLocation(item)
        console.log(item)
    }
    getAdress =() =>{

    }
    initQMap=(self)=> {
        const that = this;
        let lng = '118.796470'
        let lat ='32.058380'
        QMap.init('2OXBZ-DPUKW-ZMMRM-OBWJ-MBSBQ-LBBRX',()=>{
            let myLatlng = new QMap.LatLng(lat, lng);
                   // 设置地图属性
                     let myOptions = {
                         zoom: 12,
                         center: myLatlng,
                         mapTypeId: QMap.MapTypeId.ROADMAP,
                     };
                     // 创建地图，绑定dom
                     this.map = new QMap.Map(
                         that.refs.container,
                         myOptions,
                     );
                     // 现实已经存在的点
                     let markerlast = new QMap.Marker({
                         position: myLatlng,
                         map: this.map,
                     });
                     // 调用检索
                     let latlngBounds = new QMap.LatLngBounds();
                     // 调用Poi检索类
                     let searchService = [];//调用百度地图的搜索服务
                     let markers = [];//用户搜索后显示的点的集合
                     // 调用搜索服务
                     searchService = new QMap.SearchService({
                         complete: results=> {
                             let pois = results.detail.pois;
                             for (let i =0 , l = pois.length; i < l; i++) {
                                 let poi = pois[i];
                                 latlngBounds.extend(poi.latLng);
                                 let marker = new QMap.Marker({
                                     map: this.map,
                                     position: poi.latLng,  
                                 });
                                 marker.setTitle(pois[i].name);
                                 markers.push(marker);
                             }
                             console.log(pois,'markers')
                             this.setState({
                                 searchResult:pois
                             })
                             this.map.fitBounds(latlngBounds);
                         },
                     });
                     // 将服务注册到this中，方便搜索方法调用
                     this.searchService = searchService;
                     this.markers = markers;
                     // 鼠标点击监听
                     QMap.event.addListener(
                         this.map,
                         'click',
                         event=> {
                             // 清除初始化位置
                             markerlast.position = event.latLng;
                             markerlast.setMap(null);
                             // 获取经纬度位置
                             let lat = event.latLng.getLat();
                             let lng = event.latLng.getLng();
                             // 赋值至文本框内
                             this.props.form.setFieldsValue({ lat: lat, lng: lng });
                             // 绘制点击的点
                             let marker = new QMap.Marker({
                                 position: event.latLng,
                                 map: this.map,
                             });
                             // 添加监听事件   获取鼠标单击事件
                             QMap.event.addListener(this.map, 'click', function(event) {
                                 marker.setMap(null);
                             });
                             // 清空上一次搜索结果
                             Array.from(this.markers).forEach(marker=>{
                                 marker.setMap(null);
                             });
                         }
                     );
        })
    }
//
searchAdress=(key) =>{
    let value = this.refs.input
    console.log(value,key)
   let res = this.searchService.search(key);
   console.log(this,this.searchService,res)
}
searchKeyword = () => {
             //获取文本框输入的值
             let value = this.refs.input
             let keyword = document.getElementById('keyword').value;
             let region = document.getElementById('region').value;
            // 清空上一次搜索结果
            Array.from(this.markers).forEach(marker=>{
                 marker.setMap(null);
             });
            //调用腾讯地图的搜索功能
            this.searchService.setLocation(region);
           
        }

    //
    render() {
       
        return(
            <div className={'map-container'}>
                <div className={'input'}>
        <Button onClick={ () => this.showModal()}>{(this.state.adress&&this.state.adress.name)?this.state.adress.name:'未选择'}</Button>
                </div>
                <Modal
          title="Basic Modal"
            onOk={this.getAdress}
            onCancel={this.close}
          visible={this.state.visible}
          footer={[]}
          maskClosable={true}
        >
          <Search onSearch={(value) => this.searchAdress(value)} placeholder={'请输入地址'}></Search>
          <div style={style.itemContainer} className={'container'}>
          {this.state.searchResult.map(item =>(
              this.renderItem(item)
          ))}
          </div>
         
        </Modal>
                <div ref={'container'} style={{width:300,height:300}}></div>
            </div>
        )
    }
}
export default QQmap