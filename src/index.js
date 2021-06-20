import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

//redux stuff
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


//import reducers
import uiReducer from './store/reducers/ui';
import chReducer from './store/reducers/characters';
const rootReducer = combineReducers({
    ui: uiReducer,
    ch: chReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

