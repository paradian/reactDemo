import React,{Component} from 'react'
import QMap from 'qqmap'
class QQmap extends Component{
    componentDidMount() {
        this.initQMap(this)
    }
    initQMap=(self)=> {
        const that = this;
        let lng = ''
        let lat =''
        QMap.init('2OXBZ-DPUKW-ZMMRM-OBWJ-MBSBQ-LBBRX',()=>{
            console.log(this,that,self,self.refs,that.refs.container,'QAQ')
            let myLatlng = new QMap.LatLng(lat, lng);
                   // 设置地图属性
                     let myOptions = {
                         zoom: 16,
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
                                 marker.setTitle(i + 1);
                                 markers.push(marker);
                             }
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
searchKeyword = () => {
             //获取文本框输入的值
             let keyword = document.getElementById('keyword').value;
             let region = document.getElementById('region').value;
            // 清空上一次搜索结果
            Array.from(this.markers).forEach(marker=>{
                 marker.setMap(null);
             });
            //调用腾讯地图的搜索功能
            this.searchService.setLocation(region);
            this.searchService.search(keyword);
        }

    //
    render() {
        return(
            <div className={'map-container'}>
                <div ref={'container'} style={{width:300,height:300}}></div>
            </div>
        )
    }
}
export default QQmap