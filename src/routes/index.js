import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import pages from '../pages';
import routesConfig from './config';
import queryString from 'query-string';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
 class CRouter extends Component {
    // requireAuth = (permission, component) => {
    //     // const { auth } = this.props ||'';
    //     // const { permissions } = auth.data;
    //     // // const { auth } = store.getState().httpData;
    //     // if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    //     // console.log(permission,'permission')
    //     return component;
    // };
    // requireLogin = (component, permission =permission||'') => {
    //     // const { auth } = this.props;
    //     // const { permissions } = auth.data;
    //     // if (process.env.NODE_ENV === 'production' && !permissions) {
    //     //     // 线上环境判断是否登录
    //     //     return <Redirect to={'/login'} />;
    //     // }
    //     // return permission ? this.requireAuth(permission, component) : component;
    //     // console.log(permission,'permission')
    //     return component;
    // };
    componentWillMount() {
        // routesConfig.menus = routesConfig.menus.filter(cell => cell.permission.includes('admin'));
        // let temp = routesConfig.menus
        // temp.forEach((cell,index) =>{
        //     if(cell.permission.findIndex(c => c == 'guest')<0){
        //         routesConfig.menus.splice(index,1)
        //     }
        // })
        // console.log(routesConfig.menus,'routesConfig.menus')
    }
   
   
   
    render() {
        console.log(routesConfig,'routesConfig')
        console.log(this.props,'userLevel')
        return (
            <Switch>
                {Object.keys(routesConfig).map(key =>
                    routesConfig[key].map(r => {
                        const route = r => {
                            const Component = pages[r.component];
                            // console.log(Component,pages[r.component],'component')
                            return (
                                <Route
                                    key={r.route || r.key}
                                    exact
                                    path={r.route || r.key}
                                    render={props => {
                                        const reg = /\?\S*/g;
                                        // 匹配?及其以后字符串
                                        const queryParams = window.location.hash.match(reg);
                                        // 去除?的参数
                                        const { params } = props.match;
                                        Object.keys(params).forEach(key => {
                                            params[key] =
                                                params[key] && params[key].replace(reg, '');
                                        });
                                        props.match.params = { ...params };
                                        const merge = {
                                            ...props,
                                            query: queryParams
                                                ? queryString.parse(queryParams[0])
                                                : {},
                                        };
                                        // 重新包装组件
                                        const wrappedComponent = (
                                            <DocumentTitle title={r.title}>
                                                <Component  {...merge} />
                                            </DocumentTitle>
                                        );
                                        // return wrappedComponent
                                        console.log(this.props.userLevel<r.permission,'userLevel',this.props.userLevel,r.permission)
                                        return (r.permission < this.props.userLevel.userLevel)
                                            ? wrappedComponent
                                            : <Route render={() => <Redirect to="/login" />} />;
                                    }}
                                />
                            );
                        };
                        return r.component ? route(r) : r.subs.map(r => route(r));
                    })
                )}
                {/* 所有未匹配到的路由路径，转向404 */}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
}
function mapGetLevel (state) {
    return {userLevel:state}
}
export default connect(mapGetLevel)(CRouter);