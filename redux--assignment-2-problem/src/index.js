import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import Reducer from '../src/store/reducer';

const rootReducer = combineReducers({
    pes: Reducer
})

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
