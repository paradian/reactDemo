import React from 'react';
import {Provider} from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/login';
import App from './App';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);