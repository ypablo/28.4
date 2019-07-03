import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';


render(
    <Provider store={store}>
    <div>
        <Router history={hashHistory}/>
        <h1>Project</h1>
            <DevTools />
    </div>      
    </Provider>,
    document.getElementById('root')
)
