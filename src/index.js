import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import country from './country.css'

//import Navigation from './presentational/navigation.component';
/*
render(
    <Provider store={store}>
        <div>
            <h1>Project</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
*/

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
