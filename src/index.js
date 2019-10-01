import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer"
import { watchApiCall } from "./sagas/saga"

const sagaMiddleware = createSagaMiddleware();

const store  = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchApiCall);

store.subscribe(() =>{
  console.log("Store updated!", store.getState())
});
  
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
