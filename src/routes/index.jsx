import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
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
            <BrowserRouter>
            <Switch>
                {Object.keys(routesConfig).map(key =>
                    routesConfig[key].map(r => {
                        console.log(r,'route')
                        const route = r => {
                            const Component = pages[r.component];
                            return (
                                <Route
                                  component ={Component} 
                                />
                            );
                        };
                        // return r.component ? route(r) : r.subs.map(r => route(r));
                    })
                )}

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
            </BrowserRouter>   
        );
    }
}
export default CRouter;