import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';

//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, DevTools.instrument());


store.subscribe(() => console.log(store.dispatch()))

export default store;