import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducers from './store/reducers'
console.log(typeof rootReducers,'root reducers')
const store = createStore(rootReducers)
ReactDOM.render(
    <Provider store={store}>
<Page  /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
