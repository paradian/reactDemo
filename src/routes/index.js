import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import pages from '../pages';
import routesConfig from './config';
import queryString from 'query-string';

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
    render() {
        return (
            <Switch>
                {Object.keys(routesConfig).map(key =>
                    routesConfig[key].map(r => {
                        console.log(r,'route')
                        const route = r => {
                            console.log('enter')
                            console.log(r.component,'r_r')
                            const Component = pages[r.component];
                            console.log(Component,pages[r.component],'component')
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
                                        console.log('Ha?')
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
                                        console.log('dududud')
                                        console.log(wrappedComponent,'warppedcomponent')
                                        return wrappedComponent
                                        //  r.login
                                        //     ? wrappedComponent
                                        //     : this.requireLogin(wrappedComponent, r.auth);
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
export default CRouter;